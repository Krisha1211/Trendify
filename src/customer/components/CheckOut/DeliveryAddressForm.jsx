import React from 'react'
import { Grid, TextField } from '@mui/material'
import AddressCard from '../AddressCard/AddressCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
const DeliveryAddressForm = () => {

    const handlesubmit=(e)=>{
        e.preventDefault();
    const data= new FormData(e.currentTarget);
    const data2={
        firstname:data.get("firstname"),
        lastname:data.get("lastname"),
        streetAddress:data.get("address"),
        city:data.get("city"),
        state:data.get("state"),
        zipcode:data.get("zipcode"),
        mobileno:data.get("phoneNumber")
    }
    console.log("address",data2);
    }
    return (
        <div>
            <Grid  container spacing={4}>
                <Grid p={3} xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border cursor-pointer text-left'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant='conatained'>
                            Delivery Here
                        </Button>
                    </div>
                </Grid>
                <Grid items xs={12} lg={7} p={3}>

                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handlesubmit}>
                            <Grid container>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='firstname'
                                    name='firstname'
                                    label='First Name'
                                    fullWidth
                                    autoComplete='given-name'/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='lastname'
                                    name='lastname'
                                    label='Last Name'
                                    fullWidth
                                    autoComplete='given-name'/>
                                </Grid>
                                <Grid items xs={12} p={1}>
                                    <TextField 
                                    required
                                    id='address'
                                    name='address'
                                    label='Adress'
                                    fullWidth
                                    autoComplete='given-name'
                                    multiline
                                    rows={4}/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='city'
                                    name='city'
                                    label='City'
                                    fullWidth
                                    autoComplete='given-name'/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='state'
                                    name='state'
                                    label='State/Province/Region'
                                    fullWidth
                                    autoComplete='given-name'/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='zip'
                                    name='zip'
                                    label='Zip/Postal Code'
                                    fullWidth
                                    autoComplete='shipping postal-code'/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1}>
                                    <TextField 
                                    required
                                    id='phoneNumber'
                                    name='phoneNumber'
                                    label='Phone Number'
                                    fullWidth
                                    autoComplete='given-name'/>
                                </Grid>
                                <Grid items xs={12} sm={6} p={1} className='text-left'>
                                <Button sx={{ mt:2,bgcolor: "RGB(145 85 253)" }} size='large' variant='conatained' type='submit'>
                            Delivery Here
                        </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>

                </Grid>
            </Grid>

        </div>
    )
}

export default DeliveryAddressForm
