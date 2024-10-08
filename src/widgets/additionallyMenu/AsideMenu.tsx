import { additionallyMenuList } from './additionallyMenuList';
import { AsideMenuItem } from './AsideMenuItem';

export const AsideMenu = () => {
  return (
    <aside className="flex w-[350px] shrink-0 flex-col gap-4 rounded-2xl bg-white p-8 text-lg shadow-blockShadow">
      <ul>
        {additionallyMenuList.map((menu, index) => (
          <AsideMenuItem
            key={index}
            basePath={menu.path}
            title={menu.label}
            subMenu={menu.children}
          />
        ))}
      </ul>
    </aside>
  );
};
