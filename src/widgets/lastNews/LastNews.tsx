import Image from 'next/image';
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
        <div className="grid grid-cols-12 gap-8">
          <div className="group relative col-span-full flex lg:col-span-6 h-72 rounded-2xl bg-graybg hover:scale-105 transition-all cursor-pointer">
            <div className='flex flex-col justify-between basis-1/2 p-6'>
              <h2 className='text-2xl font-medium'>8 июля в России отмечается День семьи, любви и верности.
              </h2>
              <span className='text-gray'>23-07-2024</span>
            </div>
            <div className='flex basis-1/2 relative polygonShape group-hover:initialShape transition-all'>
              <Image src="/new.jpg" alt="news" fill objectFit="cover" className="rounded-br-2xl rounded-tr-2xl"/>
            </div>
          </div>

          <div className="relative col-span-full  lg:col-span-6 flex h-72 rounded-2xl bg-graybg">
            <div className='flex flex-col justify-between basis-1/2 p-6'>
              <h2 className='text-2xl font-medium'>8 июля в России отмечается День семьи, любви и верности.
              </h2>
              <span className='text-gray'>23-07-2024</span>
            </div>
            <div className='flex basis-1/2 relative polygonShape'>
              <Image src="/new.jpg" alt="news" fill objectFit="cover" className="rounded-2xl"/>
            </div>
          </div>

          <div className="relative col-span-full  lg:col-span-6 flex h-72 rounded-2xl bg-graybg">
            <div className='flex flex-col justify-between basis-1/2 p-6'>
              <h2 className='text-2xl font-medium'>8 июля в России отмечается День семьи, любви и верности.
              </h2>
              <span className='text-gray'>23-07-2024</span>
            </div>
            <div className='flex basis-1/2 relative polygonShape'>
              <Image src="/new.jpg" alt="news" fill objectFit="cover" className="rounded-2xl"/>
            </div>
          </div>

          <div className="relative col-span-full flex  lg:col-span-6 h-72 rounded-2xl bg-graybg">
            <div className='flex flex-col justify-between basis-1/2 p-6'>
              <h2 className='text-2xl font-medium'>8 июля в России отмечается День семьи, любви и верности.
              </h2>
              <span className='text-gray'>23-07-2024</span>
            </div>
            <div className='flex basis-1/2 relative polygonShape'>
              <Image src="/new.jpg" alt="news" fill objectFit="cover" className="rounded-2xl"/>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-6">
          <Link href="/" className="flex items-center gap-2">
            все новости
            <span>
              <svg
                  width="65"
                  height="16"
                  viewBox="0 0 65 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M64.7071 8.70711C65.0976 8.31658 65.0976 7.68342 64.7071 7.29289L58.3431 0.928932C57.9526 0.538408 57.3195 0.538408 56.9289 0.928932C56.5384 1.31946 56.5384 1.95262 56.9289 2.34315L62.5858 8L56.9289 13.6569C56.5384 14.0474 56.5384 14.6805 56.9289 15.0711C57.3195 15.4616 57.9526 15.4616 58.3431 15.0711L64.7071 8.70711ZM0 9H64V7H0V9Z"
                  fill="#8DCEF4"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
