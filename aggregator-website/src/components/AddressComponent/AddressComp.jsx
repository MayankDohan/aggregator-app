import ElementGap from "../ElementGap";
import AddressForm from "./AddressForm";
import AddressHeader from "./AddressHeader"
import BillingAddress from "./BillingAddress";


const AddressComp = ()=>{
    return(
        <>
    <AddressHeader/>
    <ElementGap applyMargin={true}/>
    <form>
    <AddressForm/>
    <ElementGap applyMargin={false}/>
    <BillingAddress/>
    
    
    <div className="container" style={{backgroundColor:'#ED7745'}}>
        <div className="d-flex flex-row justify-content-center align-items-center p-2">
            <button type='submit' style={{ border:'none',backgroundColor:'transparent', color:'white', fontSize:'16px',paddingBottom:'5px'}}>SAVE AND CONTINUE</button>
        </div>
    </div>
    </form>

    </>

    )
}
export default AddressComp;