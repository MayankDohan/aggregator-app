import { Link, NavLink, useLocation } from 'react-router-dom';
import florist1 from './Floristassests/florist1.jpg'
import styles from './floristservice.module.scss'
import SvgBarcrumb from './SvgBarcrumb';
import './barcrumb.scss'


const FloristService = ({data,type})=>{
   const {pathname} = useLocation()
    const url =   pathname.split('/').filter(x=>x)
 
    return(
      <>
         <div className='container product-container d-flex flex-row align-items-center'>
            <NavLink to='/'  className='nav-links'>Home <SvgBarcrumb/></NavLink>
            {url.map((name,index)=>{
              let breadcrumnb = ''
              breadcrumnb += `/${name}`
              let linkText = breadcrumnb.slice(1).replace('-', ' ').charAt(0).toUpperCase()+ breadcrumnb.slice(2);
              return(
                  <span style={{color:'#878787',fontSize:'12px'}}>{linkText}</span>
            )})}
         
          </div>
      <div className="container">
        <div className='d-flex justify-content-center align-items-center'>
          <span style={{fontSize:'16px',fontWeight:400}}>{type}</span></div>
       
        <div className="row mt-3 ">
        {
            data.map((items,index)=>(
                <div className="col-6 col-md-4 my-1 " style={{paddingRight:'5px',paddingLeft:'5px'}}>
                 {  items.id==="1"?
                 ( <Link  className={`${styles.linkStyling}`}to ={`${items.id}`}>
                    <div className='card  h-100' style={{width:'100%'}}>
                    <img src={items.img} className={`card-img-top ${styles.imageCard}`}  alt='image'></img>
                    <div class="card-body ">
                        <h5 className='' style={{fontSize:'14px'}}>{items.title}</h5>
                       
                        <h5 style={{ fontSize:'13px',marginBottom:0}}>Services</h5>
                       {items.service.map((services,index)=>(
                        <ul className=" m-0 list-group list-group-flush">
                          <li className=" p-0 list-group-item" style={{color:'gray',fontSize:'12px'}}>{services}</li>
                        </ul>
                       ))}
                        <div className='d-flex mt-2' style={{gap:"4px"}}>
                        <i class="bi bi-geo-alt" style={{fontSize:'11px',color:'gray'}}></i>
                        <div>
                        <p className='mb-2' style={{fontSize:'11px',color:'gray',marginBottom:0}}>{items.address}</p>
                        </div>
                        </div>
                        <div className='d-flex ' style={{gap:"4px"}}>
                        <i class="bi bi-telephone" style={{fontSize:'11px',color:'gray'}}></i>
                        <span style={{fontSize:'11px',color:'gray'}}>+1 999-999-0729</span>
                          </div>
                       
                        </div>

                  </div>
                  </Link>):( <div className='card  h-100' style={{width:'100%'}}>
                    <img src={items.img} className={`card-img-top ${styles.imageCard}`}  alt='image'></img>
                    <div class="card-body ">
                        <h5 className='' style={{fontSize:'14px'}}>{items.title}</h5>
                       
                        <h5 style={{ fontSize:'13px',marginBottom:0}}>Services</h5>
                       {items.service.map((services,index)=>(
                        <ul className=" m-0 list-group list-group-flush">
                          <li className=" p-0 list-group-item" style={{color:'gray',fontSize:'12px'}}>{services}</li>
                        </ul>
                       ))}
                        <div className='d-flex mt-2' style={{gap:"4px"}}>
                        <i class="bi bi-geo-alt" style={{fontSize:'11px',color:'gray'}}></i>
                        <div>
                        <p className='mb-2' style={{fontSize:'11px',color:'gray',marginBottom:0}}>{items.address}</p>
                        </div>
                        </div>
                        <div className='d-flex ' style={{gap:"4px"}}>
                        <i class="bi bi-telephone" style={{fontSize:'11px',color:'gray'}}></i>
                        <span style={{fontSize:'11px',color:'gray'}}>+1 999-999-0729</span>
                          </div>
                       
                        </div>

                  </div>)}
                 
                    
                    </div>
            ))
        }

        </div>
      </div>
      </>
    )
}

export default FloristService;