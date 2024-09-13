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
        <div className="absolute"></div>
        <Header />
        <section className="container grid h-full grid-cols-hero grid-rows-2">
          <div className="relative col-span-full flex flex-col justify-center gap-2 text-[40px] font-bold before:absolute before:-left-8 before:top-8 before:content-dots lg:col-span-1">
            <h1 className="relative block text-text">Центр социального обслуживания</h1>
            <h1 className="text-green">Яранского района</h1>
          </div>

          <div className="relative hidden justify-end xl:flex">
            <div className="absolute top-[-96px]">
              <MainImage />
            </div>
          </div>

          <div className="flex items-center">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://vk.com/ksornc43"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/vk.svg" alt={'vk'} width={32} height={32} />
                  Группа Вконтакте
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/group/62863917252777"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/ok.svg" alt={'ok'} width={32} height={32} />
                  Группа в Одноклассники
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ksornc43"
                  target="_blank"
                  className="flex items-center gap-2 text-gray transition-colors hover:text-black"
                >
                  <Image src="/icons/tg.svg" alt={'tg'} width={32} height={32} />
                  Канал в Телеграм
                </a>
              </li>
            </ul>
          </div>
          <div className="relative after:absolute after:-right-8 after:top-8 after:content-dots" />
        </section>
      </div>
      <main className="py-12">
        <div className="container">
          <div className="p-4">
            <POSWidget />
          </div>
        </div>
        <Additionally />
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
