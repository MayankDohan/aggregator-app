import ClearChair from '../../uranladderimages/Chairs/Clear-Coupe-Chair-RC8227.jpg'
import FoodBooth from '../../uranladderimages/Tenting pics/food-booth.jpg'
import Arcadia from '../../uranladderimages/Chairs/ArcadiaChairs.jpg'
import Barstool from '../../uranladderimages/Chairs/acrylic-and-chrome-barstool.jpg'
import Bandshell from '../../uranladderimages/Tenting pics/bandshell-tents.jpg'
import '../../styles/shoppingitems.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown} from '@fortawesome/free-solid-svg-icons';
import QuantitySelect from './QuantitySelect'

export const ShoppingItem1 = ()=>(
    <div className='row px-2'>
       
        <div className='col-12 p-2 custom-col-cart ' >
            <div className= 'div-bottom-container '>
            <div className='image-container-left'>
            
        <img src={ClearChair}  className='images-container-cart' alt='cartitem'/>
        
        </div>
            <div className='info-container-right' >
                
                <strong className='strong-stylinheading'>Clear Coupe Chair</strong>
            

                <div className='span-custom-div'> 
                    <div >
                    <span className='strong-styling-sub-heading'>SKU:</span>
                    </div>
                    <div>
                    <span className='strong-styling'>8227</span>
                    </div>
                </div>
                <div className='span-custom-div'> 
                    <div >
                    <span className='strong-styling-sub-heading'>Categories:</span>
                    </div>
                    <div >
                    <span className='strong-styling'>New Additions</span>
                    </div>
                </div>
                <div className='span-custom-div'> 
                    <div >
                    <span className='strong-styling-sub-heading'>Dimensions:</span>
                    </div>
                    <div>
                    <span className='strong-styling'>25″L x 23″W x 22″H</span>
                    </div>
                </div>
                <div className='span-custom-div'> 
                    <div>
                    <span className='strong-styling-sub-heading'>Color:</span>
                    </div>
                    <div>
                    <span className='strong-styling'>White</span>
                    </div>
                </div>
                
                
                </div>

                </div>
         
        </div>


        <div className='col-12  p-2 custom-col-cart '>
            <div className='d-flex flex-row justify-content-between'>
            <QuantitySelect/>
        <strong style={{display:'inline-block',fontSize:'13px'}}>$70.00</strong>
        </div>
        </div>
        <div className='col-12 p-2 custom-col-cart d-flex flex-row justify-content-between'>

            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>
      
        <div className='col-5 py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
        
        
        <i className="bi bi-trash3 strong-styling" ></i>
          <span className='strong-styling'>REMOVE</span>
          </div>
          <div className='col-7 py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
        
          <i className="bi bi-heart strong-styling"></i>
            <span className='strong-styling'>MOVE TO WISHLIST</span>
            </div>
            
        
     <div className='col-12 last-column-style'>

     </div>
         
       
    </div>
)

export const ShoppingItem2 = ()=>(
    <div className='row  px-2'>
    
        <div className='col-12 p-2 custom-col-cart'>
            <div  className= 'div-bottom-container '>
            <div className='image-container-left'>
            
        <img src={FoodBooth} className='images-container-cart' alt='cartitem'/>
        
        </div>
            <div className='info-container-right'>
            <strong className='strong-styling-heading'>Food Booth</strong>
            
            <div className='span-custom-div'>
            <div >
                <span className='strong-styling-sub-heading'>Description:</span>
                </div>
                <div>
                <span className='strong-styling'>Designed For Food Service Operations</span>
                </div>
            </div>
            <div className='span-custom-div'>
            <div >
                <span className='strong-styling-sub-heading'>Category:</span>
                </div>
                <div>
                <span className='strong-styling'>Outdoor </span>
                </div>
            </div>
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Capacity:</span>
                </div>
                <div>
                <span className='strong-styling'>Medium Booths</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className='col-12 p-2 custom-col-cart'>
        <div className='d-flex flex-row justify-content-between'>
        <QuantitySelect/>
      <strong style={{display:'inline-block',fontSize:'13px'}}>$70.00</strong>
      </div>
      </div>
        <div className='col-12 p-2 custom-col-cart d-flex flex-row justify-content-between'>
            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>
     
        <div className='col-5  py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
        
        <i class="bi bi-trash3 strong-styling"></i>
          <span className='strong-styling'>REMOVE</span>
          </div>
          <div className='col-7  py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
        
          <i class="bi bi-heart strong-styling"></i>
          <span className='strong-styling'> MOVE TO WISHLIST</span>
          </div>
          
          <div className='col-12 last-column-style'>

</div>
      
    </div>
)

export const ShoppingItem3 = ()=>(
    <div className='row px-2 '>
   
    <div className='col-12 py-2 custom-col-cart'>
        <div  className= 'div-bottom-container '>
        <div className='image-container-left'>
            
    <img src={Arcadia} className='images-container-cart' alt='cartitem'/>
    
    </div>
        <div className='info-container-right'>
        <strong  className='strong-styling-heading'>Arcadia Chair</strong>
        
        <div className='span-custom-div'>
        <div>
            <span className='strong-styling-sub-heading'>Sku:</span>
            </div>
            <div>
            <span className='strong-styling'>8791</span>
            </div>
        </div>
        <div className='span-custom-div'>
        <div >
            <span className='strong-styling-sub-heading'>Categories:</span>
            </div>
            <div>
            <span className='strong-styling'> Patio Furniture</span>
            </div>
        </div>
       
        <div className='span-custom-div'>
        <div >
            <span className='strong-styling-sub-heading'>Description:</span>
            </div>
            <div>
            <span className='strong-styling'>Indoor or Outdoor use</span>
            </div>
        </div>
        <div className='span-custom-div'>
        <div>
            <span className='strong-styling-sub-heading'>Color:</span>
            </div>
            <div>
            <span className='strong-styling'>Brown</span>
            </div>
        </div>
        </div>
    </div>
    </div>

    <div className='col-12  py-2 custom-col-cart'>
    <div className='d-flex flex-row justify-content-between'>
    <QuantitySelect/>
        <strong style={{display:'inline-block',fontSize:'13px'}}>$150</strong>
        </div>
        </div>
    
    <div className='col-12 py-2  custom-col-cart d-flex flex-row justify-content-between'>
            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>
      
        <div className='col-5  py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
       
    
        <i className="bi bi-trash3 strong-styling"></i>
          <span className='strong-styling'>REMOVE</span>
          </div>
          <div className='col-7  py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
       
    
          <i className="bi bi-heart strong-styling'"></i>
          <span className='strong-styling'>MOVE TO WISHLIST</span>
          </div>
          
          <div className='col-12 last-column-style'>

</div>
      
</div>
)

export const ShoppingItem4 = ()=>(
    <div className='row px-2 '>
      
        <div className='col-12 py-2  custom-col-cart'>
            <div  className= 'div-bottom-container'>
            <div className='image-container-left'>
               
        <img src={Barstool} className='images-container-cart' alt='cartitem'/>
        
        </div>
            <div className='info-container-right'>
                <strong className='strong-styling-heading'>Acrylic and Chrome Barstool</strong>
            
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>SKU:</span>
                </div>
                <div>
                <span className='strong-styling'>8788</span>
                </div>
            </div>
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Categories:</span>
                </div>
                <div>
                <span className='strong-styling'>Bar Stools</span>
                </div>
            </div>
            <div className='span-custom-div'>
            <div >
                <span className='strong-styling-sub-heading'>Height:</span>
                </div>
                <div>
                <span className='strong-styling'>26''</span>
                </div>
            </div>
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Color:</span>
                </div>
                <div>
                <span className='strong-styling'>White Opaque</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div className='col-12  p-2 custom-col-cart'>
        <div className='d-flex flex-row justify-content-between'>
        <QuantitySelect/>
          <strong style={{display:'inline-block',fontSize:'13px'}}>$55.00</strong>
          </div>
          </div>
       
        <div className='col-12 p-2  d-flex flex-row justify-content-between'>
            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>
      
        <div className='col-5  py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
       
        
        <i class="bi bi-trash3 strong-styling"></i>
          <span className='strong-styling'>REMOVE</span>
          </div>
       
          <div className='col-7 py-2 custom-col-cart remove-wishlit-styling d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
      
          <i class="bi bi-heart strong-styling"></i>
            <span className='strong-styling'>MOVE TO WISHLIST</span>
            </div>
        
            <div className='col-12 last-column-style'>

</div>
        
      
    </div>
)

export const ShoppingItem5= ()=>(
    
    <div className='row px-2 '>
      
        <div className='col-12 py-2 custom-col-cart'>
            <div  className= 'div-bottom-container'>
            <div className='image-container-left'>
        
        <img src={Bandshell} className='images-container-cart' alt='cartitem'/>
        
        </div>
            <div className='info-container-right'>
                <strong className='strong-styling-heading'>Bandshell</strong>
            
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Description:</span>
                </div>
                <div>
                <span className='strong-styling'>Outdoor performances and Events</span>
                </div>
            
                
            </div>
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Category:</span>
                </div>
                <div>
                <span className='strong-styling'>Stage Cover</span>
                </div>
            
                
            </div>
            <div className='span-custom-div'>
            <div>
                <span className='strong-styling-sub-heading'>Capacity:</span>
                </div>
                <div>
                <span className='strong-styling'>Large Tents</span>
                </div>
            
                
            </div>
            </div>
        </div>
        </div>
        <div className='col-12 p-2 custom-col-cart'>
        <div className='d-flex flex-row justify-content-between'>
           <QuantitySelect/>
            <strong style={{display:'inline-block',fontSize:'13px'}}> $300</strong>
            </div>
            </div>
      
        <div className='col-12  p-2  d-flex flex-row justify-content-between'>
            <span className='strong-styling-sub-heading'>DELIVERY BY:</span>
            <span className='strong-styling-sub-heading'>Aug 17th-Aug 19th, 2024</span>
        </div>

        <div className='col-5  py-2 custom-col-cart remove-wishlit-styling  d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderRight:'1px solid #EEE',borderWidth: '1px'}}>
       
     
        <i class="bi bi-trash3 strong-styling"></i>
          <span className='strong-styling'>REMOVE</span>
          </div>
          <div className='col-7  py-2 custom-col-cart remove-wishlit-styling  d-flex flex-row justify-content-center align-items-center' style={{gap:'10px',borderLeft:'1px solid #EEE',borderWidth: '1px'}}>
      
          <i class="bi bi-heart strong-styling"></i>
          <span className='strong-styling'>MOVE TO WISHLIST</span>
          </div>
     
          <div className='col-12 last-column-style'>

</div>
      

    </div>
)