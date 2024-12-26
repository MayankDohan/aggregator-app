import FloristService from "./FloristService"
import {FloristImages}  from './Florist.js'

import { useLocation } from "react-router-dom"

const ServicesComp = ()=>{
  const location = useLocation()
  const routeType = {
      '/florist':{
        data:FloristImages.florist ,
        type:"Florist"
      },
     '/wedding-planner':{
       data:FloristImages.weddingplanner ,
        type:"Wedding Planner"

      }
    }

    const {data,type} = routeType[location.pathname] || {}
    return(
      <FloristService data={data} type={type}/>
    )
}

export default ServicesComp;