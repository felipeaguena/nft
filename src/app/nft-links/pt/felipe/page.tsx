import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import { nftLinks as data } from '@/src/data/db';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'felipe',
  lang: 'pt',
});

export default function FelipePage() {
  return <LinkTree personKey="felipe" personData={data.felipe} lang="pt" />;
}
