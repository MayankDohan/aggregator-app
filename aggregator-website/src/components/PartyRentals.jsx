import BandshellTents from '../uranladderimages/Tenting pics/bandshell-tents.jpg'
import BandshellCategory from '../uranladderimages/Tenting pics/Bandshell-category.jpg'
import FoodBooth from '../uranladderimages/Tenting pics/food-booth.jpg'
import FoodCategory from '../uranladderimages/Tenting pics/food-boot-category.jpg'
import { useLocation } from 'react-router-dom'
import ElementGap from './ElementGap'
import styles from '../styles/partrentals.module.scss'

const PartyRentals = ()=>{
    const location = useLocation();
    const partyData = {
        bandshells:{
            title:"What is a Bandshell?",
            bannerImg: BandshellTents,
            content:"Bandshells are designed specifically for outdoor performances and events requiring a stage cover. These tents feature a semi-circular, shell-like structure that provides excellent acoustics and visibility for both performers and audiences. The design focuses on creating a sheltered, acoustically optimized area for performances.",
            middleImg:BandshellCategory
           
        },
        foodBooth:{
            title:"What is a Food Booth Tent?",
            bannerImg: FoodBooth,
            content:"Food booth tents are smaller, functional tents specifically designed for food service operations. These tents often include features like serving counters, ventilation, and areas for food preparation. They are typically made from durable, water-resistant materials that can withstand the demands of a busy food service environment.",
            middleImg:FoodCategory
           
        }
    }
  const CategoryData =   location.pathname ==='/tent-rentals/bandshells'?partyData.bandshells:partyData.foodBooth
    return(
            <div className='container d-flex flex-column  justify-content-center align-items-center'>
                <div className={` ${styles.rootHeading}`}>
                    <span>{CategoryData.title}</span></div>
                <div className={`${styles.bannerImage} my-2 py-2`}>
                    <img src={CategoryData.bannerImg}  className={`${styles.imgStyle}`} alt='tent-rentals'></img>
                </div>
                <div className={`${styles.contentP} my-1 py-2`}>
                    <p>{CategoryData.content}</p>
                </div>
                
                    <div className={`${styles.bottomImage} mt-2`}>
                        <img src={CategoryData.middleImg} className={`${styles.imgStyle}`} alt='tent-rentals'></img>
                    
                </div>
                <ElementGap applyMargin={false}/>
            </div>
    )
}

export default PartyRentals;