import { useState } from 'react'
import {CartContext} from  '../store/CartContext.js'

const CartProvider = ({children})=>{
    const[shoppingCart,setShoppingCart] = useState ({
        items:[]
    })

    
    const handleAddToCart = (newItem)=>{
        setShoppingCart(prevState=>(
            {
                ...prevState,
                items:[...prevState.items,newItem]
            }
        ))

    }
    const handleRemoveFromCart = (itemId)=>{
        setShoppingCart(prevState => ({
            ...prevState,
            items: prevState.items.filter(item => item.id !== itemId) 
        }));

    }
    const ctxValue = {
        items: shoppingCart.items,
        addItemsToCart: handleAddToCart,
        removeItemsFromCart:handleRemoveFromCart

    }



    return(
        <CartContext.Provider value={ctxValue}>
            {children}

        </CartContext.Provider>

    )
}

export default CartProvider;