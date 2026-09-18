import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Information from "./Components/Information";
import Search from "./Components/Search";
import Cart from "./Components/Cart";
import { CartProvider } from "./Components/CartContext";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App(){
  return(
    <CartProvider>
     <Router basename="Shoe-Store-LENOVA">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/info/:id" element={<Information/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
     </Router>
    </CartProvider>
  )
}

export default App;
