import {createContext, useContext, useState} from "react"

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const addCart = (shoe) => {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(
                item => item.shoe.id === shoe.id &&
                    item.shoe.colorChoice === shoe.colorChoice &&
                    item.shoe.sizeChoice === shoe.sizeChoice
            );
        if (existingItem) {
            return prevItems.map(item =>
                item === existingItem ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevItems, { shoe, quantity: 1 }];
        }
      });
    };
    
    const removeFromCart = (shoe) => {
    setCartItems(prev => 
        prev.filter(item => 
            !(item.shoe.id === shoe.id && 
              item.shoe.colorChoice === shoe.colorChoice && 
              item.shoe.sizeChoice === shoe.sizeChoice)
        )
    )
}

    const getCartItemsCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    } //reduce for calculations

    const updateQuantity = (shoeId, delta) => {
        setCartItems(prev => {
          return prev
            .map(item => item.shoe.id === shoeId ? {...item, quantity: item.quantity + delta} : item)
            .filter(item => item.quantity > 0)
        })
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const value = {
        cartItems,
        addCart,
        removeFromCart,
        getCartItemsCount,
        updateQuantity,
        clearCart
    }
 
    return(
        <CartContext.Provider value = {value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}