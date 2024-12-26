
import styles from './styles/topimages.module.scss'


const TopImages = ({images,title})=>{
    return(
        <>
        <div className="container p-0 my-2 " >
          <div className={`${styles.imagesContainer}`}>
          {images.map((img,index)=>(
             <div  key={index} className={index===2 ? `${styles.largerImage}`:''}>
                 <img src={img} alt='fl' />
                 </div>
          ))}
       </div>
       </div>
        <div className='container'>
        <div className='row mt-3'>
            <div className=' col-12'>
                <h5 style={{fontSize:'14px'}}>
                  {title}
                </h5>
            </div>
            </div>
            </div>

        </>
    )
}

export default TopImages;