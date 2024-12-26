import BandshellTent from '../uranladderimages/Tenting pics/bandshell-tents.jpg'
import FoodBooth from '../uranladderimages/Tenting pics/food-booth.jpg'
import ClearChair from '../uranladderimages/Chairs/Clear-Coupe-Chair-RC8227.jpg'
import Arcadia from '../uranladderimages/Chairs/ArcadiaChairs.jpg'
import Barstool from '../uranladderimages/Chairs/acrylic-and-chrome-barstool.jpg'
import styles from '../styles/productdetails.module.scss'
import ProductDescFooter from './ProductDescFooter'
import {useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import ElementGap from './ElementGap'
import { useSelector } from 'react-redux'

const ProductDetails = ()=>{
    const {category,id} = useParams()
    

    const products = [
        {category:"tenting",id:1, name:"Bandshells" , price:500,description:"Outdoor performances and Events"
        ,type:"Stage Cover", capacity: "Large/Meduim/Small", img:BandshellTent
    },
    {category:"tenting",id:2, name:"Food Booth",price:100,description:"Designed For Food Service Operations",type:"Outdoor",
        capacity: "Large/Meduim/Small", img:FoodBooth
    },
    {category:"chair", id:3, name:"Clear Coupe Chair" ,sku:"8227", dimensions: '25"L x 23"W x 22H"' ,color:"White",price:52.00,img:ClearChair},
    {category:"chair", id:2, name: "Arcadia Chair",sku:"8791", description: "Indoor and Outdoor Use",color:"Brown", price:150.00, img:Arcadia},
    {category:"chair", id:1, name: " Acrylic and Chrome Barstool", sku:"87788", height: `26"`,color:"White Opaque", price:55.00,img:Barstool},
]

const productDetails = products.find(p=>p.category===category&&p.id===parseInt(id))

const[productState] = useState(productDetails);

    let Product;
    if(category==="tenting"){

        Product =   <ul className={`${styles.ulList}`}>
                            
                            <li><span className={`${styles.listSpan}`}>Description </span>
                            <span className={`${styles.listSpan2}`}>: {productState.description}</span></li>
                             <li><span className={`${styles.listSpan}`}>Type</span>
                             <span className={`${styles.listSpan2}`}>: {productState.type}</span></li>
                             <li><span className={`${styles.listSpan}`}>Capacity</span>
                             <span className={`${styles.listSpan2}`}>: {productState.capacity}</span></li>
                            
        </ul>
       
    }
    else if(category==='chair'){
        Product = (<>
        
          {productState.dimensions&&(
            
            <ul className={`${styles.ulList}`}>
            <li><span className={`${styles.listSpan}`}>Sku</span>
            <span className={`${styles.listSpan2}`}>: {productState.sku}</span></li>
            <li><span className={`${styles.listSpan}`}>Dimensions</span>
            <span className={`${styles.listSpan2}`}>: {productState.dimensions}</span></li>
            <li><span className={`${styles.listSpan}`}>Color</span>
            <span className={`${styles.listSpan2}`}>: {productState.color}</span></li>
            </ul>
    )}
          {productState.description&&(
            <ul className={`${styles.ulList}`}>
            <li><span className={`${styles.listSpan}`}>Sku</span>
            <span className={`${styles.listSpan2}`}>: {productState.sku}</span></li>
            <li><span className={`${styles.listSpan}`}>Description</span>
            <span className={`${styles.listSpan2}`}>: {productState.description}</span></li>
            <li><span className={`${styles.listSpan}`}>Color</span>
            <span className={`${styles.listSpan2}`}>: {productState.color}</span></li>
            </ul>)}
          {productState.height&&
            (
                <ul className={`${styles.ulList}`}>
                    <li><span className={`${styles.listSpan}`}>Sku</span>
                    <span className={`${styles.listSpan2}`}>: {productState.sku}</span></li>
                    <li><span className={`${styles.listSpan}`}>Height</span> 
                    <span className={`${styles.listSpan2}`}>: {productState.height}</span></li>
                    <li><span className={`${styles.listSpan}`}>Color</span>
                        <span className={`${styles.listSpan2}`}>: {productState.color}</span></li>
                </ul>
            )
          }
         </> )
        
    }
    return(

    
      <>
            <div className={`${styles.imageContainer}`} >
                <div className={`${styles.imageWrapper} `}>
                    <img  className={styles.productDescriptionImg} src={productState.img} alt='tent/'></img>
                    </div>
             
            </div>
            <div className='container'>
                <div className={`${styles.productName} py-2`}>
                <span className={`${styles.spanHeading} `} >{productState.name}</span>
                <span className={`${styles.spanSubHeading} my-2`}>By Party Rental</span>
                </div>
                </div>
                <ElementGap applyMargin={false}/>
                <div className='container py-2'> 
                    <div className={`${styles.productDetailsContainer} `}>
                        <span className={`${styles.productDetailsHeading} mb-2`}>Product Details</span>
                     {Product}
                    </div>
                </div>
             <ProductDescFooter price={productState.price} productState={productState}/>
            </>
        

       
    )
}

export default ProductDetails;