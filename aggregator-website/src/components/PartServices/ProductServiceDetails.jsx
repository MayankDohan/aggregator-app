import { useState } from "react";
import Overview from "./NavigationLink/Overview";
import Products from "./NavigationLink/Products";
import Services from "./NavigationLink/Services";
import styles from './styles/cards.module.scss'
import WeddingService from "./NavigationLink/WeddingService";



const ProductServiceDetails = ({actualData})=>{

  const[activeState, setActiveState] = useState("overview")
 
  
  const handleActiveState = (state)=>{
    setActiveState(state)
  }
 
let showNavComp
  if(activeState==="overview"){
    showNavComp = <Overview address={actualData.address} services={actualData.service} actualData={actualData}/>
  }
  else if(activeState==="products"){
    showNavComp = <Products products={actualData.products}/>
  }
  else{
    if(actualData.type==='florist'){
    showNavComp = <Services services={actualData.serviceprovide}/>
    }
    else{
      showNavComp = <WeddingService services={actualData.service}/>
    }
  }
    return(
      <div className="container mt-2 mb-4 px-0">
        <div className="card py-1" style={{borderColor:'#EEE'}}>
        <div class={`card-header py-2 ${styles.cardHeader}`}>
            <ul className={`nav nav-pills card-header-pills py-2 ${styles.ulList}`}>
                <li  className={`nav-item ${styles.navItem}
                 ${activeState==="overview"? styles.active:''}`} onClick={()=>handleActiveState("overview")}>OVERVIEW</li>
               {actualData.type==="florist"&&( <li  className={`nav-item ${styles.navItem}
                  ${activeState==="products"? styles.active:''}`} onClick={()=>handleActiveState("products")}>PRODUCTS</li>)}
               
                <li  className={`nav-item ${styles.navItem} 
                 ${activeState==="services"? styles.active:''}`} onClick={()=>handleActiveState("services")}>SERVICES</li>
                <li style={{fontSize:'14px'}}>REVIEWS</li>
                <li style={{fontSize:'14px'}}>PHOTOS</li>
            </ul>
            </div>
            <div className="card-body m-0 ">
            {showNavComp}
            </div>
            </div>
      </div>
    )
}

export default ProductServiceDetails ;