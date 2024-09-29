'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigationList } from './navigationList';

export const MainNavigation = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="my-12 max-w-[630px] text-lg font-medium leading-[22px] text-[#454545]">
      <ul className="flex flex-wrap gap-6">
        {navigationList.map(({ link, title }) => (
          <li key={title}>
            <Link href={link} className={pathname === link ? 'font-bold text-yellow' : ''}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
