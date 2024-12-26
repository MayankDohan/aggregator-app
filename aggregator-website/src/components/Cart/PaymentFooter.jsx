
import { useNavigate } from 'react-router-dom'
import '../../styles/paymentfooter.scss'
const PaymentFooter = ()=>{
    const navigate = useNavigate()
     const handleCheckout = ()=>{
        navigate('/address')
     }
    return(
        <div className="footer-container-payment ">
            <div className=" container  d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-center ">
                    <span style={{display:'block',fontWeight:'bold',lineHeight:'normal'}}>$445</span>
                    <strong  style={{display:'block',color:'#ED7745',lineHeight:'normal'}}>Grand Total</strong>
                </div>
                <div className='d-flex justify-content-center align-items-center '>
                    <button  className='checkout-button px-3 py-2' onClick={handleCheckout}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentFooter