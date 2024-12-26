import { BarTending, Dj,FacePaint,Magician,Casiono, Florist, StaffingServices, WeddingPlanner, LessMore } from "./partyservicesicons.js";
import '../styles/categories.scss'
const PartyServices = ()=>{
    const service=[<WeddingPlanner/>, <Florist/>,<StaffingServices/>,<FacePaint/>,
    <Magician/>,<Dj/>,<Casiono/>, <BarTending/>,<LessMore/>]
   
    return(
        <div className="container custom-container-services">
            <div className="d-flex justify-content-center align-items-center py-3">
                <span style={{fontSize:'16px',fontWeight:'400',letterSpacing:'1px'}}>Party Services</span>
            </div>
            <div className="row "  >
                {service.map((ServicesParty,index)=>(
                  
                       <div className={`col-4 px-0 py-2  custom-column-styles`}  
                          >
                       
                    {ServicesParty}
                 
                    </div>
                ))}
      

        
         
         
          
              
            </div>
        </div>
    )
}
export default PartyServices ;