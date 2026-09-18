import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import { useState } from "react";
import shoes from "../config";

function Information(){

    const {id} = useParams();
    const shoe = shoes.find(shoe => shoe.id === Number(id));

    const colorClasses = {
      red: "bg-red-700",
      blue: "bg-blue-700",
      green: "bg-green-700",
      black: "bg-black",
      white: "bg-white",
      navy: "bg-blue-950",
      cream: "bg-yellow-50",
      brown: "bg-amber-800",
      "dark brown": "bg-amber-950",
      grey: "bg-gray-500",
      pink: "bg-pink-500",
    };

    const {addCart} = useCart()
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    const handleAddToCart = () => {
      if((!selectedColor) && (!selectedSize)){
        alert("Enter a color and a size")
        return
      }
      else{
        if(!selectedColor){
          alert("Enter a color")
          return
        }
        else{
          if(!selectedSize){
            alert("Enter a size")
            return
          }
        }
      }
      addCart({...shoe, colorChoice: selectedColor, sizeChoice: selectedSize})
      alert(`${shoe.name} added to the cart`)
    }

    return(
        <main className="flex mt-20 md:mt-30 justify-center items-center">
         <div className="p-3 md:p-4 w-[85%] lg:w-[70%] lg:p-6 flex flex-col md:flex-row gap-4 justify-center items-center text-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <img src={shoe.image} className="w-100 md:w-80"/>
          <div className="flex flex-col justify-center items-center gap-2 ">
            <h1 className="text-3xl font-bold">{shoe.name}, {shoe.brand}</h1>
            <h3 className="text-2xl">⭐{shoe.rating}</h3>
            <h3 className="text-2xl font-bold">{shoe.price}$</h3>
            <p className="text-xl">{shoe.description}</p>
            <div className="flex justify-center items-center flex-col gap-3 mt-4">
              <h3 className="text-2xl font-bold">Sizes</h3>
              <div className="flex gap-3 md:grid md:grid-cols-3 lg:flex justify-center items-center">
                {
                shoe.sizes.map(size => (
                    <button className={`text-xl p-3 hover:bg-gray-100 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${selectedSize === size ? "ring-2 ring-blue-500" : "border-black"}`}
                            onClick={() => setSelectedSize(size)}>
                      {size}
                    </button>
                ))
               }
              </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-3 mt-4">
               <h3 className="text-2xl font-bold">Colors</h3>
               <div className="flex justify-center items-center gap-2">
                 {
                    shoe.colors.map(color => (
                        <button className={`${colorClasses[color.toLowerCase()]} border p-4 h-9 w-9 rounded-[50%] ${selectedColor === color ? "ring-2 ring-blue-500" : "border-black"}`}
                                onClick={() => setSelectedColor(color)}>
                        </button>
                    ))
                 }
               </div>
            </div>
            <button className="bg-blue-800 mt-4 w-full lg:w-[60%] p-4 rounded-xl text-white text-xl cursor-pointer hover:bg-blue-500"
                    onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
         </div>
        </main>
    )
}

export default Information;