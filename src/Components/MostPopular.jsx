import React from 'react';
import gril from '../assets/gril.png';

const MostPopular = () => {
  return (
    <>
      <div className='w-[340px] h-[22px] flex justify-between my-5'>
        <div className='text-[#232323] text-[18px] font-bold'>Most Popular</div>
        <div className='text-[#FC6C85] font-bold text-[16px]'>See All</div>
      </div>
      <div className='w-[367px] flex justify-between'>
        <div className='py-2 px-4 border-2 rounded-3xl bg-[#FC6C85]'>All</div>
        <div className='py-2 px-4 border-2 rounded-3xl'>Clothes</div>
        <div className='py-2 px-4 border-2 rounded-3xl'>Shoes</div>
        <div className='py-2 px-4 border-2 rounded-3xl'>Bags</div>
      </div>
      <div className='flex gap-5 mt-5'>
        <div>
          <img src={gril} alt='gril' />
        </div>
        <div>
          <img src={gril} alt='gril' />
        </div>
      </div>
    </>
  );
};

export default MostPopular;
