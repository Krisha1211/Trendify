import React from 'react'
import { StepLabel, Stepper ,Step} from '@mui/material'

const steps=[
    "Placed",
    "Order conformed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
const OrderTraker = ({activeStep}) => {
  return (
    <div className='w-full'>
     
      <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((lable)=>
<Step>
    <StepLabel sx={{color:"#9155fd",fontSize:"44px"}}>
{lable}
    </StepLabel>
</Step>)}
      </Stepper>
    </div>
  )
}

export default OrderTraker
