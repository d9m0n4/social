import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Clubs() {
  return (
    <>
      <div className="relative h-96 w-full rounded-2xl">
        <Image alt="" fill src={'/1.jpg'} style={{ objectFit: 'cover' }} className="rounded-2xl" />
      </div>
      <p>
        Цель – профилактика асоциального поведения детей и подростков, создание условий для
        адаптации несовершеннолетних, находящихся в конфликте с законом. Занятия проходят 2 раза в
        месяц  на базе отделения по работе с семьями и детьми.
      </p>
    </>
  );
}
