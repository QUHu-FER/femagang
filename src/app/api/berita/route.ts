import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Berita from '@/models/Berita';
import { isAdminAuthenticated, generateSlug } from '@/lib/auth';
import { cacheGet, cacheSet, cacheDelete } from '@/lib/cache';

// GET /api/berita - Ambil semua berita dengan filter & pagination
export async function GET(req: NextRequest) {
    try {
        // ── Cache check ───────────────────────────────────────────────
        const { searchParams } = new URL(req.url);
        const cacheKey = `berita:${searchParams.toString()}`;
        const cached = cacheGet<object>(cacheKey);
        if (cached) {
            return NextResponse.json(cached, {
                headers: { 'X-Cache': 'HIT' },
            });
        }

        await dbConnect();

        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '9');
        const category = searchParams.get('category');
        const search = searchParams.get('search');
        const featured = searchParams.get('featured');
        const sortBy = searchParams.get('sortBy') || 'createdAt';

        // Build query filter
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filter: any = {};
        if (category && category !== 'all') filter.category = category;
        if (featured === 'true') filter.featured = true;
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { content: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } },
            ];
        }

        // Sort options
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sort: any = {};
        if (sortBy === 'views') sort.views = -1;
        else if (sortBy === 'oldest') sort.createdAt = 1;
        else sort.createdAt = -1;

        const skip = (page - 1) * limit;
        const total = await Berita.countDocuments(filter);
        const berita = await Berita.find(filter)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .select('-content') // Exclude full content for list view
            .lean();

        const responseBody = {
            success: true,
            data: berita,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };

        // Cache 60s for normal queries, 10s for search queries
        cacheSet(cacheKey, responseBody, search ? 10 : 60);

        return NextResponse.json(responseBody, {
            headers: { 'X-Cache': 'MISS' },
        });
    } catch (error) {
        console.error('GET /api/berita error:', error);
        const msg = error instanceof Error ? error.message : 'Gagal mengambil data berita';
        const isTimeout = msg.includes('timed out') || msg.includes('ECONNREFUSED') || msg.includes('ServerSelectionError');
        return NextResponse.json(
            {
                success: false,
                error: isTimeout
                    ? 'Tidak dapat terhubung ke database. Pastikan IP sudah di-whitelist di MongoDB Atlas.'
                    : msg,
            },
            { status: 500 }
        );
    }
}

// POST /api/berita - Tambah berita baru (butuh auth admin)
export async function POST(req: NextRequest) {
    try {
        const isAuth = await isAdminAuthenticated(req);
        if (!isAuth) {
            return NextResponse.json(
                { success: false, error: 'Tidak terautentikasi' },
                { status: 401 }
            );
        }

        await dbConnect();

        const body = await req.json();
        const { title, content, excerpt, image, category, tags, author, featured } = body;

        // Generate slug
        let slug = generateSlug(title);

        // Ensure slug is unique
        const existing = await Berita.findOne({ slug });
        if (existing) {
            slug = `${slug}-${Date.now()}`;
        }

        // Invalidate all berita caches when new article is created
        cacheDelete('berita:');

        const berita = await Berita.create({
            title,
            slug,
            content,
            excerpt,
            image: image || 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800',
            category,
            tags: tags || [],
            author: author || 'Tim ESDM Sumbar',
            featured: featured || false,
        });

        return NextResponse.json(
            { success: true, data: berita },
            { status: 201 }
        );
    } catch (error) {
        console.error('POST /api/berita error:', error);
        const msg = error instanceof Error ? error.message : 'Gagal menambah berita';
        const isTimeout = msg.includes('timed out') || msg.includes('ECONNREFUSED') || msg.includes('ServerSelectionError');
        return NextResponse.json(
            {
                success: false,
                error: isTimeout
                    ? 'Tidak dapat terhubung ke database. Pastikan IP sudah di-whitelist di MongoDB Atlas Network Access.'
                    : msg,
            },
            { status: 500 }
        );
    }
}
