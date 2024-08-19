import Link from 'next/link';

export const LastNews = () => {
  return (
    <div className="container">
      <div className="mb-24">
        <div className="mb-12 text-3xl font-medium">
          <h2>
            Последние <span className="text-green">новости</span>
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-8 text-3xl">
          <div className="flex items-end h-72 rounded-lg px-8 py-6 col-span-5 shadow-blockShadow ">
            <h1 className="text-gray hover:text-black transition-colors cursor-pointer">
              8 июля в России отмечается День семьи, любви и верности.
            </h1>
          </div>

          <div className="flex items-end h-72 rounded-lg px-8 py-6 col-span-7 shadow-blockShadow">
            <h1 className="text-gray hover:text-black transition-colors cursor-pointer">
              8 июля в России отмечается День семьи, любви и верности.
            </h1>
          </div>

          <div className="flex items-end h-72 rounded-lg px-8 py-6 col-span-7 shadow-blockShadow">
            <h1 className="text-gray hover:text-black transition-colors cursor-pointer">
              8 июля в России отмечается День семьи, любви и верности.
            </h1>
          </div>

          <div className="flex items-end h-72 rounded-lg px-8 py-6 col-span-5 shadow-blockShadow">
            <h1 className="text-gray hover:text-black transition-colors cursor-pointer">
              8 июля в России отмечается День семьи, любви и верности.
            </h1>
          </div>
        </div>
        <div className="flex py-6 justify-end">
          <Link href="/">все новости </Link>
        </div>
      </div>
    </div>
  );
};
