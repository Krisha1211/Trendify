import React from 'react'
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


const Cart = () => {

const navigate= useNavigate();

const clickoncheckout=()=>
    {
        navigate("/checkout?step=2")
    }
    return (
        <div className='pt-6'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                 {  [1,1,1,1,1].map((item)=><CartItem/>) }
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4 text-left'>Price details</p>
                    <hr/>
                    <div className='space-y-3 font-semi-bold mb-10'>
                        <div className='flex justify-between pt-3'>
                             <span>Price</span>
                             <span>₹1,099</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                             <span>Discount</span>
                             <span className='text-green-600'>₹499</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                             <span>Delivery Charges</span>
                             <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                             <span>Total Amount</span>
                             <span className='text-green-600'>₹1,456</span>
                        </div>

                    </div>
                    </div>

                    <Button onClick={clickoncheckout} variant="contained" 
                    className='w-full ' sx={{bgcolor:"#9155fd",px:"2.5rem", py:"0.7rem"}}>Checkout</Button>
                </div>

            </div>
        </div>
    )
}

export default Cart;
