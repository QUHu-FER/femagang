import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        const validUsername = process.env.ADMIN_USERNAME || 'adminesdm';
        const validPassword = process.env.ADMIN_PASSWORD || 'adminesdm999';

        if (username !== validUsername || password !== validPassword) {
            return NextResponse.json(
                { success: false, error: 'Username atau password salah' },
                { status: 401 }
            );
        }

        const token = await signToken({ username });

        const response = NextResponse.json({
            success: true,
            message: 'Login berhasil',
            token, // Return token so client can also store it
        });

        // Set httpOnly cookie — accessible oleh server
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24, // 24 jam
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('POST /api/admin/auth error:', error);
        return NextResponse.json(
            { success: false, error: 'Terjadi kesalahan server' },
            { status: 500 }
        );
    }
}

export async function DELETE() {
    const response = NextResponse.json({ success: true, message: 'Logout berhasil' });
    response.cookies.set('admin_token', '', {
        httpOnly: true,
        maxAge: 0,
        path: '/',
    });
    return response;
}
