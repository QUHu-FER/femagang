'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BeritaForm from '@/components/BeritaForm';
import { Loader2, AlertCircle } from 'lucide-react';

interface BeritaData {
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    image: string;
    category: string;
    tags: string[];
    author: string;
    featured: boolean;
}

export default function EditBeritaPage() {
    const { slug } = useParams<{ slug: string }>();
    const [berita, setBerita] = useState<BeritaData | null>(null);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchBerita = async () => {
            try {
                // Use admin endpoint without view counter increment — fetch directly from DB
                const res = await fetch(`/api/berita/${slug}`);
                const data = await res.json();
                if (data.success) {
                    setBerita(data.data);
                } else {
                    setNotFound(true);
                }
            } catch {
                setNotFound(true);
            } finally {
                setLoading(false);
            }
        };
        fetchBerita();
    }, [slug]);

    const handleSubmit = async (formData: {
        title: string;
        content: string;
        excerpt: string;
        image: string;
        category: string;
        tags: string[];
        author: string;
        featured: boolean;
    }) => {
        try {
            const res = await fetch(`/api/berita/${slug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            return { success: data.success, error: data.error, slug: data.data?.slug };
        } catch {
            return { success: false, error: 'Terjadi kesalahan jaringan' };
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
                <p className="text-slate-400 text-sm">Memuat data berita...</p>
            </div>
        );
    }

    if (notFound || !berita) {
        return (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
                <AlertCircle className="w-12 h-12 text-red-400" />
                <p className="text-white font-medium">Berita tidak ditemukan</p>
                <p className="text-slate-400 text-sm">Berita dengan slug &apos;{slug}&apos; tidak ada di database</p>
            </div>
        );
    }

    return <BeritaForm mode="edit" initialData={berita} onSubmit={handleSubmit} />;
}
