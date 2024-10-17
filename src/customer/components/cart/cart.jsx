import React, { useEffect } from 'react'
import CartItem from './CartItem';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import { store } from '../../../State/store';


const Cart = () => {

const navigate= useNavigate();
const dispatch=useDispatch();
const {cart} =useSelector(store=>store)

const clickoncheckout=()=>
    {
        navigate("/checkout?step=2")
    }

    // for finding cart..on that page..
useEffect(()=>
{
    dispatch(getCart())
},[cart.updateCartItem,cart.deleteCartItem])



    return (
        <div className='pt-6'>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
                <div className='col-span-2'>
                 {cart.cart?.cartItems.map((item)=><CartItem item={item}/>) }
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4 text-left'>Price details</p>
                    <hr/>
                    <div className='space-y-3 font-semi-bold mb-10'>
                        <div className='flex justify-between pt-3'>
                             <span>Price</span>
                             <span>{cart.cart?.totalPrice}</span>
                        </div>
                        {/* why we put ? beacuse at stating we put null so we put this ? so it will check their property if our first property is not null */}
                        <div className='flex justify-between pt-3'>
                             <span>Discount</span>
                             <span className='text-green-600'>{cart.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                             <span>Delivery Charges</span>
                             <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                             <span>Total Amount</span>
                             <span className='text-green-600'>{cart.cart?.totalDiscountedPrice}</span>
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
