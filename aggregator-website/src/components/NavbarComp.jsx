import '../styles/topnav.scss'
import trackorder from '../assests/trcaking.png'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SvgComp from './SvgComp';
import urbanlogo from '../assests/urbanlogo.PNG'



const NavbarComp = ()=>{
    return(

        <div className = 'custom-root-container'>
            <div className='span-style'>
            <span>
            Celebrate our <strong>12th Anniversary</strong> with up to 50% Off!| 
            <span style={{color:'red', fontWeight: "bold", paddingLeft:'4px'}}>Click to shop</span>
            </span>

            </div>

            <div className='mobile-container-root '>
              <div className='block-none-container'>
                
                  <ul className='nav-logo'>
                            <li><i class="bi bi-list flex-gap-style"></i></li>
                            <li> 
                              <img src={urbanlogo}  className="flex-gap-style" style={{width:'20px', height:'20px'}} alt="logo"/>
       </li>
                        </ul>
                     <ul className='mobile-container-right'>
                        <li><i class="bi bi-question-circle"></i></li>
                        <li><i class="bi bi-heart"></i></li>
                        <li><i class="bi bi-person-circle"></i></li>
                        <li><i class="bi bi-cart3"></i></li>
                        <li id="search-icon-mobile"><i class="bi bi-search"></i></li>
                    </ul>
                </div>
                
               

                
              
            </div>

            <div className='page-links-container d-none d-md-block'>
            <div className='ullist-container d-flex justify-content-between'>
            
        <ul className=' first-ul d-flex flex-start'>
                <li className='px-2 d-flex align-items-center'><i class="bi bi-question-circle" style={{paddingRight:'4px',paddingTop:'10px'}}></i><span className='span-styles-top-links'>Help</span></li>
                <li className='px-2 d-flex align-items-center'><img src={trackorder} style={{width:'24px',height:'29px',paddingRight:'4px', paddingTop:'10px'}}></img><span className='span-styles-top-links'>Track Order</span></li>
            </ul>
            
            <ul className=' second-ul d-flex '>{/*ms-auto margin start auto for pushing to end side*/}
                <li className='px-2 d-flex align-items-center'><span className='span-styles-top-links'>Find a Store</span></li>
                <li className='px-2 d-flex align-items-center'>
              <span className='span-styles-top-links'>  Bulk Orders</span>
                </li>
                <li className='px-2 d-flex align-items-center'><span className='span-styles-top-links'>Gift Cards</span></li>
                <li className='px-2 d-flex align-items-center'><span className='span-styles-top-links'>UL Services</span></li>
            </ul>
       
            
        </div>
        </div>
        <div className='section-container'>
            <div className='d-flex flex-row section-1'>
        <section className='d-none d-md-flex'>
        <figure id="always-visible-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="37" viewBox="0 0 50 37" 
         id="hide-svg" class="logo-with-gradient">
    <defs>
      <linearGradient id="a" x1="0%" y1="50%" y2="50%">
        <stop offset="0%" stop-color="#EC8523"></stop>
        <stop offset="35%" stop-color="#ED7745"></stop>
        <stop offset="37%" stop-color="#ED7545"></stop>
        <stop offset="76%" stop-color="#E95D47"></stop>
        <stop offset="100%" stop-color="#E85448"></stop>
      </linearGradient>
    </defs>
    <polygon fill="url(#a)" fill-rule="evenodd" points="0 0 0 36.201 33.604 36.201 33.604 31.948 4.359 31.948 4.359 4.253 45.641 4.253 45.641 36.201 50 36.201 50 0"></polygon>
    </svg>
            
       

<svg xmlns="http://www.w3.org/2000/svg" width="213" height="107" viewBox="0 0 213 107" 
 id = "sv-logo-desktop" class="logo-text">
  <g fill="#2F4858">
    <path d="M20.28 46.3C8.68 46.3 0 39.6 0 24.68V.93h9.1V24.4c0 9.5 4.12 14.2 11.32 14.2s11.3-4.7 11.3-14.2V.9h8.76v23.7c0 14.9-8.6 21.6-20.2 21.6v.1zm37.46-18.6v17.35h-8.52v-31.8h7.8l.37 5.8c1.8-3.66 6.4-6.68 11.8-6.68v8.3c-5.8-1.35-11.5 1.6-11.5 7.03zM93.9 45.93c-4.5 0-9.2-2.06-11.83-5.95l-.3 5.07h-7.7V.93h8.5v16.7c2.8-3.38 6.96-5.3 11.33-5.23 8.58 0 14.9 7.2 14.9 16.77 0 9.55-6.3 16.76-14.9 16.76zm-2.65-27.2c-5 0-9.03 3.9-9.03 10.44 0 6.55 4.04 10.45 9.03 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.04-10.44-9.03-10.44zm49.3 26.32l-.3-5.07c-2.65 3.9-7.35 5.95-11.83 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.48 0 9.18 2.06 11.83 5.96l.3-5.08h7.7v31.77h-7.7zm-9.48-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.03-10.44-9.03-10.44zm48.56 26.32V27.48c0-6.18-2.14-8.24-6.02-8.24-4 0-8.4 3.68-8.4 8.1v17.72h-8.5v-31.8h7.8l.4 5.88c2.2-4.05 6.9-6.77 11.8-6.77 8.5 0 11.6 5.9 11.6 13.75v18.9h-8.5v.03h-.13zm-179.4 61V61.93h8.95v37.13h19.77v7H.23zm58.62 0l-.3-5.07c-2.63 3.9-7.33 5.95-11.82 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.5 0 9.2 2.06 11.83 5.96l.3-5.08h7.72v31.77h-7.72zm-9.47-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4-10.44-9-10.44zm50.76 26.32l-.3-5.07c-2.64 3.9-7.34 5.95-11.82 5.95-8.58 0-14.9-7.2-14.9-16.76 0-9.56 6.3-16.77 14.9-16.77 4.37-.07 8.53 1.85 11.3 5.22v-16.7h8.54v44.13h-7.72zm-9.5-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.03-10.44-9.03-10.44zm50.78 26.32l-.3-5.07c-2.64 3.9-7.34 5.95-11.83 5.95-8.6 0-15-7.2-15-16.76 0-9.56 6.3-16.77 14.9-16.77 4.4-.07 8.5 1.85 11.3 5.22v-16.7h8.5v44.13h-7.7.1zm-9.48-26.32c-5 0-9.04 3.9-9.04 10.44 0 6.55 4.04 10.45 9.04 10.45 5 0 9.03-3.9 9.03-10.45 0-6.55-4.02-10.44-9.02-10.44zm53.43 10.67H164.2c-.2 4.84 2.3 10.34 10.83 10.34 3.75-.1 7.37-1.4 10.3-3.75v6.1c-3.02 2.3-7.65 3.7-12.94 3.7-9.8 0-16.7-7.2-16.7-17 0-10.2 7.8-16.6 16-16.6 8.1 0 14.1 5 14.1 12.5 0 1.5-.2 3-.6 4.42l.13.24zM172 78.83c-3.58 0-6.7 2.06-7.42 7h13.6c.72-3.84-1.77-7-6.18-7zm29.53 9.87v17.35H193v-31.8h7.78l.37 5.8c1.83-3.66 6.43-6.68 11.83-6.68v8.3c-5.76-1.35-11.45 1.6-11.45 7.03z">
    </path>
  </g>
</svg>
        </figure>

        </section>
        <section className='second-part-section'>
         
            <div className=' div-custom'>
                
            <InputGroup className="">
            <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-box" style={{borderRight:'none'}}
        />
         <InputGroup.Text id="search-box" style={{backgroundColor:'transparent'}}><i class="bi bi-search"></i></InputGroup.Text>
      </InputGroup>
            </div>
           
        </section>
        <section className='third-container-section d-none d-md-block'>
            <div className='third-section'>
                <ul className=''>
                    <li><img src={trackorder} style={{width:'24px',height:'24px',paddingRight:'4px'}}></img></li>
                    <li> <i class="bi bi-person"></i></li>
                    <li><i class="bi bi-heart"></i></li>
                    <li> <i class="bi bi-cart"></i></li>
                </ul>
            </div>
        </section>
        </div>
        </div>


      <div className='w-100 d-none d-md-block'>
        <div className='navbar-container'>

            <nav className='main-navigation clearfix  navbar-expand-lg navbar '>
           
                <div id='top-navbar'>
                    <ul className='top-navbar d-flex justify-content-between'>
                        <li><span className='span-styles-links'>Deal Zone</span></li>
                        <li><span className='span-styles-links'>Sofas & Recliners</span></li>
                        <li><span className='span-styles-links'>Living</span></li>
                        <li><span className='span-styles-links'> Bedroom & Mattresses</span></li>
                        <li> <span className='span-styles-links'>Dining</span></li>
                        <li><span className='span-styles-links'>Storage Furniture</span></li>
                        <li><span className='span-styles-links'>Study</span></li>
                        <li><span className='span-styles-links'>Outdoor</span></li>
                        <li><span className='span-styles-links'>Lighting & Decor</span></li>
                        <li><span className='span-styles-links'>Interiors</span></li>
                        <li><span className='span-styles-links'>Trending</span></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
        </div>
        
        </div>
        
    )
}
export default NavbarComp;