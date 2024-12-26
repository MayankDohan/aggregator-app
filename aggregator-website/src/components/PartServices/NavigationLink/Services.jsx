import React from 'react'
import styles from '../styles/services.module.scss'
import { useState } from 'react';

const Services = ({services}) => {
  const[expandIndexText,setExpandIndexText] = useState({});
 
  const MAX_LENGTH = 145
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
   return text.slice(0, maxLength) + '...'; 
  };
  const handleEllipsisText = (index,textshow)=>{
   
    setExpandIndexText((prevState) => ({
      ...prevState,   
      [index]: {     
        isExpanded: !prevState[index]?.isExpanded, 
        text: textshow
      }
    }));
  }
 
 

  if(services)
  return (
   <>
    <div className=''>
      <h3>Florist</h3>
    </div>
    <div className='d-flex flex-column '>
      {services.map((service,index)=>{
         const isExpanded = expandIndexText[index]?.isExpanded || false;
     
         const actualShowText = isExpanded ? service.description :  truncateText(service.description, MAX_LENGTH);

      
     
return (
           <div className={`${styles.ServicesContent}`}>
        <div className={`${styles.headings}`}>
        <h5>{service.servicetype}</h5>
     
        <p>
          {actualShowText}
               
                  {!isExpanded &&service.description.length>MAX_LENGTH&&
                   <span key={index} 
                    onClick={()=>handleEllipsisText(index,service.description)} style={{cursor:'pointer',color:'blue'}}>MORE</span>}
                   
                
                </p>
        
           
          
              </div>
              <div className={`${styles.Price}`}>
          <h2> From {service.price}</h2>
        </div>
              </div>
      )})}
       </div>
       </>
  )
}

export default Services;
