import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown,faAngleUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/modallinks.scss'
import { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';


 export const Home = ({handleClose})=>(
<div className='modal-links-container'>
    <ul className='d-flex sub-links-modal'>
        <li onClick={handleClose}><span> HOME</span></li>
    </ul>
</div>
);

export const WeddingService = ({handleClose})=>{

   
    const navigate = useNavigate()
    
    
      
      const handleShowTenting = ()=>{
        handleClose()

        navigate('/tentinglist')
      }
    

     
    return(
    <div className='modal-links-container'>
        <ul className='sub-links-modal' >
            <li onClick={handleShowTenting}><span>WEDDING PLANNER</span></li>
          </ul>
        
      
    </div>
)

}
export const FloristService = ({handleClose})=>{
   
    const navigate = useNavigate()
  
     const handleShowLinens = ()=>{
        handleClose()
        navigate('/linens')
     }
    return(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li onClick={handleShowLinens}><span>FLORIST</span></li>
          
            </ul>
           
       
            
        

    </div>
)
}

export const StaffingService = ({handleClose})=>{
   
    const navigate = useNavigate();
  
const handleShowChairs = ()=>{
    handleClose()
    navigate('/chairs')
}
    return(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li onClick={handleShowChairs}><span>STAFFING SERVICE</span></li>
           
        </ul>
      

    </div>
)
}

export const FaceService = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>FACE PAINT</span></li>
           
            
        </ul>

    </div>
)

export const MagicianService = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>MAGICIANS</span></li>
          
            
        </ul>

    </div>
)

export const DjService = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>DJ</span></li>
           
            
        </ul>

    </div>
)

export const CasinoService = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>CASINO</span></li>
           
            
        </ul>

    </div>
)

export const BarService = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>BAR TENDING</span></li>
          
            
        </ul>

    </div>
)









export const Help = ()=>(
    <div className='modal-links-container'>
        <ul className='sub-links-modal'>
            <li><span>HELP</span></li>
           
        </ul>

    </div>
)




