

const WeddingService = ({services})=>{
    return(
       <>
       <div>
        <h5 style={{letterSpacing:'1px'}}>Event Planning Service</h5>
       </div>
       {services.map((item,index)=>(
        <div  className="d-flex flex-column py-3 " style={{ fontSize:'14px',letterSpacing:'1px',borderBottom: '1px solid #EEE'}} key={index}>
            <span>{item}</span>
        </div>
       ))}

       </>
    )
}

export default WeddingService;