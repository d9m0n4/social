import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
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
        <div className="flex flex-col gap-1 ml-auto text-lg leading-[22px]">
          <a href="tel:88336721931">+7(83367)2-19-31</a>
          <a href="tel:88336721031">+7(83367)2-10-31</a>
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
  );
};
