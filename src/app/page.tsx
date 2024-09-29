import Image from 'next/image';
import Link from 'next/link';
import { MainImage } from '@/components/MainImage';
import { LastNews } from '@/widgets/lastNews/LastNews';
import { Additionally } from '@/widgets/additionally/Additionally';
import { Header } from '@/widgets/header/Header';
import POSWidget from '@/widgets/POS/POSWidget';

export default function Home() {
  return (
    <>
      <div className="relative flex h-dvh flex-col">
        <div className="absolute bottom-0 right-0 top-0 z-0">
          <svg width="735" viewBox="0 0 735 879" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.6"
              d="M257.109 41.6425C144.064 119.761 169.485 276.204 92.9233 385.18C66.2715 423.1 31.8339 457.036 13.8664 499.103C-27.3839 595.391 29.3883 704.614 105.376 781.09C141.61 817.573 183.933 850.996 235.141 866.374C274.519 878.199 316.743 878.692 358.193 879L476.016 866.374H547.57H732.519L892 874.237V712.193C892 712.193 890.787 517.14 890.787 440.62C890.787 440.62 892 286.668 892 179.549C892 130.126 892 -1 892 -1C783.215 -1 591.837 -1 591.837 -1C498.453 6.23414 334.494 -11.8395 257.109 41.6425Z"
              fill="#8DCEF4"
              fillOpacity="0.16"
            />
          </svg>
        </div>
        <Header />
        <section className="container grid h-full grid-cols-hero grid-rows-2 items-end">
          <div className="relative col-span-full flex flex-col justify-center gap-2 text-[40px] font-bold leading-[48px] before:absolute before:-left-8 before:top-8 before:content-dots lg:col-span-1">
            <h1 className="relative block text-text">Центр социального обслуживания населения</h1>
            <h1 className="text-green">Яранского района</h1>
          </div>

          <div className="relative hidden h-full justify-end xl:flex">
            <div className="absolute -top-10 flex rounded-2xl">
              <MainImage />
            </div>
          </div>

          <div className="mb-8 flex items-center">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://vk.com/ksornc43"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/vk.svg" alt={'vk'} width={24} height={24} />
                  Группа Вконтакте
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/group/62863917252777"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/ok.svg" alt={'ok'} width={24} height={24} />
                  Группа в Одноклассники
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ksornc43"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/tg.svg" alt={'tg'} width={24} height={24} />
                  Канал в Телеграм
                </a>
              </li>
            </ul>
          </div>
          <div className="relative after:absolute after:-right-8 after:top-8 after:content-dots" />
        </section>
      </div>
      <main className="py-12">
        <Additionally />
        <div className="container">
          <div className="my-16">
            <POSWidget />
          </div>
        </div>
        <LastNews />
        <div className="container">
          <div className="h-80 rounded-2xl bg-blue-main" />
        </div>
      </main>
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
    </>
  );
}
