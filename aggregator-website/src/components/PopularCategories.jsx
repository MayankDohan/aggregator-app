

const PopularCategories = ()=>{
   

    return(
      <>
            
<div className="container d-flex flex-column justify-content-center align-items-center ">
            <div className=" text-center my-2">
                <span style={{display:"inline",fontSize:'16px',letterSpacing:'1px'}}>Browse Popular Categories</span>
            </div>
            </div>

    <div className="container  my-3 ">
            
            <div className="row" >
                <div className="col-6   " style={{borderRight:'2px solid #EEE'}}>
                    <div className="d-flex justify-content-center align-items-center py-2" style={{borderBottom:'1px solid #EEE'}}>
                    <span style={{fontSize:'14px',letterSpacing:'1px'}}>Party Services</span>
                    </div>
                   <div className="d-flex flex-row  justify-content-center align-items-center p-2 my-2 " style={{gap:'50px'}} >
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}}>Florist</span>
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}} >Magicians</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}}>Wedding Planner</span>
                    </div>
                  
                    </div>
                <div className="col-6 ">
                <div className="d-flex justify-content-center align-items-center py-2" style={{borderBottom:'1px solid #EEE'}}>
                    <span style={{fontSize:'14px',letterSpacing:'1px'}}>Party Rentals</span>
                    </div>
                   <div className="d-flex flex-row  justify-content-center align-items-center p-2  my-2" style={{gap:'50px'}} >
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}}>Tenting</span>
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}} >Chairs</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                    <span style={{fontSize:'14px',letterSpacing:'0.8px'}}>Lounge Furniture</span>
                    </div>
                </div>
         
            </div>
         

        </div>
        </>

    )
}
export default PopularCategories;