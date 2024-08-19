import Image from 'next/image';
import Link from 'next/link';
import { MainImage } from '@/components/MainImage';
import { LastNews } from '@/widgets/lastNews/LastNews';
import { Additionally } from '@/widgets/additionally/Additionally';
import { Header } from '@/widgets/header/Header';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue to-white h-dvh flex flex-col">
        <Header />
        <section className="container grid grid-cols-hero grid-rows-2 h-full">
          <div className="flex relative flex-col gap-2 text-[40px] font-bold justify-center before:absolute before:content-dots before:top-8 before:-left-8">
            <h1 className="text-text block relative">Центр социального обслуживания</h1>
            <h1 className="text-green">Яранского района</h1>
          </div>

          <div className="flex justify-end relative">
            <div className="absolute top-[-64px]">
              <MainImage />
            </div>
          </div>

          <div className="flex items-center">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://vk.com/ksornc43"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors"
                >
                  <Image src="/icons/vk.svg" alt={'vk'} width={32} height={32} />
                  Группа Вконтакте
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/group/62863917252777"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors"
                >
                  <Image src="/icons/ok.svg" alt={'ok'} width={32} height={32} />
                  Группа в Одноклассники
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/ksornc43"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors"
                >
                  <Image src="/icons/tg.svg" alt={'tg'} width={32} height={32} />
                  Группа в Телеграм
                </a>
              </li>
            </ul>
          </div>
          <div className="relative after:absolute after:content-dots after:top-8 after:-right-8" />
        </section>
      </div>
      <main className="py-12">
        <Additionally />
        <LastNews />
        <div className="container">
          <div className="h-80 rounded-2xl bg-blue-main" />
        </div>
      </main>
      <footer>
        <div className="container py-6">
          <nav className="text-black text-lg text-center leading-[22px]">
            <ul className="flex gap-6 flex-wrap justify-center">
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
