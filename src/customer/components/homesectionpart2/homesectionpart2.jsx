import React from 'react'
import { useNavigate } from 'react-router-dom';

const Homesectionpart2 = ({product}) => {  
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${product.id}`)}>

   
    <div className='cursor-pointer flex  flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border-2 border-black-300'>
      <div className='h-[13rem] w-[10rem]'>
        {/* object cover for picture is not snick and object top means if img cut then it cut from bottom not from top */}
        <img className='object-cover  object-top w-full h-full' src={product.imgeUrl} alt=""/>

      </div>
      {/* p-4 means padding= 4 */}
      <div className='p-4'>
       <h3 className='text-lg font-medium text-blue-900'>{product.brand} </h3>
       <title className='mt-2 text-sm text-gray-500'>{product.title}</title>
      </div>
    </div>
    </div>
  )
}

export default Homesectionpart2;

// rafce...