import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard';
import CartItem from '../cart/CartItem';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';
import { createPayment } from '../../../State/Payment/Action';

const OrderSummery = () => {
const dispatch=useDispatch();
const location =useLocation();
const {order}=useSelector(store=>store)
const searchParams= new URLSearchParams(location.search);
const orderId=searchParams.get("order_id")
useEffect(()=>{
dispatch(getOrderById(orderId))},[orderId]
)

const handleCheckOut=()=>
{
  dispatch(createPayment(orderId))
}

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border text-left'>
       
        <AddressCard address={order.order?.shippingAddress} />

      </div>

      <div className='pt-6'>
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2'>
                 {order.order?.orderItems.map((item)=><CartItem item={item}/>) }
                </div>
                <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4 text-left'>Price details</p>
                    <hr/>
                    <div className='space-y-3 font-semi-bold mb-10'>
                        <div className='flex justify-between pt-3'>
                             <span>Price</span>
                             <span>{order.order?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                             <span>Discount</span>
                             <span className='text-green-600'>{order.order?.totalDiscountedPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3 '>
                             <span>Delivery Charges</span>
                             <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 font-bold'>
                             <span>Total Amount</span>
                             <span className='text-green-600'>{order.order?.totalDiscountedPrice}</span>
                        </div>

                    </div>
                    </div>

                    <Button variant="contained" 
                    className='w-full ' sx={{bgcolor:"#9155fd",px:"2.5rem", py:"0.7rem"}}
                    onClick={handleCheckOut}
                    >Checkout</Button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OrderSummery
