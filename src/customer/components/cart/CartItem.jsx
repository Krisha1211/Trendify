import React from 'react';
import IconButton from '@mui/material/IconButton';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@headlessui/react';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>

                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img className='w-full h-full object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/gown/9/5/7/na-s-3-4-sleeve-stitched-sho31krred-saponharsh-na-original-imagmufurbc2znpg.jpeg?q=70" alt="" />
                </div>
                <div className='ml-5 space-y-1 text-left'>
                    <p className='font-semibold'>Printed Viscose Rayon Stitched Anarkali Gown</p>
                    <p className='opacity-70'>size:L,white</p>
                    <p className='opacity-70 mt-2'>Seller:SAPONHARSH</p>
                    <div className='flex space-x-5 items-center text-color-gray-900 pt-4'>
                        <p className='font-semibold'> ₹46 </p >
                        <p className='opacity-50 line-through'>₹99</p>
                        <p className='text-green-600 font-semibold'>53% of</p>
                    </div>
                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{color:"RGB(145 85 253)"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button className='text-red-600'>Remove</Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem;
