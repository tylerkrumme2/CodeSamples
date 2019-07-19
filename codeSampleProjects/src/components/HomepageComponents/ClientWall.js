import React from 'react'
import Link from 'gatsby-link'

import styles from './hpStyles.module.css'

const ClientWall = () => (
    <div className={styles.clientWall}>
        <div className={styles.cwBanner}>
            <h4> Organizations Trust Their Streaming with Invintus </h4>
        </div>

        <div className={styles.orgs}>
            <div className={styles.orgItem}>
                <a href="http://cityoffife.org/" target="_blank">
                    <img src='/img/logo-FIFE.png' />
                </a>
            </div>

            <div className={styles.orgItem}>
                <a href="https://www.dol.wa.gov/" target="_blank">
                    <img src='/img/logo-DOL.png' />
                </a>
            </div>

            <div className={styles.orgItem}>
                <a href="https://www.tvw.org/" target="_blank">
                    <img src='/img/logo-TVW.png' />
                </a>
            </div>

            <div className={styles.orgItem}>
                <a href="https://www.providence.org/" target="_blank">
                    <img src='/img/logo-PMG.png' />
                </a>
            </div>

            <div className={styles.orgItem}>
                <a href="https://thefloridachannel.org/" target="_blank">
                    <img src='/img/logo-TFC.png' />
                </a>
            </div>
            
            <div className={styles.orgItem}>
                <a href="https://www.eac.gov/" target="_blank">
                    <img src='/img/logo-EACUSA.png' />
                </a>
            </div>
        </div>
        <div className={styles.expander}></div>
    </div>
)

export default ClientWall