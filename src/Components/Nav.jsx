import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import logo from "../assets/Logo.png"
import search_icon from "../assets/search.png";
import cart_icon from "../assets/Cart.png";
import menu_icon from "../assets/menu.png";

function Nav(){

    const [isClicked, setIsClicked] = useState(false);

    function handleMenu(){
        setIsClicked(!isClicked);
    }

    const {getCartItemsCount} = useCart()
    const itemCount = getCartItemsCount()

    return(
        <div className="fixed top-0 left-0 w-full z-99 bg-white p-2 md:pt-4.5 flex justify-between md:justify-around items-center font-(family-name:--OpenSans-font) shadow-blue-300 shadow-xs">
            <img 
                src={logo} 
                alt="logo icon"
                className="w-32 lg:w-35" />
            <div className={`grid flex-col gap-3 items-center text-center absolute mt-56 z-999
                left-[73%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4.5 rounded-xl min-w-[24%]
                ${isClicked ? "" : "hidden"}
                md:flex md:flex-row md:left-0 md:mt-0 md:justify-center md:shadow-none md:relative
                md:gap-5 lg:text-xl bg-white opacity-90`}>
              <Link to = "/" className="hover:text-blue-800 hover:border-b-2 hover:border-blue-800 transition-all delay-100">Home</Link>
              <Link to = "/shop" className="hover:text-blue-800 hover:border-b-2 hover:border-blue-800 transition-all delay-100">Shop</Link>
              <Link to = "/about" className="hover:text-blue-800 hover:border-b-2 hover:border-blue-800 transition-all delay-100">About</Link>
              <Link to = "/contact" className="hover:text-blue-800 hover:border-b-2 hover:border-blue-800 transition-all delay-100">Contact</Link>
            </div>
            <div className="icons flex items-center gap-2.5">
              <Link to="/search">
                <img src={search_icon} 
                   alt="search icon"
                   className="w-5 h-5 lg:w-6 lg:h-6 cursor-pointer"/>
              </Link>
              <div className="relative">
                <Link to="/cart">
                 <img src={cart_icon} 
                   alt="cart icon"
                   className="w-7 h-7 lg:w-8 lg:h-8 cursor-pointer"/>
                </Link>
                {itemCount > 0 && (<span className="absolute bottom-4 left-4 md:left-5 bg-red-700 text-white rounded-2xl p-2 h-3 w-3 md:h-4 md:w-4 md:p-2.5 md:text-sm text-xs flex justify-center items-center">{itemCount}</span>)}
              </div>
              <img src={menu_icon} 
                   alt="menu icon"
                   onClick={handleMenu}
                   className="w-5 h-5 cursor-pointer md:hidden active:animate-spin" />
            </div>
        </div>
    )
}

export default Nav;