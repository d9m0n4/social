import { BgPattern } from '@/components/bgPattern/BgPattern';
import { AsideMenu } from '@/widgets/additionallyMenu';
import { Header } from '@/widgets/header/Header';
import { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="absolute bottom-0 right-0 top-0 z-0">
          <BgPattern />
        </div>
        <Header />
      </div>
      <main className="container">{children}</main>
    </>
  );
}
