import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from '../customer/pages/homepage'
import Cart from '../customer/components/cart/cart'
import Product from '../customer/components/product/product'
import Navigation from '../customer/components/navigation/navigation'
import Footer from '../customer/components/footer/footer'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetail from '../customer/components/Order/OrderDetail'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CustomerRouter = () => {
  return (
    <div>
      <div>
      <Navigation />
      </div>
      <Routes>
      <Route path='/login' element={<Homepage />}></Route>
      <Route path='/register' element={<Homepage />}></Route>


        {/* in path which path i have to use...and in element which page or element i have to show on this path.. */}
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        {/* this for like...women/clothing/tops */}
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<CheckOut/>}></Route>
        <Route path='/account/order' element={ <Order/>}></Route>
        <Route path='/account/order/:orderId' element={  <OrderDetail />}></Route>
        <Route path='/payment/:orderId' element={  <PaymentSuccess />}></Route>
      </Routes>

      <div>
      <Footer />
      </div>
    </div>
  )
}

export default CustomerRouter