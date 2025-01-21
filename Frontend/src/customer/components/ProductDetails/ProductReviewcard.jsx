import React from 'react'
import { Avatar, Grid, Rating } from '@mui/material'
import Box from '@mui/material/Box';

const ProductReviewcard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white ' sx={{ width: 50, height: 50, bgcolor: "#9155fd" }}>
                            KV
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>

                    <div className='space-y-2 text-left'>
                        <div>
                            <p>krisha</p>
                            <p>April 5, 2024</p>
                        </div>

                    </div>
                    <div className='text-left'>
                    <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                        <p className='opacity-70 font-semibold text-lg' >Printed Crepe Stitched Anarkali Gown</p>
                    </div>
                   
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductReviewcard
