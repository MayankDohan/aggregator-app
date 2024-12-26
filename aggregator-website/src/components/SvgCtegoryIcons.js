
import styles from  '../styles/icons.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export const Icon2 = ()=>{
    const navigate = useNavigate();

    const handleTenting = ()=>{
        navigate('/tentinglist')

    }
    return(
  <div className={`${styles.hoverDiv}`} onClick={handleTenting}>
<img className={`${styles.categoryIcon}`} src="https://www.ulcdn.net/media/Web-home-popular-categories/store_icon.png?1535694121"></img>
<span className={`${styles.spanTextMobile}`}> Tenting</span>
</div>
    )

}

export const Icon3 = ()=>{
    const navigate = useNavigate();
const  handleLinens = ()=>{
     navigate('/linens')
 }
 return(
   
    <div className={`${styles.hoverDiv}`} onClick={handleLinens}>
   <svg  viewBox="0 0 30 30"   className={`${styles.categoryIcon}`} fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4H7C5.34315 4 4 5.34315 4 7V13C4 14.6569 5.34315 16 7 16H16M15 4V8C15 8.55228 15.4477 9 16 9H20M15 4H15.1716C15.702 4 16.2107 4.21071 16.5858 4.58579L19.4142 7.41421C19.7893 7.78929 20 8.29799 20 8.82843V9M20 13V17C20 18.6569 18.6569 20 17 20H5C4.44772 20 4 19.5523 4 19V13M20 13H8M20 13V9" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<span className={`${styles.spanTextMobile}`} >Linens</span>
</div>
)
}

export const Icon1 = ()=>{
    const navigate = useNavigate();
   const  handleChairs = ()=>{
        navigate('/chairs')
    }
    return(

    <div className={`${styles.hoverDiv}`} onClick={handleChairs}>
   <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M20.3 22.5a.52.52 0 0 0 .2-.4v-.3a2.75 2.75 0 0 0-1.2-2.2v-7.1a1.32 1.32 0 0 0-1.3-1.3h-6.2a1.26 1.26 0 0 0-1.3 1.3v7.1a2.51 2.51 0 0 0-1.2 2.2v.3a.52.52 0 0 0 .2.4l-.8 7.1a.35.35 0 0 0 .4.4h.8a.66.66 0 0 0 .5-.4l1.7-7.1h5.8l1.7 7.1a.54.54 0 0 0 .5.4h.8a.35.35 0 0 0 .4-.4zm-.12 6.7l-1.49-6.7h.9l.94 6.7h-.35zm-9-16.7a.47.47 0 0 1 .5-.5h6.2a.47.47 0 0 1 .5.5v6.8a1.31 1.31 0 0 0-.5-.1H11.7a.9.9 0 0 0-.5.1v-6.8zM9.75 29.2H9.5l.89-6.7h.9zm.15-7.5a1.77 1.77 0 0 1 1.8-1.7h6.2a1.84 1.84 0 0 1 1.8 1.7H9.9z"></path>
   </svg>
<span className={`${styles.spanTextMobile}`}  >Chairs</span>
</div>
)
}

export const Icon4 = ()=>(
    <div className={`${styles.hoverDiv}`}>
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M29 12H1a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5h1.5v14.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V19h11v8h12v2.5a.5.5 0 0 0 1 0V15H29a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-2.5 14h-11v-7h11v7zm0-8h-23v-3h23v3zm2-4h-27v-1h27v1z"></path><path d="M16.5 16.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5zM22.5 22.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5z"></path>
  </svg>
<span className={`${styles.spanTextMobile}`}>Tables</span>
</div>
)

export const Icon5 = ()=>(
    <div className={`${styles.hoverDiv}`}>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M24.73 23.1h-2.2v-1.6a1.5 1.5 0 0 0-1.6-1.5h-8.3l-4-5.9a3.8 3.8 0 0 0-5.2-1 .76.76 0 0 0-.2.4.37.37 0 0 0 .1.3l6.9 10.1V27a1.52 1.52 0 0 0 1.4 1.5v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h4.2v1a.47.47 0 0 0 .5.5h1.5a.47.47 0 0 0 .5-.5v-1h.1a1.51 1.51 0 0 0 1.5-1.3h3.7a.65.65 0 0 0 .6-.6v-1.5a1.91 1.91 0 0 0-2-2zM11 20.2a1.43 1.43 0 0 0-.7 1v1.11l-6-8.71a3.09 3.09 0 0 1 3.6 1l3.7 5.4a2 2 0 0 0-.6.2zm2.2 8.8h-.6v-.5h.64v.5zm6.7 0h-.59v-.5h.62v.5zm1.6-1.8a.55.55 0 0 1-.5.3h-9.2a.65.65 0 0 1-.6-.6v-4h10.3V27m.1-5H11.34v-.5a.51.51 0 0 1 .6-.5h9.2a.56.56 0 0 1 .6.5v.5h-.1zm4.3 4.2h-3.41V24h2.35a1.11 1.11 0 0 1 1.1 1.1v1.1z"></path>
</svg>
<span className={`${styles.spanTextMobile}`} >Glassware</span>
</div>
)

export const Icon6 = ()=>(
    <div className={`${styles.hoverDiv}`}>
   <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M27.5 19.4H27v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1h-.5A2.48 2.48 0 0 0 0 21.9v4a2.48 2.48 0 0 0 2.5 2.5h.2v1.1a.47.47 0 0 0 .5.5H5a.47.47 0 0 0 .5-.5v-1.1h19.2v1.1a.47.47 0 0 0 .5.5H27a.47.47 0 0 0 .5-.5v-1.1h.1a2.48 2.48 0 0 0 2.5-2.5v-4a2.63 2.63 0 0 0-2.6-2.5zM4 18.4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v1.5a2.61 2.61 0 0 0-1 2v1.5H5v-1.5a2.61 2.61 0 0 0-1-2v-1.5zM4.4 29h-.8v-.6h.8v.6zm22 0h-.8v-.6h.8v.6zm2.6-3.1a1.54 1.54 0 0 1-1.5 1.5h-25A1.54 1.54 0 0 1 1 25.9v-4a1.54 1.54 0 0 1 1.5-1.5A1.54 1.54 0 0 1 4 21.9v2a.47.47 0 0 0 .5.5h21a.47.47 0 0 0 .5-.5v-2a1.5 1.5 0 0 1 3 0v4z"></path><circle cx="8.6" cy="19.2" r=".4"></circle><circle cx="15" cy="19.2" r=".4"></circle><circle cx="21.4" cy="19.2" r=".4"></circle>
   </svg>

<span className={`${styles.spanTextMobile}`} >Lounge Furniture</span>


</div>
)

export const Icon7 = ()=>(
    <div className={`${styles.hoverDiv}`}>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M27 19.6H2.85a.47.47 0 0 0-.5.5v9.4a.47.47 0 0 0 .5.5h3.8a.47.47 0 0 0 .5-.5v-5.7h15.8v5.7a.47.47 0 0 0 .5.5h3.7a.47.47 0 0 0 .5-.5v-9.4a.77.77 0 0 0-.65-.5zm-.45 9.4h-2.7v-5.7a.47.47 0 0 0-.5-.5H6.65a.47.47 0 0 0-.5.5V29h-2.8v-8.4h23.2V29z"></path>
</svg>
<span className={`${styles.spanTextMobile}`} >Bars & Accessories</span>
</div>
)

export const Icon8 = ()=>(
    <div className={`${styles.hoverDiv}`}>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" className={`${styles.categoryIcon}`}><title>UL_CATEGORY_ICONS</title><path d="M29 12H1a.47.47 0 0 0-.5.5v2a.47.47 0 0 0 .5.5h1.5v14.5a.47.47 0 0 0 .5.5.47.47 0 0 0 .5-.5V19h11v8h12v2.5a.5.5 0 0 0 1 0V15H29a.47.47 0 0 0 .5-.5v-2a.47.47 0 0 0-.5-.5zm-2.5 14h-11v-7h11v7zm0-8h-23v-3h23v3zm2-4h-27v-1h27v1z"></path><path d="M16.5 16.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5zM22.5 22.5a.47.47 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.47.47 0 0 1 .5.5z"></path>
</svg>
<span className={`${styles.spanTextMobile}`}>Lighting</span>
</div>
  
)

export const Icon9 = ()=>(
    <div className='d-flex flex-column justify-content-center align-items-center hover-div'>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon">
    <title>UL_CATEGORY_ICONS</title><path d="M17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 8.2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-7.5-3.9l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm0 0l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zM9.5 10.1L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0 8l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm-2 .2l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zM17 22a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm0 0a.47.47 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.47.47 0 0 0-.5-.5zm-9.5-3.7l-.9-3.9A.49.49 0 0 0 6 14a.55.55 0 0 0-.4.6l.9 3.9a.55.55 0 0 0 .6.4.51.51 0 0 0 .4-.6zm2-.2l-1.6-3.6a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7zm0-8L7.9 6.5a.54.54 0 0 0-1 .4l1.6 3.7a.43.43 0 0 0 .7.2.55.55 0 0 0 .3-.7z"></path><path d="M24.5 3h-19a1 1 0 0 0-1 1v23a1 1 0 0 0 1 1h1v1.5a.5.5 0 0 0 1 0V28h15v1.5a.5.5 0 0 0 1 0V28h1a1 1 0 0 0 1-1V4a1.08 1.08 0 0 0-1-1zm-10 24h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7zm10 16h-9v-7h9v7zm0-8h-9v-7h9v7zm0-8h-9V4h9v7z"></path><path d="M7.2 10.9a.47.47 0 0 1-.6-.4l-.9-3.9a.47.47 0 0 1 .4-.6.47.47 0 0 1 .6.4l.9 3.9a.82.82 0 0 1-.4.6zM24.3 7l-1.6 3.7a.43.43 0 0 1-.7.2.55.55 0 0 1-.3-.7l1.6-3.7a.43.43 0 0 1 .7-.2.52.52 0 0 1 .3.7z"></path><path d="M22.9 7.5l-2.4 3.2a.5.5 0 1 1-.8-.6l2.4-3.2a.49.49 0 0 1 .7-.1.56.56 0 0 1 .1.7zM24.2 14.8l-1.6 3.7a.36.36 0 0 1-.6.2.61.61 0 0 1-.3-.7l1.6-3.7a.52.52 0 0 1 .7-.3.88.88 0 0 1 .2.8zM22.2 14.7l-.9 3.9a.51.51 0 0 1-1-.2l.9-3.9a.55.55 0 0 1 .6-.4.49.49 0 0 1 .4.6zM11.4 18.7a.49.49 0 0 1-.7-.1l-2.2-3.3a.62.62 0 0 1 .1-.7.49.49 0 0 1 .7.1l2.2 3.3a.47.47 0 0 1-.1.7zM13.5 22.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path>
</svg>
<span className={`${styles.spanTextMobile}`} >Wedding Decor</span>
</div>
   
)


export const Icon10 = ()=>(
    <div className='d-flex flex-column justify-content-center align-items-center hover-div'>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 30 30" class="category-icon"><title>UL_CATEGORY_ICONS</title><path d="M28.5 17h-27a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h19v1.5a.47.47 0 0 0 .5.5h2a.47.47 0 0 0 .5-.5V28h1a1 1 0 0 0 1-1v-9a1.08 1.08 0 0 0-1-1zm-24 12h-1v-1h1v1zm10-2h-13v-9h13v9zm12 2h-1v-1h1v1zm2-2h-13v-9h13v9z"></path><path d="M17.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0zM13.5 21.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0z"></path></svg>
    <span className='span-text-mobile'> Decorations</span>
    </div>

)

export const Icon11 = ()=>(
    <div className='d-flex flex-column justify-content-center align-items-center hover-div'>
<img class="category-icon" src="https://www.ulcdn.net/media/web-home-popular-categories/deal_zone_icon-15_Desktop.svg?1665149548"></img>
<span className='span-text-mobile'>Flatware</span>
</div>

)
export const Icon12 = ()=>(
    <div className='d-flex flex-column justify-content-center align-items-center hover-div'>
        
    <img class="category-icon" src="https://www.ulcdn.net/media/web-home-popular-categories/deal_zone_icon-15_Desktop.svg?1665149548"></img>
    <span className='span-text-mobile'>Miscellaneous</span>
    </div>
  
    
    )

    export const Icon13 = ()=>(
        <div className={`${styles.hoverDiv}`}>
        <FontAwesomeIcon icon={faAngleUp} style={{height:'30px',color:'#ED7745'}} className='mt-4' />
        <span className={`${styles.spanTextMobile}`}>Less</span>
        </div>
      
        
        )
     
    



