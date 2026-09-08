import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import data from '@/db/nft-links.json';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'vitor',
  lang: 'en',
});

export default function VitorPage() {
  return <LinkTree personKey="vitor" personData={data.vitor} lang="en" />;
}

