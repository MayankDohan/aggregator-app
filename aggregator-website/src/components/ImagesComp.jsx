
import mealtimememories from '../uranladderimages/mealtimemories.jfif'

const ImagesComp = ()=>{

    const images = [ mealtimememories  ]
    

    return(
<div className='container-fluid'>
<div className='row'>
    {images.map((image,index)=>(
          <div key={index} className='col-12 px-0 py-1'>
          <img src={image} style={{width:'100%',height:'auto'}} alt='images-services'/>
           
      </div>

    ))}
  
</div>


</div>
    )
}
export  default ImagesComp;