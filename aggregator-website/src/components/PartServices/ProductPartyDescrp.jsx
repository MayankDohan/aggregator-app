
import { NavLink,useLocation } from "react-router-dom";
import ProductServiceDetails from "./ProductServiceDetails";
import TopImages from "./TopImages"
import SvgBarcrumb from "./SvgBarcrumb";
import './barcrumb.scss'



const ProductPartyDescrp = ({actualData})=>{
  const {pathname} = useLocation()
  const url = pathname.split('/').filter(x=>x)

 
  
   
    return(
        <>
        <div className="container product-container ">
          <div className='d-flex flex-row'>
          <NavLink to='/' className='nav-links'>Home  <SvgBarcrumb/> 
        </NavLink>
          {url.map((name,index)=>{
           let barcrumn = ''
            barcrumn += `/${name}`
             console.log("path is", barcrumn)
             let linkText = barcrumn.slice(1).replace('-', ' ').charAt(0).toUpperCase()+ barcrumn.slice(2);
            return(
              <>
             { index===url.length-1?<span style={{color:'#878787',fontSize:'12px'}}>{linkText}</span>: 
             <NavLink to={barcrumn} className='nav-links'>
              {linkText}
              <SvgBarcrumb/> 
              </NavLink>}
            
             
             </>

          )})}
          </div>
        </div>

      <TopImages images={actualData.topimages} title={actualData.title}/>
     <ProductServiceDetails actualData={actualData}/>
      </>
    )
}

export default ProductPartyDescrp;