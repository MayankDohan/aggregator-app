import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faSquareFacebook, faTwitter, faPinterest, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const FooterIcons = ()=>{

    return(
        <div className='container my-3'>
<div className=' w-100 d-flex flex-row justify-content-center align-items-center'>
    <div className=' w-50 d-flex justify-content-between'>
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faYoutube} />
           
            <FontAwesomeIcon icon={faLinkedin} />
            </div>
</div>

        </div>
    )
}

export default FooterIcons;