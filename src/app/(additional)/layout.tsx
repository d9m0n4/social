import { BgPattern } from '@/components/bgPattern/BgPattern';
import { AsideMenu } from '@/widgets/additionallyMenu';
import { Header } from '@/widgets/header/Header';
import { ReactNode } from 'react';

export default function AdditionallyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative flex flex-col">
        <div className="absolute bottom-0 right-0 top-0 z-0">
          <BgPattern />
        </div>
        <Header />
      </div>
      <main className="container">
        <div className="my-16">
          <h1 className="text-center text-4xl font-medium">Клубы</h1>
        </div>
        <div className="flex gap-8">
          <AsideMenu />
          <div className="flex flex-col gap-12">{children}</div>
        </div>
      </main>
    </>
  );
}
