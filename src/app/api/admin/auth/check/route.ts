import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { isAdminAuthenticated } from '@/lib/auth';

export async function GET(req: NextRequest) {
    const isAuth = await isAdminAuthenticated(req);
    if (!isAuth) {
        return NextResponse.json({ success: false }, { status: 401 });
    }
    return NextResponse.json({ success: true });
}
