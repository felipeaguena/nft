import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import { nftLinks as data } from '@/src/data/db';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'vitor',
  lang: 'cn',
});

export default function VitorPage() {
  return <LinkTree personKey="vitor" personData={data.vitor} lang="cn" />;
}
