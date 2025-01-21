import React from 'react';
import { Grid } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md hover:shadow-2xl border shadow-black '>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer text-left'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/kzfvzww0/gown/l/z/g/16-s-short-sleeve-stitched-gown-badami-ne-style-60-original-imagbg8m9dpz4wtw.jpeg?q=70" alt="" />
                        <div className='ml-5 space-y-2'>
                            <p>Printed Crepe Stitched Anarkali Gown</p>
                            <p className='opacity-50 text-xs font-semibold'>Size:M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color:Red</p>
                        </div>

                    </div>
                </Grid>
                <Grid item xs={2} >
                    <p className='text-left'>1000</p>
                </Grid>
                <Grid item xs={4} >
                 { true &&  
                 <div>
                    <p className='text-left'>
                    <AdjustIcon sx={{width:"15px",height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                        <span>
                             Delivered On March 03
                        </span>
                    </p>
                    <p className='text-xs text-left'>
                        Your Item Has Been Delivered
                    </p>
                    </div>}
                   {false && <p className='text-left'>
                        <span>
                            Expect Delivery On March 03
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
