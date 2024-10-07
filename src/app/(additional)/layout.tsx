import { BgPattern } from '@/components/bgPattern/BgPattern';
import { Header } from '@/widgets/header/Header';
import { ReactNode } from 'react';

export default function AdditionallyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="relative flex h-dvh flex-col">
        <div className="absolute bottom-0 right-0 top-0 z-0">
          <BgPattern />
        </div>
        <Header />
        <div className="container">{children}</div>
      </div>
    </>
  );
}
