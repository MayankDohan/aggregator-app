import { ModalLinksMob} from './Icons.js'
import '../styles/navmodal.scss'
import { useRef } from 'react'
import UpperNavLoc from './UpperNavLoc.jsx';

const NavModal = ({showStateModal, handleClose,handleDialogClose, showLocModal})=>{
 
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal')) {
      handleDialogClose();
    }
  };

     const modalClasses = `modal fade ${showStateModal?' modal-container show':''} 
                              ${showLocModal?' location-modal show': ''}`;
    return(
       
        <div className={modalClasses} 
        style={{ display: showStateModal || showLocModal ? 'block' : 'none' }} tabindex="-1"
        onClick={handleOutsideClick}>
        <div className={`modal-dialog  modal-dialog-centered p-0 modal-dialog-scrollable ${showStateModal?'modal-full-height':''} `} role="document"  onClick={(e) => e.stopPropagation()} 
        id="modalmobilescreen">
          <div className="modal-content modal-custom-content pb-5">
            {showLocModal&&( <div class="modal-header d-flex flex-row justify-content-between align-items-center">
          <h5>SELECT LOCATION</h5>
          <div className='close-icon'>
              <i class="bi bi-x-lg" onClick={handleClose}></i> 
              </div> 
           </div>)}
         
         
            <div class="modal-body modal-custom-body pb-3" >
               {showStateModal && ModalLinksMob.map((NavLink,index)=>(
                <NavLink key={index} showStateModal={showStateModal} handleClose={handleClose}/>
              ))}
              {showLocModal && <UpperNavLoc/> }
            </div>
          
          </div>
        </div>
      </div>
    )
}
export default NavModal