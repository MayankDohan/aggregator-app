import '../../styles/digitalpayment.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const DigitalPayment = ()=>{
    return(
        <>
                <div className="container mt-4  custom-container-digital">
            <div className="root-payment-container pb-2 px-2">
                <div className='  pb-3 pt-2 px-1 d-flex flex-row justify-content-between align-items-center' style={{columnGap:'47px'}}>
                <span style={{display:'block',fontSize:'12px',color:'#EEE'}}>EMI plans and Offers</span>
                <span style={{display:'block',fontSize:'12px',fontStyle:'italic',color:'#EEE'}}>powered by Razorpay</span>
              
                </div>
                <div className="row h-100  mx-1 py-3 custom-col-digital" style={{border:'1px solid white',borderRadius:'6px'}}>
                <div className='col-6 h-100 col-custom-digital  d-flex flex-column justify-content-center align-items-center'>
                    <div className=''>
                    <strong style={{display:'block',fontSize:'12px'}}>No cost EMI</strong> 
                        <strong style={{display:'block',fontSize:'12px'}}>starting from</strong>
                        <strong style={{display:'block',fontSize:'12px'}}>$100/mon</strong>
                        <div className='mt-2 '>
                    <span className='plans-button-style'><span>View plans</span>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#EEE">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.56988 2.91671C4.78508 2.70151 5.13399 2.70151 5.3492 2.91671L8.65556 6.22307C8.87076 6.43828 8.87076 6.78719 8.65556 7.00239L5.3492 10.3088C5.13399 10.524 4.78508 10.524 4.56988 10.3088C4.35468 10.0935 4.35468 9.74464 4.56988 9.52944L7.48658 6.61273L4.56988 3.69603C4.35468 3.48083 4.35468 3.13191 4.56988 2.91671Z" fill="#EEE">
  </path></svg></span></span>
                    </div>
                    </div>
            
                </div>
                <div className='col-6 h-100 col-2-custom-digital d-flex flex-column  justify-content-center align-items-center '>
                  
                    <div className='pb-3'>
                    <strong style={{display:'block',fontSize:'12px'}}>Savings of $200</strong> 
                        <strong style={{display:'block',fontSize:'12px'}}>with offers</strong>
                        </div>
                    
                        <div className='mt-2 '>
                        
                    <span className='offers-btn-style'> <span style={{display:'block',fontSize:'12px'}}>View offers</span>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#435775">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.56988 2.91671C4.78508 2.70151 5.13399 2.70151 5.3492 2.91671L8.65556 6.22307C8.87076 6.43828 8.87076 6.78719 8.65556 7.00239L5.3492 10.3088C5.13399 10.524 4.78508 10.524 4.56988 10.3088C4.35468 10.0935 4.35468 9.74464 4.56988 9.52944L7.48658 6.61273L4.56988 3.69603C4.35468 3.48083 4.35468 3.13191 4.56988 2.91671Z" fill="#435775/">
  </path></svg></span>
                       </span>
                         
                    </div>
                    </div>
                
                </div>
                </div>
             
              


            </div>
              <div className='last-digital-style'>
                    </div>
        
                    </>

    )
}

export default DigitalPayment