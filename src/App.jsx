
import Header from "./Header"
import './App.css'
import Product from "./Product"
import { useDispatch } from "react-redux";
import  { clearAllItems } from "./redux/slice";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CartList from "./CartList";


function App() {
  const dispatch = useDispatch()
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Product />} />
        <Route path="/cart" element={ <CartList />} />
        <Route path="/about" element={<h1>About Section</h1>} />
        <Route path="/contact" element={<h1>Contact Section</h1>} />
     

      </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App