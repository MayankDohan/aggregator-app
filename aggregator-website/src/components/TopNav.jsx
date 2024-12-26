import '../styles/topnav.scss'

const TopNav = ()=>{
    return(
        <div className='custom-root-container'>
            <div className=' span-style d-flex justify-content-center align-items-center'>
            <span>
            Celebrate our <strong>12th Anniversary</strong> with up to 50% Off!| 
            <span style={{color:'red', fontWeight: "bold", paddingLeft:'4px'}}>Click to shop</span>
            </span>
            </div>
            
            <div className ='ullist-container'>
            <ul className=''>
                <li className=''>Help</li>
                <li className=''>Track Order</li>
            </ul>
            <ul className=' '>{/*ms-auto margin start auto for pushing to end side*/}
                <li className=''>Find a Store</li>
                <li className=''>
                Bulk Orders
                </li>
                <li className=''>Gift Cards</li>
                <li className=''>UL Services</li>
            </ul>
            </div>
        </div>

    )
}

export default TopNav;