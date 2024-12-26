import '../../styles/cartheader.scss'
import { useNavigate } from 'react-router-dom';

const CartHeader = ({size})=>{
    const navigate = useNavigate();

    const handleMainContent = ()=>{
        navigate(-1)
    }
    return(
        <div className="header-shopping-cart d-flex justify-content-between align-items-center">
           <div className="container  p-2 d-flex flex-row justify-content-between align-items-center">
                          <ul className=" m-0 list-unstyled d-flex flex-row justify-content-center align-items-center" style={{columnGap:'10px'}}>

          <li onClick={handleMainContent}><i class="bi bi-arrow-left" style={{display:'inline-block', fontSize:'20px', fontWeight:'bold'}}></i></li>
          <li><span style={{display:'inline-block', fontSize:'16px', fontWeight:'bold'}}>Shopping Cart ({size} items)</span></li>
            </ul>
           
            <div className='d-flex justify-content-center align-items-center'>
            <i class="bi bi-person-circle" style={{display:'inline-block', fontSize:'20px', fontWeight:'bold'}}></i>
            </div>
           </div>
        </div>

    )
}

export default CartHeader