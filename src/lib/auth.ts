import { SignJWT, jwtVerify } from 'jose';
import { NextRequest } from 'next/server';

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'esdm-fallback-secret-key'
);

export async function signToken(payload: { username: string }): Promise<string> {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(JWT_SECRET);
}

export async function verifyToken(token: string): Promise<{ username: string } | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as { username: string };
    } catch {
        return null;
    }
}

export async function getTokenFromRequest(req: NextRequest): Promise<string | null> {
    // Try Authorization header
    const authHeader = req.headers.get('authorization');
    if (authHeader?.startsWith('Bearer ')) {
        return authHeader.substring(7);
    }
    // Try cookie
    const cookie = req.cookies.get('admin_token');
    if (cookie) {
        return cookie.value;
    }
    return null;
}

export async function isAdminAuthenticated(req: NextRequest): Promise<boolean> {
    const token = await getTokenFromRequest(req);
    if (!token) return false;
    const payload = await verifyToken(token);
    return payload !== null;
}

export function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
}
