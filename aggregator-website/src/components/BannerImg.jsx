import banner from '../uranladderimages/topbannerimage.jfif'

const BannerImg = ()=>{
    return(

        <div className="container-fluid px-0 mx-0">
            <div className='m-0 p-0'>
            <img src={banner} style={{width:'100%',height:'auto'}}></img>
            </div>
          

        </div>

    )
}
export default BannerImg;