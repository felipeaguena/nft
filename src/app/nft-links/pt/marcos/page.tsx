import type { Metadata } from 'next';
import LinkTree from '@/src/app/nft-links/components/LinkTree';
import { nftLinks as data } from '@/src/data/db';
import { constructLinkTreeMetadata } from '@/src/lib/seo';

export const metadata: Metadata = constructLinkTreeMetadata({
  personKey: 'marcos',
  lang: 'pt',
});

export default function MarcosPage() {
  return <LinkTree personKey="marcos" personData={data.marcos} lang="pt" />;
}
