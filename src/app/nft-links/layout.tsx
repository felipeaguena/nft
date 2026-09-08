import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function NftLinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
}
