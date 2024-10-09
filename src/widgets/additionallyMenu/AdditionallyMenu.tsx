import Link from 'next/link';
import { additionallyMenuList } from './additionallyMenuList';

export const AdditionallyMenu = () => {
  return (
    <div className="container">
      <div className="my-16 grid grid-cols-1 gap-8 rounded-2xl text-gray sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {additionallyMenuList.map((item) => (
          <Link key={item.path} href={item.path}>
            <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
              <span>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
