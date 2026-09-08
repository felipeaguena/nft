import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import data from '@/db/nft-links.json';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'marcos',
  lang: 'en',
});

export default function MarcosPage() {
  return <LinkTree personKey="marcos" personData={data.marcos} lang="en" />;
}

