import Image from 'next/image';

import img1 from './image-1.png';
import img2 from './image-2.png';
import img3 from './image-3.png';
import elon1 from './elon-1.png';
import elon2 from './elon-2.png';

export default function Home() {
  return (
    <main className='min-h-screen max-w-screen-2xl mx-auto'>
      <div className='relative'>
        <Image
          src={img1}
          priority
          alt=''
          placeholder='blur'
          className='w-full object-contain'
        />
        <div className='absolute inset-0'>
          <Image
            src={elon1}
            alt=''
            height={246}
            className='absolute object-contain top-[calc(50%+40px)] sm:top-[calc(50%+100px)] -translate-y-1/2 left-[5%] sm:left-[20%] h-[70px] sm:h-[100px] lg:h-[150px] xl:h-[246px]'
          />
          <Image
            src={img2}
            alt=''
            height={226}
            className='absolute object-contain top-[calc(50%+40px)] sm:top-[calc(50%+100px)] -translate-y-1/2 right-[5%] sm:right-[20%] h-[70px] sm:h-[100px] lg:h-[150px] xl:h-[226px]'
          />
        </div>
      </div>
    </main>
  );
}
