import Link from 'next/link';

export const Additionally = () => {
  return (
    <div className="container">
      <div className="my-16 grid grid-cols-1 gap-8 rounded-2xl text-gray sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Клубы</h4>
          </div>
        </Link>
        <Link href="/" className="cursor-pointers text-center">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Сведения об образовательной организации</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Инновационная деятельность</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Служба ранней помощи</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Противодействие коррупции</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Памятки</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-2xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Оценка условий труда</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="flex h-40 items-center justify-center rounded-2xl bg-white px-2 text-center text-xl font-medium shadow-blockShadow transition-transform hover:scale-105 hover:text-black">
            <h4>Проект “Семья.Перезагрузка”</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};
