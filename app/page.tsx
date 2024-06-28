import Image from 'next/image';

import img1 from './image-1.png';
import img2 from './image-2.png';
import img3 from './image-3.png';
import elon1 from './elon-1.png';
import elon2 from './elon-2.png';
import elon3 from './elon-3.png';

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
            className='absolute drop-shadow-normal object-contain top-[calc(50%+40px)] sm:top-[calc(50%+100px)] -translate-y-1/2 right-[5%] sm:right-[20%] h-[70px] sm:h-[100px] lg:h-[150px] xl:h-[226px]'
          />
        </div>
      </div>

      <div className='relative bg-primary after:multi-[absolute;top-72;left-0;size-full;opacity-60;bg-[url(/ton-bg.svg)]]'>
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
              TBA
            </p>
            <Socials />
            <div className='mt-8 sm:mt-10 text-3xl sm:text-4xl md:text-[40px] space-y-3 sm:space-y-5 text-center max-w-[min(676px,100%)] mx-auto'>
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
              <a
                href={process.env.NEXT_PUBLIC_COIN_URL}
                target='_buy'
                className='flex justify-center'
              >
                <img
                  src='/buy-now.svg'
                  alt=''
                  className='max-lg:!max-w-[min(450px,100%)]'
                />
              </a>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-16 lg:mt-24 relative z-10 overflow-hidden'>
          <div className='text-white text-center px-10 space-y-5 relative z-20 max-md:multi-[w-full;pb-20]'>
            <h2 className='uppercase text-5xl sm:text-6xl md:text-7xl lg:text-8xl'>
              tokenomics
            </h2>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px]'>
              Supply: 100,000,000
            </p>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-[64px]'>
              No tax, no bullshit
            </p>
          </div>
          <Image
            src={elon3}
            alt=''
            className='max-md:multi-[absolute;inset-0] -mb-24'
          />
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
