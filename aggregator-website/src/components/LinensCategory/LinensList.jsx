
import {LinensIcons} from './linensicons.js'
import '../../styles/linenslist.scss'
import { Link,Outlet } from 'react-router-dom';


const LinensList = ()=>{
    return(
        <>
        <div className='container d-flex justify-content-center align-items-center'>
            <span style={{display:'inline-block'}}>Linens Rental</span>
        </div>
        <div className="container mt-4 ">
            <div className="row ">
                { LinensIcons.map((Linens,index)=>(
                    <div className="col-6 col-md-4  py-3  px-1 custom-column-linenspics" key={index}>
                        
                 <Linens.component/>
               

                  

            </div>
                ))
                }
              
              
            </div>
        </div>
        </>
    )
}

export default LinensList;