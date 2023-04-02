import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/Homepage/Homepage';
import AddProduct from './components/addProduct/AddProduct';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/addproduct" element = {<AddProduct/>}/>
        <Route path = "/cartitems" element = {<Cart/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
