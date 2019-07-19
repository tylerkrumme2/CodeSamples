import React from 'react'
import Link from 'gatsby-link'

import styles from './BannerStyles.module.css'

const Intro = props => (

    <div className={styles.banner}>
        <div className={styles.content}>
            <h4 className={styles.bannerText}>{props.text}</h4>
            <Link to={props.link} className={styles.link}>
                <h4 className={styles.linkText}>{props.linkText}</h4>
            </Link>
        </div>
    </div>

)

export default Intro