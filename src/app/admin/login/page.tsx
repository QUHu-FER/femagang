'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Zap, Shield, AlertCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function AdminLoginPage() {
    const [form, setForm] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/admin/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
                credentials: 'include',
            });

            const data = await res.json();

            if (data.success) {
                // Simpan token ke localStorage untuk auth check cepat di layout
                if (data.token) {
                    localStorage.setItem('admin_token', data.token);
                }
                router.push('/admin');
            } else {
                setError(data.error || 'Login gagal. Periksa username dan password Anda.');
            }
        } catch {
            setError('Terjadi kesalahan jaringan. Coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex overflow-hidden">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                <div className="relative z-10 text-center">
                    <div className="flex items-center justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl scale-150" />
                            <div className="relative w-24 h-24 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 rotate-3">
                                <Image src="/logo-sumbar.png" alt="Logo ESDM Sumbar" width={64} height={64} className="object-contain" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-3">ESDM Sumbar</h1>
                    <p className="text-blue-300 text-lg mb-2">Dinas Energi dan Sumber Daya Mineral</p>
                    <p className="text-slate-400">Provinsi Sumatera Barat</p>

                    <div className="mt-12 grid grid-cols-3 gap-4">
                        {[
                            { label: 'Berita', value: 'Live DB' },
                            { label: 'Kategori', value: '5+' },
                            { label: 'Admin', value: 'Secure' },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                                <div className="text-blue-300 font-bold text-lg">{stat.value}</div>
                                <div className="text-slate-400 text-xs mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-8">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl flex items-center justify-center mb-3 shadow-xl shadow-blue-500/30">
                            <Zap className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl font-bold text-white">ESDM Sumbar</h1>
                        <p className="text-slate-400 text-sm mt-1">Admin Panel</p>
                    </div>

                    {/* Card */}
                    <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-blue-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                                <Shield className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white">Masuk ke Admin Panel</h2>
                                <p className="text-slate-400 text-sm">Manajemen Konten Berita ESDM</p>
                            </div>
                        </div>

                        {/* Error Alert */}
                        {error && (
                            <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-4 mb-5 text-sm">
                                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Username */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    value={form.username}
                                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                                    placeholder="Masukkan username"
                                    required
                                    className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={form.password}
                                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                                        placeholder="Masukkan password"
                                        required
                                        className="w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 pr-12 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 text-sm"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors p-1"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 disabled:from-blue-800 disabled:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 disabled:cursor-not-allowed mt-2 text-sm"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Memverifikasi...</span>
                                    </>
                                ) : (
                                    <>
                                        <Shield className="w-4 h-4" />
                                        <span>Masuk ke Dashboard</span>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Info */}
                        <div className="mt-6 pt-5 border-t border-white/10">
                            <p className="text-center text-slate-500 text-xs">
                                Sistem ini hanya dapat diakses oleh administrator resmi
                                <br />Dinas ESDM Provinsi Sumatera Barat
                            </p>
                        </div>
                    </div>

                    <p className="text-center text-slate-600 text-xs mt-6">
                        © 2025 Dinas ESDM Provinsi Sumatera Barat
                    </p>
                </div>
            </div>
        </div>
    );
}
