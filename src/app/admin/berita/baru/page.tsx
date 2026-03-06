'use client';

import BeritaForm from '@/components/BeritaForm';

export default function TambahBeritaPage() {
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
            const res = await fetch('/api/berita', {
                method: 'POST',
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

    return <BeritaForm mode="create" onSubmit={handleSubmit} />;
}
