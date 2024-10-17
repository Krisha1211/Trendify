import { Grid , TextField } from '@mui/material';
import Button from '@mui/material/Button';

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser , register} from '../../State/Auth/Action';

const RegisterForm = () => {


  const navigate =useNavigate();
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store)

  // when auth.jwt changes it,s dispatch to getuser..and when getuserdispatch..we get whole user in this..
  useEffect(()=>
  {
    if(jwt)
    {
      dispatch(getUser())
    }
  },[jwt,auth.jwt])

    const handleSubmit=(event)=>
    {
     event.preventDefault(jwt);

     const data= new FormData(event.currentTarget);

     const userData={
        firstName:data.get("firstName"),
        lastName:data.get("lastName"),
        email:data.get("email"),
        password:data.get("password")

     }
    dispatch(register(userData))
     console.log("userData ",userData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id='firstName'
                name='firstName'
                label="First Name"
                fullWidth
                autoComplete='given-name'
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                required
                id='lastName'
                name='lastName'
                label="Last Name"
                fullWidth
                autoComplete='password'
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                required
                id='email'
                name='email'
                label="Email"
                fullWidth
                autoComplete='email'
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                required
                id='password'
                name='password'
                label="Password"
                fullWidth
                autoComplete='password'
                />
            </Grid>

            <Grid item xs={12}>
             <Button 
             className='bg-[#9155FD] w-full' type='submit' 
             variant='contained'
             size='large'
             sx={{padding:".8rem 0",bgcolor:"#9155FD"}}
             >
              Register
             </Button>
            </Grid>


        </Grid>

      </form>
      <div>
        <div className='flex justify-center flex-col items-center p-2'>
            <p>if you have already account ?
                <Button onClick={()=>navigate("/login")}
                    className='ml-5' size='small'>
                  Login
                </Button>
            </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
