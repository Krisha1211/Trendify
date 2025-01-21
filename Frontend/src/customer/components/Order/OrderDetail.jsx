import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTraker from './OrderTraker'
import { Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box'

const OrderDetail = () => {
    return (
        <div className='lg:px-20 px-5 text-left'>

            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTraker activeStep={3} />
            </div>

            <Grid className='space-y-5' container >
                {[1, 1, 1, 1, 1, 1].map((item) =>
                    <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: "center", justifyContent: 'space-between' }}>
                        <Grid item xs={6}>
                            <div className='flex items-center space-x-4m'>
                                <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/n/t/z/17-xl-short-sleeve-stitched-gown-rama-green-ne-style-60-original-imagbg8mwdhswgzh.jpeg?q=70" alt="" />
                                <div className='spce-y-2 ml-5'>
                                    <p className='font-semibold'>Printed Crepe Stitched Anarkali Gown</p>
                                    <p className='space-x-5 opacity-50 text-xs font-semibold'>
                                        <span>  Color: pink
                                        </span>
                                        <span>
                                            Size: M</span></p>
                                    <p>Seller: NE STYLE</p>
                                    <p>₹284</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item>
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon sx={{ fontSize: "2rem" }} className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>

                    </Grid>

                )}
            </Grid>
        </div>
    )
}

export default OrderDetail
