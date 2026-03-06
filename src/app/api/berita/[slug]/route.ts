import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Berita from '@/models/Berita';
import { isAdminAuthenticated, generateSlug } from '@/lib/auth';
import { cacheDelete } from '@/lib/cache';

// GET /api/berita/[slug] - Ambil satu berita & increment views
export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;

        const berita = await Berita.findOneAndUpdate(
            { slug },
            { $inc: { views: 1 } },
            { new: true }
        ).lean();

        if (!berita) {
            return NextResponse.json(
                { success: false, error: 'Berita tidak ditemukan' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: berita });
    } catch (error) {
        console.error('GET /api/berita/[slug] error:', error);
        return NextResponse.json(
            { success: false, error: 'Gagal mengambil berita' },
            { status: 500 }
        );
    }
}

// PUT /api/berita/[slug] - Edit berita (butuh auth admin)
export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const isAuth = await isAdminAuthenticated(req);
        if (!isAuth) {
            return NextResponse.json(
                { success: false, error: 'Tidak terautentikasi' },
                { status: 401 }
            );
        }

        await dbConnect();
        const { slug } = await params;
        const body = await req.json();
        const { title, content, excerpt, image, category, tags, author, featured } = body;

        // Generate new slug if title changed
        let newSlug = slug;
        if (title) {
            const generatedSlug = generateSlug(title);
            if (generatedSlug !== slug) {
                const existing = await Berita.findOne({ slug: generatedSlug });
                newSlug = existing ? `${generatedSlug}-${Date.now()}` : generatedSlug;
            }
        }

        const berita = await Berita.findOneAndUpdate(
            { slug },
            {
                ...(title && { title }),
                ...(newSlug !== slug && { slug: newSlug }),
                ...(content && { content }),
                ...(excerpt && { excerpt }),
                ...(image !== undefined && { image }),
                ...(category && { category }),
                ...(tags !== undefined && { tags }),
                ...(author && { author }),
                ...(featured !== undefined && { featured }),
            },
            { new: true, runValidators: true }
        );

        if (!berita) {
            return NextResponse.json(
                { success: false, error: 'Berita tidak ditemukan' },
                { status: 404 }
            );
        }

        // Invalidate cache after edit
        cacheDelete('berita:');

        return NextResponse.json({ success: true, data: berita });
    } catch (error) {
        console.error('PUT /api/berita/[slug] error:', error);
        return NextResponse.json(
            { success: false, error: 'Gagal mengupdate berita' },
            { status: 500 }
        );
    }
}

// DELETE /api/berita/[slug] - Hapus berita (butuh auth admin)
export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const isAuth = await isAdminAuthenticated(req);
        if (!isAuth) {
            return NextResponse.json(
                { success: false, error: 'Tidak terautentikasi' },
                { status: 401 }
            );
        }

        await dbConnect();
        const { slug } = await params;

        const berita = await Berita.findOneAndDelete({ slug });

        if (!berita) {
            return NextResponse.json(
                { success: false, error: 'Berita tidak ditemukan' },
                { status: 404 }
            );
        }

        // Invalidate cache after delete
        cacheDelete('berita:');

        return NextResponse.json({
            success: true,
            message: 'Berita berhasil dihapus',
        });
    } catch (error) {
        console.error('DELETE /api/berita/[slug] error:', error);
        return NextResponse.json(
            { success: false, error: 'Gagal menghapus berita' },
            { status: 500 }
        );
    }
}
