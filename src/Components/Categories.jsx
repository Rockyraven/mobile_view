import React from 'react';
import bag from '../assets/bag.png';
import clothe from '../assets/clothe.png';
import shoes from '../assets/shoes.png';

const Categories = () => {
  return (
    <div className='w-[299px] h-[94px] flex justify-between'>
      <div className='w-[64px] h-[94px]'>
        <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
          <img src={clothe} alt='clothes' />
        </div>
        <div className='text-[#303030] text-[16px] font-semibold text-center'>Clothes</div>
      </div>
      <div className='w-[64px] h-[94px]'>
        <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
          <img src={shoes} alt='shoes' />
        </div>
        <div className='text-[#303030] text-[16px] font-semibold text-center'>Shoes</div>
      </div>
      <div className='w-[64px] h-[94px]'>
        <div className='w-[65px] h-[65px] rounded-full bgcolor flex justify-center items-center'>
          <img src={bag} alt='bags' />
        </div>
        <div className='text-[#303030] text-[16px] font-semibold text-center'>Bags</div>
      </div>
    </div>
  );
};

export default Categories;
