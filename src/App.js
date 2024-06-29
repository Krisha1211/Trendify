import logo from './logo.svg';
import './App.css';

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
