import Link from 'next/link';

export const Additionally = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-8 mb-24 text-gray">
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Клубы</h4>
          </div>
        </Link>
        <Link href="/" className="cursor-pointers text-center">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Сведения об образовательной организации</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Инновационная деятельность</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Служба ранней помощи</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Противодействие коррупции</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Памятки</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-2xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Оценка условий труда</h4>
          </div>
        </Link>
        <Link href="/">
          <div className="px-2 rounded-lg shadow-blockShadow flex items-center justify-center h-40 text-xl font-medium hover:shadow-blockShadowHover transition-shadow">
            <h4>Проект “Семья.Перезагрузка”</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};
