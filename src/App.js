import logo from './logo.svg';
import './App.css';

import Product from './customer/components/product/product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/Order/OrderDetail';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter'
function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRouter />}></Route>
      </Routes>
    </div>
  );
}

export default App;
