import { useState } from "react";
import { useCart } from "./CartContext";
import delete_icon from "../assets/delete-icon.png";

function CartCards({item}){

    const { removeFromCart, updateQuantity } = useCart()
    
    const addQuantity = () => {
        updateQuantity(item.shoe.id, 1)
    }

    const subQuantity = () => {
        if (item.quantity === 1) {
            removeFromCart(item.shoe.id)
        } else {
            updateQuantity(item.shoe.id, -1)
        }
    }

    return(
        <div className="flex justify-center gap-10 p-5 items-center w-full rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <img src={item.shoe.image}
               className="w-40 aspect-square object-cover"/>
          <div className="flex flex-col gap-2">
            <button onClick={() => removeFromCart(item.shoe)}>
                <img src={delete_icon}
                 className="w-5 self-end cursor-pointer"/>
            </button>
            <h1 className="text-xl font-bold md:text-base mt-3">{item.shoe.name}, {item.shoe.brand}  {item.shoe.rating}⭐</h1>
            <h3 className="text-xl font-bold md:text-base">{item.shoe.price}$</h3>
            <p className="font-bold">Color: {item.shoe.colorChoice}</p>
            <p className="font-bold">Size: {item.shoe.sizeChoice}</p>
            <div className="flex">
              <button className="border border-gray-600 p-2 h-8 flex justify-center items-center rounded font-bold cursor-pointer" onClick={subQuantity}>-</button>
              <div className="border border-gray-600 w-8 flex justify-center items-center">{item.quantity}</div>
              <button className="border border-gray-600 p-1.5 h-8 flex justify-center items-center rounded font-bold cursor-pointer" onClick={addQuantity}>+</button>
            </div>
          </div>
        </div>
    )
}

export default CartCards;