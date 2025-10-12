'use client';

import Layout from '@/components/Layout';
import PPIDSection from '@/components/PPIDSection';

export default function PPIDPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="pt-20 pb-16">
          <PPIDSection />
        </div>
      </div>
    </Layout>
  );
}
