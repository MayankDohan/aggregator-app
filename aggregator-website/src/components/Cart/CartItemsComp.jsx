import { useDispatch } from 'react-redux';
import '../../styles/shoppingitems.scss'
import QuantitySelect from './QuantitySelect';
import { shoppingCartActions } from '../../store/shoppingCart';

const CartItemsComp = ({items})=>{
   const dispatch = useDispatch()
     const handleRemoveItem = (type,id)=>{
       
        dispatch(shoppingCartActions.removeItem({type,id}))
}
console.log("serviceprovide",items.serviceprovide[0].servicetype)
 
    return(

        <div className='row px-2'>
       <div className='col-12 p-2 custom-col-cart ' >
            <div className= 'div-bottom-container '>
            <div className='image-container-left'>
            
        <img src={items.img}  className='images-container-cart' alt='cartitem'/>
        
        </div>
            <div className='info-container-right' >
                
                <strong className='strong-stylinheading'>{items.title}</strong>
            

   
     
        
            
            <div className='span-custom-div'> 
              <div >
                    <span className='strong-styling-sub-heading'>Service</span>
                    </div>
                    <div>
                    <span className='strong-styling'>{items.serviceprovide[0].servicetype}</span>
                    </div>
                </div>
  
                
                
                
                </div>

                </div>
         
        </div>


        <div className='col-12  p-2 custom-col-cart '>
            <div className='d-flex flex-row justify-content-between'>
          
           
                 <strong style={{display:'inline-block',fontSize:'13px'}}>${items.serviceprovide[0].price}</strong>
           
       
        </div>
        </div>
        <div className='col-12 p-2 custom-col-cart d-flex flex-row justify-content-between'>

            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>
      
        <div className='col-5 py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' 
        style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
        
        
        <i className="bi bi-trash3 strong-styling"></i>
          <span className='strong-styling' style={{cursor:'pointer'}} 
          onClick={()=>handleRemoveItem(items.type,items.id)}>
            REMOVE</span>
          </div>
          <div className='col-7 py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
        
          <i className="bi bi-heart strong-styling"></i>
            <span className='strong-styling'>MOVE TO WISHLIST</span>
            </div>
            
        
     <div className='col-12 last-column-style'>

     </div>
         
       
    </div>

    )
}

export default CartItemsComp;