import Image from 'next/image';
import Link from 'next/link';
import {MainImage} from "@/components/MainImage";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue to-white h-dvh">
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
      <section className="container grid grid-cols-hero grid-rows-2">
        <div className="flex relative flex-col gap-2 text-[40px] font-bold before:absolute before:content-dots before:top-0" >
          <h1 className="text-text">Центр социального обслуживания</h1>
          <h1 className="text-green">Яранского района</h1>
        </div>
        <div className='flex justify-end relative'>
          <div className='absolute top-[-64px]'>
            <MainImage />
          </div>
        </div>
        <div className='flex items-center'>
          <ul className='flex flex-col gap-4'>
            <li>
              <a href="/" className='flex gap-2 items-center'>
                <Image src='/icons/vk.svg' alt={'asdas'} width={32} height={32}/>
                Группа Вконтакте
              </a>
            </li>
            <li>
              <a href="/" className='flex gap-2 items-center'>
                <Image src='/icons/ok.svg' alt={'asdas'} width={32} height={32}/>
                Группа Вконтакте
              </a>
            </li>
            <li>
              <a href="/" className='flex gap-2 items-center'>
                <Image src='/icons/tg.svg' alt={'asdas'} width={32} height={32}/>
                Группа Вконтакте
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
