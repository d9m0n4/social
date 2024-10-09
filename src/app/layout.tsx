import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Центр социального обслуживания населения в Яранском районе',
  description:
    'Кировское областное государственное автономное учреждение социального обслуживания «Межрайонный комплексный центр социального обслуживания населения в Яранском районе»',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <footer>
          <div className="container py-6">
            <nav className="text-center text-lg leading-[22px] text-black">
              <ul className="flex flex-wrap justify-center gap-6">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>
                  <Link href="/">Новости</Link>
                </li>
                <li>
                  <Link href="/">Центр</Link>
                </li>
                <li>
                  <Link href="/">Подразделения</Link>
                </li>
                <li>
                  <Link href="/">Обращения граждан</Link>
                </li>
                <li>
                  <Link href="/">Контакты</Link>
                </li>
                <li>
                  <Link href="/">Закупки</Link>
                </li>
                <li>
                  <Link href="/">Финансово-хозяйственная деятельность</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
