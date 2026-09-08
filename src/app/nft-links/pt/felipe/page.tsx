import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import data from '@/db/nft-links.json';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'felipe',
  lang: 'pt',
});

export default function FelipePage() {
  return <LinkTree personKey="felipe" personData={data.felipe} lang="pt" />;
}
