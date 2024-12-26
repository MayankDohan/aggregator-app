import { useSelector } from 'react-redux'
import AddressChange from './AddressChange'
import CartHeader from "./CartHeader"
import ShoppingCartItems from "./ShoppingCartItems"
import Cart from './Cart'

const ShoppingCart = ()=>{
  const cartItems =   useSelector(state=>state.shoppingCart.items)
 
  let cartShopping
  if(cartItems.length===0){
    cartShopping = <Cart/>
     }
     else{
      console.log("In ShoppinCart", cartItems)
        cartShopping = <>
        <CartHeader size={cartItems.length}/>
        <AddressChange/>
         <ShoppingCartItems items={cartItems}/>
</>
       
     }
    return(
        <>
       {cartShopping}
       </>
    )
}

export default ShoppingCart;