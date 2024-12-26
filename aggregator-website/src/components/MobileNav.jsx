import MobileSearch from "./MobileSearch";
import UpperNav from "./UpperNav";
import NavModal from "./NavModal";
import { useState, useEffect} from "react";
import MobileFooter from "./MobileFooter";
import { Outlet} from 'react-router-dom';


const MobileNav = ()=>{
const [showStateModal,setShowStateModal] = useState(false);
const [showLocModal,setLocModal] = useState(false);


    const showModal = ()=>{
        setShowStateModal(true)

    }
    const handleClose = ()=>{
      if(showStateModal){
        setShowStateModal(false)
      }
      setLocModal(false)
    }
     const handleDialogClose = ()=>{
      if(showModal){
       setShowStateModal(false)
      }
        setLocModal(false)

     }
     const handleLocaModal = ()=>{
      setLocModal(true)

     }
    useEffect(() => {
        if (showStateModal || showLocModal) {
          document.body.classList.add("no-scroll");
        } else {
          document.body.classList.remove("no-scroll");
        }
      }, [showStateModal,showLocModal]);
    return(
        <>
        <UpperNav showModal={showModal} handleLocaModal={handleLocaModal}/>
        <MobileSearch/>
        <Outlet/>


       
     <MobileFooter/>
      
      <NavModal  handleLocaModal= {handleLocaModal}
       showLocModal={showLocModal} 
        showStateModal={showStateModal} 
         handleClose={handleClose} 
         handleDialogClose={handleDialogClose}
        />
        
        </>

    )
}

export default MobileNav;