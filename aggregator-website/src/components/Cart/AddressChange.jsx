import '../../styles/digitalpayment.scss'

const AddressChange = ()=>{
    return(
        <>
<div className="container-fluid mt-5 d-flex justify-content-between align-items-center">
    <div className=" container d-flex py-2 px-0 justify-content-between align-items-center" >
       <ul className=" list-unstyled m-0 d-flex flex-row justify-content-center align-items-center" style={{columnGap:'10px'}}>
        <li><i class="bi bi-geo-alt" style={{display:'inline-block',fontSize:'14px'}}></i></li>
        <li><span style={{display:'inline-block',fontSize:'14px'}}>Delivery for <strong>560001</strong></span></li>
       </ul>
        <div className="d-flex justify-content-center align-items-center">
            <span style={{display:'inline-block',color:'red',fontStyle:'bold',fontWeight:'14px'}}>CHANGE</span>
        </div>
    </div>
</div>
  <div className='last-digital-style'>
                    </div>
                    <div className=' p-2 container-fluid '>
                        <span style={{dispaly:'inline-block',fontSize:'14px',textAlign:'center'}}>*All discounts are dynamic and can be subject to change at any time.</span>
                    </div>
                    <div className='last-digital-style'>
                    </div>
                    </>
    )
}
export default AddressChange;