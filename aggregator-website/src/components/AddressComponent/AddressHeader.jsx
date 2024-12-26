import styles from '../../styles/addresspagestyles/Addressheader.module.scss'
import ElementGap from '../ElementGap';
import { useNavigate } from 'react-router-dom'
const AddressHeader = ()=>{
    const navigate = useNavigate()
    const handlePrevious = ()=>{
        navigate(-1);
    }
    return(
    
        <div className={`${styles.header} p-2`}>
            <div className="container">
                <ul className='m-0 list-unstyled d-flex align-items-center ' style={{columnGap:'10px'}}>
                    <li onClick={handlePrevious} style={{cursor:'pointer'}}>
                        <i class="bi bi-arrow-left" style={{display:'inline-block', fontSize:'20px', fontWeight:'bold'}}>
                        </i>
                        </li>
                    <li>
                        <span>Enter your address</span></li>
                </ul>
            </div>
        </div>
        
        
    )
}

export default AddressHeader;