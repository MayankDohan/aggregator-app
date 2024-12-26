import {icons} from './Icons.js'
import '../styles/categories.scss'

const CategoriesPage = ()=>{

    const columns = [1,2,3,4,5,6,7,8,9,10,11,12]

   
    return(
<div className='container '>
    <div className='d-flex justify-content-center align-items-center py-3'>
        <span style={{fontSize:'16px',fontWeight:'400',letterSpacing:'1px'}}>Party Rentals</span>
    </div>
  
    <div  className='row '>
        {icons.map((Icon,index)=>{
            
             return(
                <div key={index} className={`col-4 py-2 custom-column-styles `}
                   >
                <Icon key={index}/>
               
                  </div>
                
             )
               

})}
</div>
        
        

   
    <div className='d-flex justify-content-center align-items-center py-3'>
   
        <button className='p-2' style={{width:'80%',letterSpacing:'1px', alignItems:"center",fontSize:'14px',backgroundColor:'#ED7745',color:"white",border:'none'}}>EXPLORE COMPLETE CATALOGUE</button>
   

    </div>

</div>
    )
}
export default CategoriesPage;