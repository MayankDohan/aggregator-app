
import CartHeader from './CartHeader.jsx'
import DigitalPayment from './DigitalPayment.jsx'
import PaymentFooter from './PaymentFooter.jsx'
import PriceSummary from './PriceSummary.jsx'
import ShoppingCart from './ShoppingCart.jsx'
import {ShoppingItem1,ShoppingItem2,ShoppingItem3,ShoppingItem4,ShoppingItem5} from './shoppingitems.js'
import CartItemsComp from './CartItemsComp.jsx'
import { useSelector } from 'react-redux'
const ShoppingCartItems = ({items})=>{
  // const cartitems = [ShoppingItem1,ShoppingItem2,ShoppingItem3,ShoppingItem4,ShoppingItem5]
   
   const cartitems =  useSelector(state=>state.shoppingCart.items)
   console.log("items in the cart latest", cartitems)
    return(
        <>
       
        <div className='container-fluid pb-5'>
        {items.map((item,index)=>(
          <CartItemsComp key={index} items={item}/>

        ))}   
        <PriceSummary/>  
       
        <PaymentFooter/>
</div>
</>
    )
}

export default ShoppingCartItems;