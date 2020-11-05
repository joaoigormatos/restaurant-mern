import React from 'react'
import styles from './SideImageHeader.module.css'
const SideImageHeader = ({imageRef, imageAlt})=>{
    return (
        
        <div className={styles.container} >
           
            <img  className={styles.imageFit} src={imageRef} alt={imageAlt}/>
            {/* <span className={styles.mainTextHeader}>StarFood</span> */}

        </div>
    )
}

export default SideImageHeader;