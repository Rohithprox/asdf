'use client';

import dynamic from 'next/dynamic';

const AboutPage = dynamic(() => import('@/components/pages/AboutPage'), {
  ssr: true
});

export default function Page() {
  return <AboutPage />;
} 