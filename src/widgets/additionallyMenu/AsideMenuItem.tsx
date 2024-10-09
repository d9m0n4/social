'use client';
import { useEffect, useState } from 'react';
import { LinkItem } from './types';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

type AsideMenuItemProps = {
  title: string;
  basePath: string;
  subMenu?: LinkItem[];
};

export const AsideMenuItem = ({ title, basePath, subMenu }: AsideMenuItemProps) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.startsWith(basePath)) {
      setIsMenuOpened(true);
    }
  }, [pathname, basePath]);

  const handleMenuItemClick = () => {
    if (subMenu?.length === 0) {
      router.push(basePath);
    } else {
      setIsMenuOpened(!isMenuOpened);
    }
  };

  return (
    <div className="mb-4">
      <button
        onClick={handleMenuItemClick}
        className={`w-full text-left text-lg font-medium ${pathname.startsWith(basePath) ? 'text-yellow' : 'text-black'}`}
      >
        {title}
      </button>
      <div
        className={`ease overflow-hidden transition-[max-height] duration-700 ${isMenuOpened ? 'max-h-96' : 'max-h-0'}`}
      >
        {subMenu && subMenu.length > 0 && (
          <ul className="mt-2 space-y-2 pl-4">
            {subMenu.map((item, index) => (
              <li key={index} className="text-gray-700 text-base">
                <Link
                  href={item.path}
                  className={`${pathname === item.path ? 'text-yellow' : 'text-black'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
