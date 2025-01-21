import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CustomerRouter from './Routers/CustomerRouter'
import AdminRouters from './Routers/AdminRouters';
function App() {


  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRouter />}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
