
import {TentingIcons} from './tentingicons.js'

import '../../styles/tentinglist.scss'
import { Link,Outlet } from 'react-router-dom';


const TentingList = ()=>{
    return(
        <>
        <div className='container d-flex justify-content-center align-items-center'>
            <span style={{display:'inline-block'}}>Tents Rental</span>
        </div>
        <div className="container mt-4 ">
            <div className="row">
                {TentingIcons.map((Tents)=>(
                     <div className="col-6 col-md-4 py-3  px-1 custom-column-tentingpics" key={Tents.id}>
                        {Tents.id===1?( <Link  className='link-hyper-style' to={`${Tents.category}/${Tents.id}`}>
                        <Tents.component/>
                        </Link>):Tents.id===2?( <Link  className='link-hyper-style' to={`${Tents.category}/${Tents.id}`}>
                        <Tents.component/>
                        </Link>):( <Tents.component/>)}
                     
                     
                    
 
                 </div>
            

                ))}
                   
            </div>
           
        </div>
        </>
    )
}

export default TentingList;