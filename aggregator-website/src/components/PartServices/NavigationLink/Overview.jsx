import styles from '../styles/overview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartActions } from '../../../store/shoppingCart';
import { useNavigate } from 'react-router-dom';

 const Overview = ({address,services,actualData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("Data to view", actualData)
  const handleCart = (actualData)=>{
   
    dispatch(shoppingCartActions.addTocCart(actualData))
  
  }
  const addStatus = useSelector(state=>state.shoppingCart.addItemStatus)
  const statusKey = `${actualData.type}-${actualData.id}`;
const handleCartNavigate = ()=>{
  navigate('/cart')
}
  let Buton;
 
  if(addStatus[statusKey]==="success" || addStatus[statusKey]==="updated" ){
    Buton =  <button onClick={handleCartNavigate}>GO TO CART</button>
  }
  else{
    Buton =   <button onClick={()=>handleCart(actualData)}>Add To Cart</button>
    
  }

  return (
    <>
    <div className={`d-flex flex-row align-items-center py-2 ${styles.addressStyle}`}>
    <i class="bi bi-geo-alt"></i>
    <p>{address}</p>
    </div>
    <div className={`d-flex flex-row align-items-center  py-2 ${styles.addressStyle}`}>
    <i class="bi bi-list-ul"></i>
    <div className={`${styles.servicesList}`}>
     <p> <strong>Services:</strong>
    {services.map((service,index)=>(
      <>
      {service}
      </>
    ))}
    </p>
      </div>
      <FontAwesomeIcon icon={faAngleRight} />
    </div>
    <div className={`d-flex flex-row align-items-center  py-2 ${styles.addressStyle}`}>
    <i class="bi bi-cart3"></i>
   {Buton}
    </div>
    <div className={`d-flex flex-row  align-items-center py-2 ${styles.addressStyle}`}>
    <i class="bi bi-telephone"></i>
    <p>+1 999-999-0729</p>
    </div>
    </>
  )
}

export default Overview;
