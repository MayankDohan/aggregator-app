import { useNavigate } from 'react-router-dom';
import '../../styles/cartstyling.scss'
import BelowEmpty from './BelowEmpty';
import EmptyCart from './EmptyCart';

const Cart = ()=>{
    const navigate = useNavigate()
  const   handleHomeMainPage = ()=>{
        navigate('/')
    }
    return(
        <div style={{height:'100vh'}}>
            <div style={{height:'50vh'}} className='d-flex flex-column justify-content-center align-items-center'>
        <div className="container-fluid custom-container-cart mt-2">
            <ul className="d-flex flex-row list-unstyled align-items-center">
                <li className="pe-2 hover-ffect-list" onClick={handleHomeMainPage}><i class="bi bi-arrow-left"></i></li>
                <li ><span>Shopping Cart</span></li>
            </ul>
        </div>
        <EmptyCart/>
        </div>
        <BelowEmpty/>
        </div>
    )
}

export default Cart;