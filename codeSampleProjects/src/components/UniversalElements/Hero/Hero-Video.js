import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeroVideoStyles.module.css'

/**
 * 
 * @param {} props 
 */
const Hero = props => (
    <div className={styles.background} style={{ backgroundImage: `url(${props.bgFilePath})`}}>
        <div className={styles.wrap}>
            <video autoPlay muted loop className={styles.video}>
                <source src={props.bgFilePath} type="video/mp4" />
            </video>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
        
        
        <div className={styles.expander}></div>
    </div>
)

/*
        <div className={styles.overlay}>
            <div className={styles.contentWrap}>
                <div className={styles.children}>
                    {props.children}
                </div>
            </div>
        </div>
*/

// <div style={{ backgroundImage: `url(${props.imgFilePath})`}}>

export default Hero
