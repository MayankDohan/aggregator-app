import styles from '../../styles/addresspagestyles/addressform.module.scss'
import ElementGap from '../ElementGap';
import { useState  } from 'react';

const BillingAddress = ()=>{

  const[checkboxState, setCheckBoxState] =   useState(true);
  const handleCheckClick = (e)=>{
    setCheckBoxState(e.target.checked)
  }
  let content;
    if(checkboxState){
        content = (
            <div className='col-12 m-0 p-0 '>
            <ElementGap applyMargin={false}/>
            </div>
        )
    }
    else{
        content = (
            <>
            <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
            <input type="text" class="form-control" id="floatingFirst"  style={{paddingLeft:'2px'}} placeholder="enter your first name"/>
                <label for="floatingFirst" style={{color:'#999999',fontSize:'14px'}}>First Name *</label>
</div>

<div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                <input type="text" class="form-control" id="floatingLast"  style={{paddingLeft:'2px'}}placeholder="enter your last name"/>
                <label for="floatingLast" style={{color:'#999999',fontSize:'14px'}} >Last Name *</label>
                 </div>
                    <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="text" class="form-control" id="floatingPin" style={{paddingLeft:'2px'}} placeholder="enter your pincode"/>
                     <label for="floatingPin" style={{color:'#999999',fontSize:'14px'}}>Pincode * </label>
                    </div>
                    <div className={`${styles.addressForm} ${styles.addressTextStyling} col-12 my-3  `}>
                    <textarea   id="floatingAddress"  placeholder="enter your address"/>
                    <label for="floatingAddress" style={{color:'#999999',fontSize:'14px'}}> Billing Address * </label>
                     </div>
                     <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="text" class="form-control" id="floatingNo" style={{paddingLeft:'2px'}} placeholder="enter your phone no"/>
                     <label for="floatingNo" style={{color:'#999999',fontSize:'14px'}}>Phone Number * </label>
                    </div>
                    </>

        )
    }

    return(
        
        <div className="container">
            
                <div className="row">
                    <div className="col-12 ">
                        <div className={`${styles.formCheck} mt-2 d-flex align-items-center`} style={{columnGap:'10px'}}>
                            <label >
            <input type="checkbox" id="flexCheckChecked" checked={checkboxState} onClick={handleCheckClick}></input>
          <span> </span>
          </label>
          <span > Use as billing address</span>
            </div>
            </div>
           
              {content}
            </div>
            
               
           
           
        </div>
    
    )
}

export  default BillingAddress;