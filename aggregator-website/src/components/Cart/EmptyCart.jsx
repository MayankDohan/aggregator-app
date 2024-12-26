import { useNavigate } from 'react-router-dom'
import '../../styles/emptycart.scss'

const EmptyCart = ()=>{
    const navigate = useNavigate()
    const handleMainPage = ()=>{
        navigate('/')

    }
    return (
        <div className="container-fluid custom-container-empty-cart d-flex flex-column 
        justify-content-center align-items-center h-50">
            
                <div className='empty-cart-symbol mb-3'><i class="bi bi-cart3"></i>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <span className='mb-3'>Your cart is empty</span>
                <button   className='py-2 px-2 d-flex justify-content-center align-items-center'
                onClick={handleMainPage}><span style={{display:'block'}}>CONTINUE SHOPPING</span></button>
            </div>

        </div>

    )
}

export default EmptyCart;