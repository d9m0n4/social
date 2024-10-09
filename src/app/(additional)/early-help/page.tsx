// 'use client';
// import { additionallyMenuList } from '@/widgets/additionallyMenu/additionallyMenuList';
// import { redirect, usePathname } from 'next/navigation';

// export default function EarlyHelp() {
//   const pathname = usePathname();
//   const currentRoute = additionallyMenuList.find((item) => item.path.startsWith(pathname));
//   if (currentRoute) {
//     redirect(currentRoute.children ? currentRoute?.children[0].path : currentRoute.path);
//   }
// }

import { redirect } from 'next/navigation';
import { additionallyMenuList } from '@/widgets/additionallyMenu/additionallyMenuList';

export default function GroupRedirectPage({ params }: any) {
  console.log(params);

  const currentGroup = additionallyMenuList.find((item) => item.path.includes(params));

  if (currentGroup && currentGroup.children) {
    redirect(currentGroup.children[0].path);
  }

  return null;
}
