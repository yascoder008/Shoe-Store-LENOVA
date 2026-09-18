import { useCart } from "./CartContext";
import CartCards from "./CartCards";

function Cart(){

    const {cartItems, clearCart} = useCart()

    if(cartItems.length===0){
        return(
            <p className="mt-90 flex justify-center items-center">No products added</p>
        )
    }
    return(
        <div className="mt-24 p-4">
         <button onClick={clearCart}
                 className="p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            Clear cart
         </button>
         <div className="flex flex-col justify-center items-center p-4 mt-24 w-full md:flex-1 md:mt-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {
            cartItems.map((item) => (
                <CartCards item={item} key={item.shoe.id}/>
            ))
          }
         </div>
        </div>
    )
}

export default Cart;