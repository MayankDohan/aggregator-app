import {FloristImages} from './Florist'
import ProductPartyDescrp from './ProductPartyDescrp'
import { useLocation, useParams } from 'react-router-dom'

const ProductPartyService = ()=>{
  const location = useLocation()
  const {id} = useParams()  

 
   let data
   if (location.pathname.startsWith('/florist')) {
    data = FloristImages.florist;
} else if (location.pathname.startsWith('/wedding-planner')) {
    data = FloristImages.weddingplanner;
} else {
    data = []
}

console.log("data",data)

  const idFind = id 
  const actualData = data.find(florist=> florist.id===idFind)
  console.log("data is",actualData)
 
  return(
     
      <ProductPartyDescrp actualData={actualData}/>
 
    )
}

export default ProductPartyService;