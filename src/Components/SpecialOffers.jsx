import React from 'react';
import offer from '../assets/offer.png';

const SpecialOffers = () => {
  return (
    <>
      <div className='w-[351px] h-[22px] flex justify-between'>
        <div className='text-[#232323] text-[18px] font-bold'>Special Offers</div>
        <div className='text-[#FC6C85] font-bold text-[16px]'>See All</div>
      </div>
      <div className='w-[351px] h-[137px] flex justify-between bgcolor rounded-3xl border-[2px] border-[#FC6C85] my-5'>
        <div className='flex flex-col items-start justify-center ml-5'>
          <div className='text-[30px] text-[#FC6C85] font-bold'>30%</div>
          <div className='text-[#FC6C85] text-[16px] font-bold'>Today’s Special!</div>
          <div className='text-[#FC6C85] text-[10px] mt-3'>Get discount for every<br />order, only valid for today</div>
        </div>
        <div>
          <img src={offer} alt='offer' className='h-[133px] mr-4' />
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;
