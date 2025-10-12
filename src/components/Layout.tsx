'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  
  // Check if current page is PPID or Lapor
  const shouldShowScrollToTop = !pathname?.includes('/ppid') && !pathname?.includes('/lapor');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>{children}</main>
      {shouldShowScrollToTop && <ScrollToTop />}
      <Footer />
    </div>
  );
}
