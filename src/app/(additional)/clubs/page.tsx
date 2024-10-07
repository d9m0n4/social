import Image from 'next/image';

export default function Clubs() {
  const dropdownData = [
    {
      title: 'Клубы',
      items: [
        { name: 'Подросток', href: '/clubs/podrostok' },
        { name: 'Содружество', href: '/clubs/sodruzhestvo' },
        { name: 'Мозайка', href: '/clubs/mozaika' },
        { name: 'Серебряные росы', href: '/clubs/serebryanye-rosy' },
        { name: 'Источник', href: '/clubs/istochnik' },
      ],
    },
    {
      title: 'Сведения об образовательной организации',
      items: [],
    },
    {
      title: 'Инновационная деятельность',
      items: [],
    },
    {
      title: 'Служба ранней помощи',
      items: [],
    },
    {
      title: 'Противодействие коррупции',
      items: [],
    },
    {
      title: 'Памятки',
      items: [],
    },
    {
      title: 'Оценка условий труда',
      items: [],
    },
    {
      title: 'Проект “Семья.Перезагрузка”',
      items: [],
    },
  ];

  return (
    <div>
      <div className="my-24">
        <h1 className="text-center text-4xl">Клубы</h1>
      </div>
      <div className="flex gap-8">
        <div className="flex w-[350px] flex-col gap-4 rounded-2xl bg-white p-8 text-lg shadow-blockShadow">
          {dropdownData.map((data) => (
            <div key={data.title}>
              <div>{data.title}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-12">
          <Image width={100} height={547} src={'/1.jpg'} />
          <p>
            Цель – профилактика асоциального поведения детей и подростков, создание условий для
            адаптации несовершеннолетних, находящихся в конфликте с законом. Занятия проходят 2 раза
            в месяц  на базе отделения по работе с семьями и детьми.
          </p>
        </div>
      </div>
    </div>
  );
}
