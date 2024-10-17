import React from 'react';
import "./productcard.css";
import { useNavigate } from 'react-router-dom';

const Productcard = ({product}) => {
  const navigate=useNavigate();

  return (
    <div
    onClick={()=>navigate(`/product/${product.id}`)}
    className='productcard w-[15rem] m-3 transition-all cursor-pointer' >
      
      <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top'
          src={product.imgeUrl} alt="" />
      </div>
      <div className='textpart bg-white'>
        <div >
          <p className='font-bold opacity-60 text-left'>{product.brand}</p>
          <p className='text-left'>{product.title}</p>
        </div>
      </div>
      <div className='flex items-center space-x-2'>
        <p className='font-semibold'>{product.discountedPrice}</p>
        <p className='line-through opacity-50'>{product.price}</p>
        <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
      </div>
    </div>
  )
}

export default Productcard
