import Image from 'next/image';

import img1 from './image-1.png';
import img2 from './image-2.png';
import img3 from './image-3.png';
import elon1 from './elon-1.png';
import elon2 from './elon-2.png';

import Socials from './socials';

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

      <div className='relative after:multi-[absolute;top-72;left-0;size-full;opacity-60;bg-[url(/ton-bg.svg)]]'>
        <div className='rotate-[-11deg] w-[250px] sm:w-[300px] md:w-[400px] lg:w-[596px] absolute z-0 top-0 -left-16 lg:-left-24'>
          <Image
            src={elon2}
            alt=''
            className='-mt-[calc(50%+50px)] xl:-mt-[calc(50%+110px)]'
          />
        </div>
        <div className='flex relative z-10 justify-between px-5 sm:px-10 pt-20 items-end'>
          <div className='hidden xl:block'>
            <Image src={elon2} alt='' className='rotate-[-25deg] w-[468px]' />
          </div>
          <div className='text-white flex-[1_1_848px]'>
            <h2 className='text-[45px] sm:text-5xl text-center'>
              === Official $ELON Contract ===
            </h2>
            <p className='text-3xl sm:text-4xl md:text-[40px] break-all text-center mt-10'>
              0x69420E3A3aa9E17Dea102Bb3a9b3B73dcDDB9528
            </p>
            <Socials />
            <div className='mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-[40px] space-y-3 sm:space-y-5 text-center max-w-[676px] mx-auto'>
              <p>
                Get a share of Earth's richest man -now with a goated contract
                address!
              </p>
              <p>
                Starting with 69420, sacred number on Xand previous cycle top,
                $ELON contractstands superior among its peers.
              </p>
              <p>Wanna stop missing out?</p>
            </div>
            <div className='flex justify-center mt-10'>
              <a href='/' target='_buy'>
                <img src='/buy-now.svg' alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='relative z-10'>
        <Image
          src={img3}
          alt=''
          placeholder='blur'
          className='w-full object-contain'
        />
      </div>
    </main>
  );
}
