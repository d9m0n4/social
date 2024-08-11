import Image from 'next/image';
import Link from 'next/link';
import { MainImage } from '@/components/MainImage';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-blue to-white h-dvh flex flex-col">
        <header className="container">
          <div className="flex py-8 text-white">
            <div className="flex items-start gap-4">
              <div className="flex">
                <Image src="/logo.png" width={38} height={44} alt="logo" />
              </div>
              <div className="flex flex-col text-lg leading-[22px]">
                <span>Центр социального обслуживания</span>
                <span>Яранского района</span>
              </div>
            </div>
            <div className="ml-auto text-lg leading-[22px]">
              <div className="">
                <a href="">+7(83367)2-19-31</a>
              </div>
              <div>
                <a href="">+7(83367)2-19-31</a>
              </div>
            </div>
          </div>
          <nav className="text-white text-lg max-w-[630px] leading-[22px] my-16">
            <ul className="flex gap-6 flex-wrap">
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
        </header>
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
                  href="/"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors">
                  <Image src="/icons/vk.svg" alt={'asdas'} width={32} height={32} />
                  Группа Вконтакте
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors">
                  <Image src="/icons/ok.svg" alt={'asdas'} width={32} height={32} />
                  Группа в Одноклассники
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="flex gap-2 items-center text-gray hover:text-black transition-colors">
                  <Image src="/icons/tg.svg" alt={'asdas'} width={32} height={32} />
                  Группа в Телеграм
                </a>
              </li>
            </ul>
          </div>
          <div className="relative after:absolute after:content-dots after:top-8 after:-right-8" />
        </section>
      </div>
      <main className="py-12">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 mb-24">
            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Клубы</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Сведения об образовательной организации</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Инновационная деятельность</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Служба ранней помощи</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Противодействие коррупции</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Памятки</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Оценка условий труда</h4>
              </Link>
            </div>

            <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-xl font-medium hover:shadow-blockShadowHover transition-shadow">
              <Link href="/" className="cursor-pointers text-center">
                <h4>Проект “Семья.Перезагрузка”</h4>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mb-24">
            <div className="mb-12 text-3xl font-medium">
              <h2>
                Последние <span className="text-green">новости</span>
              </h2>
            </div>
            <div className='grid grid-cols-12 gap-8 text-3xl'>
              <div className='h-72 rounded-lg px-8 py-6 col-span-5 shadow-blockShadow'>
                <h1>8 июля в России отмечается День семьи, любви и верности.</h1>
              </div>

              <div className='h-72 rounded-lg px-8 py-6 col-span-7 shadow-blockShadow'>
                <h1>8 июля в России отмечается День семьи, любви и верности.</h1>
              </div>

              <div className='h-72 rounded-lg px-8 py-6 col-span-7 shadow-blockShadow'>
                <h1>8 июля в России отмечается День семьи, любви и верности.</h1>
              </div>

              <div className='h-72 rounded-lg px-8 py-6 col-span-5 shadow-blockShadow'>
                <h1>8 июля в России отмечается День семьи, любви и верности.</h1>
              </div>
            </div>
            <div className='flex py-6 justify-end'>
              <Link href='/'>все новости </Link>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='h-80 rounded-2xl bg-blue-main' />
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
