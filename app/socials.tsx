export default function Socials() {
  return (
    <div className='mt-8  sm:mt-10 flex justify-center gap-x-5 sm:gap-x-10 *:multi-[relative] [&_img:first-child]:animate-[spin_1.5s_steps(10)_infinite] [&_img:last-child]:multi-[absolute;left-1/2;top-1/2;-translate-x-1/2;-translate-y-1/2]'>
      <a href='/' target='_x'>
        <img src='/x-circle.svg' alt='' />
        <img src='/x.svg' alt='' />
      </a>
      <a href='/' target='_tele'>
        <img
          src='/tele-circle.svg'
          alt=''
          className='![animation-direction:reverse]'
        />
        <img src='/tele.svg' alt='' />
      </a>
      <a href='/' target='_ton'>
        <img src='/ton-circle.svg' alt='' />
        <img src='/ton.svg' alt='' />
      </a>
    </div>
  );
}
