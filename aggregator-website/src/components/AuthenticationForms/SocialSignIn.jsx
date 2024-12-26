import fb from '../../uranladderimages/fb.png'
import google from '../../uranladderimages/google.webp'
import styles from './auth.module.scss'

const SocialSignIn = ()=>{
    return(
        <>
            <div className='d-flex justify-content-center align-items-center mt-3 p-2'>
                <span style={{letterSpacing:'1px',fontSize:'16px',fontWeight:400}}>Social Sign-in</span>
            </div>
            <div className={`${styles.socialButtons} mb-3`}>
               <div className='d-flex flex-row justify-content-center align-items-center p-2' >
                <button className={`${styles.googleSignIn} me-3 p-1`}><img src={google} alt='' style={{width:'35px',height:'35px',marginRight:'3px'}}/>Google</button>
                <button className={`${styles.googleSignIn} p-1`}><img src={fb} alt='' style={{width:'35px',height:'35px',marginRight:'3px'}}/>Facebook</button>
                </div>
            </div>
            
                <div className='d-flex  justify-content-center align-items-center my-3'>
                <span style={{letterSpacing:'1px',fontSize:'14px',fontWeight:400}} >By Continuing, you agree to our</span>
                </div>
                <div className='d-flex  justify-content-center align-items-center mb-3 p-2'>
                <span style={{letterSpacing:'1px',fontSize:'14px',fontWeight:400,color:'#ED7745'}} >Terms of Service</span>
                <span style={{letterSpacing:'1px',fontSize:'14px',fontWeight:400,margin:'0 2px 0 2px'}}>and</span>
                <span style={{letterSpacing:'1px',fontSize:'14px',fontWeight:400,color:'#ED7745'}}>Privacy & Legal Policy</span>
                </div>
            

            </>
    )
}

export default SocialSignIn;