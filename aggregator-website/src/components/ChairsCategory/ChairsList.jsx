

import {ChairsIcons} from './chairsicons.js'
import '../../styles/chairslist.scss'
import { Link } from 'react-router-dom';

const ChairsList = ()=>{
    return(
        <>
        <div className='container d-flex justify-content-center align-items-center'>
            <span style={{display:'inline-block'}}>Chairs Rental</span>
        </div>
        
        <div className="container mt-4">
            <div className="row">
                {ChairsIcons.map((Chair,index)=>(
                      <div className="col-6 col-md-2 py-3  px-1 custom-column-chairspics" key={Chair.id}>
                        {Chair.id===1?( 
                            <Link className='link-hyper-style' to={`${Chair.category}/${Chair.id}`}>
                   <Chair.component/>
                   </Link>  ):
                        Chair.id===2?( 
                        <Link  className='link-hyper-style'to={`${Chair.category}/${Chair.id}`}>
                            <Chair.component/>
                            </Link>):
                            Chair.id===3?( <Link className='link-hyper-style' to={`${Chair.category}/${Chair.id}`}>
                                <Chair.component/>
                                </Link>):
                    (<Chair.component/>)}
                       
                   

                      </div>
                ))}
              
              
            </div>
        </div>
        </>
    )
}

export default ChairsList;