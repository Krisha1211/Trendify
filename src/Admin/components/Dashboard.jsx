import React from 'react'
import Achivement from './Achivement'
import { Grid } from '@mui/material'
import MonthlyOverview from './MonthlyOverview'
import OrdersTableView from '../view/OrderTableView'
import ProductTableView from '../view/ProductTableView'
const AdminDashboard = () => {
  return (
    <div className='p-2'>
      <Grid container spacing={2}>
        <Grid className='shadow-bg shadow-gray-600'
        item xs={12} md={4}>
          <Achivement/>
        </Grid>

<Grid className='shadow-bg shadow-gray-600' item xs={12} md={6}>
        <MonthlyOverview/>
</Grid>

<Grid className='shadow-bg shadow-gray-600' item xs={12} md={6} >
  <OrdersTableView/>
</Grid>

<Grid className='shadow-bg shadow-gray-600' item xs={12} md={6} >
  <ProductTableView/>
</Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard
