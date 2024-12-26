
import styles from '../styles/bgcolorgap.module.scss'
const ElementGap = ({applyMargin})=>{
    return(
        <div className={styles.gapElementStyle} style={applyMargin?{marginTop:'47px'}:{}}>
             
        </div>
    )
}

export default ElementGap;