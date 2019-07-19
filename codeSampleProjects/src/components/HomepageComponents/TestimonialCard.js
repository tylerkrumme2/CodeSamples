import React from 'react'

import styles from './TestimonialCardStyles.module.css'
/**
 * 
 * @props
 * @imgFP: filepath to image
 * @topText: text for speaker name
 * @bottomText: text for company name, pos at company, date
 * @quote: quote text
 * @stat1: stat1 text
 * @stat2: stat2 text
 * @stat3: stat3 text
 *  
 */

const TestimonialCard = props => (
    <div className={styles.card}>
        <div className={styles.content}>
            <div className={styles.topContent}>
                <div className={styles.avatar} style={{ backgroundImage: `url(${props.imgFP})`}}></div>
                <div className={styles.titleBar}>
                    <h4>{props.topText}</h4>
                    <p>{props.bottomText}</p>
                </div>
            </div>
            <div className={styles.bottomContent}>
                <p>{props.quote}</p>
            </div>
        </div>
        <div className={styles.expander}></div>
    </div>
)

export default TestimonialCard  