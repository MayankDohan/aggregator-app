import { useNavigate } from 'react-router-dom'
import styles from '../styles/productfooterprice.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { shoppingCartActions } from '../store/shoppingCart'



const ProductDescFooter = ({price,productState})=>{
        const dispatch = useDispatch()
        const navigate = useNavigate()
        const handleCartNavigate = ()=>{
          navigate('/cart')
        }

    const handleAddToCart = (item)=>{

        
        dispatch(shoppingCartActions.addTocCart(item))
       
        }
      const addStatus = useSelector(state=>state.shoppingCart.addItemStatus)
      const statusKey = `${productState.category}-${productState.id}`;

      let Buton;
     
      if(addStatus[statusKey]==="success" || addStatus[statusKey]==="updated" ){
        Buton =  <button onClick={handleCartNavigate}>GO TO CART</button>
      }
      else{
        Buton =   <button onClick={()=>handleAddToCart(productState)}>Add To Cart</button>
      }

       
return(
    <footer className={`${styles.footer} `}>
        <div className='container '> 
            <div className={`${styles.priceTopContainer}`}>
                <div className={`${styles.priceContainer}`}>
                   
            <span className={`${styles.spanPrice}`}>${price}</span>
         
           
            <span className={`${styles.spanTaxes}`}>(inclusive of all taxes)</span>
           
            </div>
            <div>
            {Buton}
            </div>
            </div>
        </div>
    </footer>
)
}

export default ProductDescFooter;