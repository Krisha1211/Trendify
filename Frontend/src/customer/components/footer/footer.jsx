import React from 'react';
import { Button } from '@headlessui/react';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
    return (
        <div>
            <Grid className='bg-black text-white text-center mt-10'
                container
                sx={{
                    bgcolor: "black",
                    color: "white",
                    py: 3
                }}
            >
                {/* grid normal width is 12 */}
                <Grid item xs={12} sm={6} md={3} >
                    <Typography className='pb-5' variant='h6'>Company</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>About</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Job</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Blog</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Press</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Partener</Button>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={3} >
                    <Typography className='pb-5' variant='h6'>Solutions</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Marketing</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Analytics</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Commerce</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Insights</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Supports</Button>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={3} >
                    <Typography className='pb-5' variant='h6'>Documentations</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Guides</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>API Status</Button>
                    </div>
                </Grid>


                <Grid item xs={12} sm={6} md={3} >
                    <Typography className='pb-5' variant='h6'>Legal</Typography>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Claim</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Privacy</Button>
                    </div>
                    <div>
                        <Button className='pb-5' variant='h6' gutterButton>Terms</Button>
                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                    <Typography variant="body2" component="p" align="center">
                        &copy; 2024 My Company. All rights reserved.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                       Made With By Me.
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}

export default Footer
