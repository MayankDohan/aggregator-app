import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSquareFacebook,faPinterest,faInstagram} from '@fortawesome/free-brands-svg-icons';
 import '../styles/mobilefooter.scss'
 
 

 
 
 const MobileFooter = ()=>{

   
    return(
      <footer className='footer'>
         

         <div className='container p-3 d-md-flex flex-md-column '>
        <div className='my-2 d-md-flex flex-md-row'>

         <div className='left-flex'>
         <span className='span-footer mb-3'>FOLLOW US</span>
         </div>

         <div className='right-flex'>
         <ul className='d-flex flex-row list-unstyled ul-list-footer pl-2' >
            <li className='me-3'>  <FontAwesomeIcon icon={faSquareFacebook} /></li>
            <li className='me-3'><FontAwesomeIcon icon={faPinterest} /></li>
            <li > <FontAwesomeIcon icon={faInstagram} /></li>
             
         </ul>
         </div>

        </div>
        
        <div className='my-2 pl-2 d-md-flex flex-md-row'>

         <div className='left-flex'>

        <span className='span-footer mb-3'>QUICK LINKS</span>
        </div>

        <div className='right-flex'>
            <ul className='d-flex flex-column list-unstyled ul-list-footer'>
               <li className='pb-1'> Menu</li>
               <li className='pb-1'>Order Online</li>
               <li className='pb-1'>Private Caters</li>
              
            </ul>
            </div>
        </div>
       
        <div className='my-2 pl-2 d-md-flex flex-md-row '>

         <div className='left-flex'>
        <span className='span-footer mb-3'>CONTACT US</span>
        </div>

        <div className='right-flex'>
         <ul className='d-flex flex-column list-unstyled ul-list-footer'>
            <li className='pb-1'><i class="bi bi-telephone me-3 "></i><span>1234567890</span></li>
            <li className='pb-1'><i class="bi bi-envelope me-3"></i><span>SomeEmailId@gmail.com</span></li>
            <li className='pb-1'><i class="bi bi-geo-alt me-3"></i><span>2397 Broadway Street, Redwood City, CA-94063</span></li>
         </ul>
         </div>
        </div>
      
  
        </div>
</footer>       
                   
               
          
      
    )
 }

 export default MobileFooter;