import type { Metadata } from 'next';
import CustomizedProjectsClient from '@/src/components/pagesComponents/CustomizedProjectsClient';

export const metadata: Metadata = {
  title: 'Customized Projects & Heavy Lift Logistics | NFT Logistics',
  description: 'Specialized multimodal engineering, route surveys, and project cargo logistics for heavy lift, Out of Gauge (OOG), breakbulk, and industrial machinery.',
  keywords: 'project cargo, heavy lift logistics, OOG cargo, breakbulk shipping, route survey, oversized transport, NFT Logistics',
  alternates: {
    canonical: '/en/solutions/customized-projects',
  },
  openGraph: {
    title: 'Customized Projects & Heavy Lift Logistics | NFT Logistics',
    description: 'Specialized multimodal engineering, route surveys, and turnkey project cargo logistics for oversized and heavy equipment.',
    url: 'https://www.nftlogistics.com.br/en/solutions/customized-projects',
    type: 'website',
  }
};

export default function CustomizedProjectsPage() {
  return (
    <main className="min-h-screen">
      <CustomizedProjectsClient lang="en" />
    </main>
  );
}
