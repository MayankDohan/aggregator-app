import ElementGap from "../ElementGap";
import styles from '../../styles/addresspagestyles/addressform.module.scss'

const AddressForm = ()=>{
    return(
        <>
        <div className="container ">
            
            <div className="row py-3 mt-3">
                <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                <input type="text" class="form-control" id="floatingFirst"  style={{paddingLeft:'2px',paddingBottom:0}} placeholder="enter your first name"/>
                <label for="floatingFirst" style={{color:'rgb(153,153,153)',fontSize:'14px'}}>First Name *</label>

                </div>
                <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                <input type="text" class="form-control" id="floatingLast"  style={{paddingLeft:'2px'}}placeholder="enter your last name"/>
                <label for="floatingLast" style={{color:'rgb(153,153,153)',fontSize:'14px'}} >Last Name *</label>

                    
                    </div>
                    <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="email" class="form-control" id="floatingEmail" style={{paddingLeft:'2px'}} placeholder="enter your email"/>
                     <label for="floatingEmail"  style={{color:'rgb(153,153,153)',fontSize:'14px'}}>Email Address * </label>

                    
                    </div>
                    <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="text" class="form-control" id="floatingNo" style={{paddingLeft:'2px'}} placeholder="enter your phone no"/>
                     <label for="floatingNo" style={{color:'rgb(153,153,153)',fontSize:'14px'}}>Phone Number * </label>
                    </div>
            </div>
           
        </div>
         <ElementGap applyMargin={false}/>
         <div className="container">
            
            <div className="row py-3 mt-3">
            <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="text" class="form-control" id="floatingPin" style={{paddingLeft:'2px'}} placeholder="enter your pincode"/>
                     <label for="floatingPin" style={{color:'rgb(153,153,153)',fontSize:'14px'}}>Pincode * </label>
                    </div>
            
            
            <div className={`${styles.addressForm} ${styles.addressTextStyling} col-12 my-3  `}>
           
                    <textarea   id="floatingAddress"  placeholder="enter your address"/>
                    <label for="floatingAddress" style={{color:'rgb(153,153,153)',fontSize:'14px'}}>Address * </label>
                    </div>
                    <div className={`${styles.addressForm} col-12 mb-3 form-floating`}>
                    <input type="text" class="form-control" id="floatingLandmark" style={{paddingLeft:'2px'}} placeholder="enter your landmark"/>
                     <label for="floatingLandmark" style={{color:'rgb(153,153,153)',fontSize:'14px'}}>Landmark (optional)</label>
                     
                    </div>
                    </div>
                    
         </div>
         </>

    )
}

export default AddressForm;