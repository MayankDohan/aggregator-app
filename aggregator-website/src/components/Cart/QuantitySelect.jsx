import { useState } from "react";
import styles from './quantity.module.scss'


const QuantitySelect = ()=>{
    const options = [1,2,3,4,5,6,7,8]
    const [selectedValue,setSelectedValue] = useState(1)
    const handleChangeValue = (e)=>{
        setSelectedValue(e.target.value)
    }
    return(
      
        <div className={`${styles.divContainer}`}>
        <select className="form-select  " aria-label="quantity-drop-down" 
        value={selectedValue} onChange={handleChangeValue}
        style={{fontSize:'13px'}}>
            <options  className= 'm-2' selected>{selectedValue}</options>
           
            {options.map((values,index)=>(
                <option   value = {values}key={index}>{values}</option>
            ))}
            
        </select>
        <span className={`${styles.spanElement}`}>Quan:</span> 
        </div>
      
    )
}

export default QuantitySelect;