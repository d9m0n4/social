import { MainNavigation } from '@/components/mainNavigation/MainNavigation';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className="flex py-8 text-black">
        <div className="container flex">
          <Link href="/" className="flex items-start gap-4">
            <div className="flex">
              <Image src="/logo.png" width={38} height={44} alt="logo" />
            </div>
            <div className="flex flex-col text-lg leading-[22px]">
              <span>Центр социального обслуживания населения</span>
              <span>Яранского района</span>
            </div>
          </Link>
          <div className="ml-auto flex flex-col gap-1 text-lg leading-[22px]">
            <a href="tel:88336721931">+7(83367)2-19-31</a>
            <a href="tel:88336721031">+7(83367)2-10-31</a>
          </div>
        </div>
      </div>
      <div className="container">
        <nav className="my-12 max-w-[630px] text-lg font-medium leading-[22px] text-black">
          <MainNavigation />
        </nav>
      </div>
    </header>
  );
};
