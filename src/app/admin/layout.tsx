'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    Newspaper,
    PlusCircle,
    LogOut,
    Menu,
    X,
    ChevronRight,
    Bell,
    Settings,
    Zap,
} from 'lucide-react';

function AdminSidebar({ onClose }: { onClose?: () => void }) {
    const pathname = usePathname();
    const router = useRouter();

    const navItems = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/berita/baru', label: 'Tambah Berita', icon: PlusCircle },
    ];

    const handleLogout = async () => {
        localStorage.removeItem('admin_token');
        await fetch('/api/admin/auth', { method: 'DELETE' });
        router.push('/admin/login');
    };

    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <div className="font-bold text-white text-sm leading-tight">Admin Panel</div>
                        <div className="text-blue-300 text-xs">ESDM Sumbar</div>
                    </div>
                    {onClose && (
                        <button onClick={onClose} className="ml-auto p-1 hover:bg-white/10 rounded-lg lg:hidden">
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <p className="text-xs font-semibold text-blue-400/70 uppercase tracking-wider px-3 mb-3">
                    Menu Utama
                </p>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${isActive
                                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                                : 'text-blue-200/80 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-blue-400 group-hover:text-white'}`} />
                            <span>{item.label}</span>
                            {isActive && <ChevronRight className="w-3 h-3 ml-auto opacity-70" />}
                        </Link>
                    );
                })}

                <div className="pt-4">
                    <p className="text-xs font-semibold text-blue-400/70 uppercase tracking-wider px-3 mb-3">
                        Halaman Publik
                    </p>
                    <Link
                        href="/berita"
                        target="_blank"
                        onClick={onClose}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-blue-200/80 hover:bg-white/10 hover:text-white transition-all duration-200 group"
                    >
                        <Newspaper className="w-4 h-4 text-blue-400 group-hover:text-white" />
                        <span>Lihat Halaman Berita</span>
                    </Link>
                </div>
            </nav>

            {/* Bottom: User & Logout */}
            <div className="p-4 border-t border-white/10 space-y-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-white/5">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                        A
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-white truncate">adminesdm</div>
                        <div className="text-xs text-blue-400">Super Admin</div>
                    </div>
                    <button
                        onClick={() => { }}
                        className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                    >
                        <Settings className="w-4 h-4 text-blue-400" />
                    </button>
                </div>
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200"
                >
                    <LogOut className="w-4 h-4" />
                    <span>Keluar</span>
                </button>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const checkAuth = useCallback(() => {
        if (pathname === '/admin/login') {
            setIsAuthenticated(true);
            return;
        }
        // Cek token dari localStorage (lebih cepat, tidak butuh network)
        const token = localStorage.getItem('admin_token');
        if (!token) {
            router.replace('/admin/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [pathname, router]);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                    <p className="text-blue-400 text-sm">Memverifikasi sesi...</p>
                </div>
            </div>
        );
    }

    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex w-64 flex-shrink-0">
                <div className="w-64 fixed inset-y-0 left-0 z-50">
                    <AdminSidebar />
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div className="lg:hidden fixed inset-0 z-50 flex">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <div className="relative w-72 h-full shadow-2xl">
                        <AdminSidebar onClose={() => setSidebarOpen(false)} />
                    </div>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-screen lg:ml-64">
                {/* Top Navbar */}
                <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
                    <div className="flex items-center justify-between px-4 sm:px-6 h-16">
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden p-2 rounded-xl hover:bg-white/10 text-white transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            {/* Logo mobile */}
                            <div className="lg:hidden">
                                <Image src="/logo-sumbar.png" alt="Logo ESDM" width={28} height={28} className="rounded-md" />
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-white/50 text-sm">Admin Panel</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-xl hover:bg-white/10 text-blue-300 transition-colors relative">
                                <Bell className="w-5 h-5" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
                            </button>
                            <Link
                                href="/"
                                target="_blank"
                                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm transition-colors"
                            >
                                <span>Lihat Website</span>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
