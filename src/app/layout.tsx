import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
