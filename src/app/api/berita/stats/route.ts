import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Berita from '@/models/Berita';
import { cacheGet, cacheSet } from '@/lib/cache';

const CACHE_KEY = 'berita:stats';

// GET /api/berita/stats
// Returns total, featured, totalViews, AND per-category counts in 1 MongoDB query.
// Response is cached for 60 seconds.
export async function GET() {
    // ── Cache check ──────────────────────────────────────────────────
    const cached = cacheGet<object>(CACHE_KEY);
    if (cached) {
        return NextResponse.json(cached, { headers: { 'X-Cache': 'HIT' } });
    }

    try {
        await dbConnect();

        const [facetResult] = await Berita.aggregate([
            {
                $facet: {
                    overview: [
                        {
                            $group: {
                                _id: null,
                                total: { $sum: 1 },
                                totalViews: { $sum: '$views' },
                            },
                        },
                    ],
                    featuredCount: [
                        { $match: { featured: true } },
                        { $count: 'count' },
                    ],
                    byCategory: [
                        { $group: { _id: '$category', count: { $sum: 1 } } },
                    ],
                },
            },
        ]);

        const total = facetResult.overview[0]?.total ?? 0;
        const totalViews = facetResult.overview[0]?.totalViews ?? 0;
        const featured = facetResult.featuredCount[0]?.count ?? 0;

        const categoryCounts: Record<string, number> = {};
        for (const { _id, count } of facetResult.byCategory) {
            if (_id) categoryCounts[_id as string] = count;
        }

        const responseBody = {
            success: true,
            data: { total, featured, totalViews, categoryCounts },
        };

        // Cache for 60 seconds
        cacheSet(CACHE_KEY, responseBody, 60);

        return NextResponse.json(responseBody, { headers: { 'X-Cache': 'MISS' } });
    } catch (error) {
        console.error('GET /api/berita/stats error:', error);
        return NextResponse.json(
            { success: false, error: 'Gagal mengambil statistik' },
            { status: 500 }
        );
    }
}
