import React from 'react';
import net from '../assets/net.png';
import wifi from '../assets/wifi.png';
import battery from '../assets/battery.png';
import bell from '../assets/bell.png';
import profile from '../assets/profile.png';
import heart from '../assets/heart.png';

const Header = () => {
  return (
    <>
      <div className="w-[339.66px] h-[12px] flex justify-between items-center my-[12px]">
        <div className='w-[54px] h-[21px] font-bold'>9:41</div>
        <div className='flex w-[66.66px] h-[11.34px] justify-between'>
          <img src={net} alt='net' />
          <img src={wifi} alt='net' />
          <img src={battery} alt='net' />
        </div>
      </div>
      <div className='w-[360px] h-[52px] flex justify-between items-center my-5'>
        <div className='flex'>
          <div className='w-[52px] h-[52px] rounded-full bg-red-600'>
            <img src={profile} alt='profile' />
          </div>
          <div>
            <div className='ml-4 font-sans text-base font-normal leading-[1.21] text-left'>Good Morning</div>
            <div className='text-[18px] font-bold ml-4'>Lorem ipsum</div>
          </div>
        </div>
        <div className='flex gap-4'>
          <img src={bell} alt='bell' className='w-[24px] h-[24px]' />
          <img src={heart} alt='heart' className='w-[24px] h-[24px]' />
        </div>
      </div>
    </>
  );
};

export default Header;
