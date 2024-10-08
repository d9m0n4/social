import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { BgPattern } from '@/components/bgPattern/BgPattern';
import { Header } from '@/widgets/header/Header';

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
        <div className="relative flex h-dvh flex-col">
          <div className="absolute bottom-0 right-0 top-0 z-0">
            <BgPattern />
          </div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
