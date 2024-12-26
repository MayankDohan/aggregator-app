import { useSelector } from 'react-redux'

const PriceSummary = ()=>{
   const cartPrice =  useSelector(state=>state.shoppingCart.cartTotal)
    return(
        <div className="container d-flex flex-column mb-3" style={{rowGap:'5px'}}>
            <div className="p-2">
                <strong style={{display:'inline-block'}}>Price Summary</strong>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between align-items-center" 
            style={{ borderBottom: '1px solid #EEE', borderWidth: '1px',fontSize:'14px'}}>
            <span style={{display:"inline-block",color:'#222222'}}> Cart Total</span>
            <span style={{display:"inline-block",color:'#606060'}}>${cartPrice}</span>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between align-items-center"
             style={{ borderBottom: '1px solid #EEE', borderWidth: '1px',fontSize:'14px'}}>
            <span style={{display:"inline-block",color:'#222222'}}>Your Savings</span>
            <span style={{display:"inline-block",color:'#606060'}}>-$200</span>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between align-items-center"
            style={{ borderBottom: '1px solid #EEE', borderWidth: '1px',fontSize:'14px'}}>
            <span style={{display:"inline-block",color:'#222222'}}>Delivery Charge</span>
            <strong style={{color:'green',display:'inline-block'}}> FREE</strong>
            </div>
            <div className=" p-2 d-flex flex-row justify-content-between align-items-center"
            style={{ borderBottom: '1px solid #EEE', borderWidth: '1px',fontSize:'14px'}}>
            <span style={{display:"inline-block",color:'#222222'}}>Total Payable Amount</span>
            <span style={{display:"inline-block",color:'#606060'}}>${cartPrice}</span>
            </div>
        </div>

    )
}

export default PriceSummary