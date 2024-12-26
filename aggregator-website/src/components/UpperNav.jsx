   import { useNavigate } from 'react-router-dom';
import '../styles/mobilescreen.scss'
   import { useState , useEffect} from 'react';
import { useSelector } from 'react-redux';
import MobileSearch, { SearchBar } from './MobileSearch';
import UpperNavLoc from './UpperNavLoc';
  
   
   
   const UpperNav = ({showModal,handleLocaModal})=> {
     const navigate = useNavigate();
   const cartItems =  useSelector(state=>state.shoppingCart.items)

   

      const [showSearchIcon, setShowSearchIcon] = useState(false);
     
      const handleScroll = () => {
         if (window.scrollY > 0) {
           setShowSearchIcon(true);
         } else {
           setShowSearchIcon(false);
         }
       };

      useEffect(() => {
         window.addEventListener('scroll', handleScroll);
         return () => {
           window.removeEventListener('scroll', handleScroll);
         };
       }, []);
      
       const handleHomePage = ()=>{
        navigate('/')
       }
       const handleCartDisplay = ()=>{
        navigate('/cart')

       }
       const handleSignUp = ()=>{
        navigate('/signup')
       }
return(
  
    <div className='px-2 mobile-container-root '>
    <div className='block-none-container' >
      
        <ul className='nav-logo'>
                  <li  onClick={showModal}><i class="bi bi-list flex-gap-style"></i></li>
                  <li className='d-flex justify-content-center align-items-center' onClick={handleHomePage}> 
                     
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 37" 
         class="logo-with-gradient">
    <defs>
      <linearGradient id="a" x1="0%" y1="50%" y2="50%">
        <stop offset="0%" stop-color="#EC8523"></stop>
        <stop offset="35%" stop-color="#ED7745"></stop>
        <stop offset="37%" stop-color="#ED7545"></stop>
        <stop offset="76%" stop-color="#E95D47"></stop>
        <stop offset="100%" stop-color="#E85448"></stop>
      </linearGradient>
    </defs>
    <polygon fill="url(#a)" fill-rule="evenodd" points="0 0 0 36.201 33.604 36.201 33.604 31.948 4.359 31.948 4.359 4.253 45.641 4.253 45.641 36.201 50 36.201 50 0"></polygon>
    </svg>
    
    </li>
            
              </ul>
            
           

             
           <ul className='mobile-container-right'>
              <li onClick={handleLocaModal}><i class="bi bi-geo-alt"></i></li>
              <li><i class="bi bi-heart"></i></li>
              <li onClick={handleSignUp}><i class="bi bi-person-circle"></i></li>
              <li className='cart-items-styling' onClick={handleCartDisplay}><i class="bi bi-cart3"></i>
             {cartItems.length>0&&<span className='total-items-number'>{cartItems.length}</span>}
              </li>
              <li style={{display:showSearchIcon ? 'block':'none'}}><i class="bi bi-search"></i></li>
          </ul>
      </div>
      
     

      
    
  </div>
 

    

)

   }

   export default UpperNav;