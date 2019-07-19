import React from 'react'
import Link from 'gatsby-link'

import styles from './OtherServicesStyles.module.css'

const OtherServices = () => (
    <div className={styles.otherServices}>

        <div className={styles.titleBlock}>

            <h4><Link to="#" className={styles.link}>  
            Other Services
            </Link></h4>

        </div>

        <div className={styles.linkContainer}>

            <Link to="#" className={styles.link}><div className={styles.linkBox}>
                <div className={styles.overlay}>
                    <h5> AI Transcription </h5>
                    <p>
                    Quisque et viverra eros. Curabitur suscipit convallis dolor quis egestas. Sed ut euismod risus, a placerat lacus. Nam diam diam, ornare vitae tortor vel, efficitur tempor eros. Nulla euismod vehicula sem, vel ultricies ex porttitor eget.
                    </p>
                </div>
            </div></Link>

            <Link to="#" className={styles.link}><div className={styles.linkBox}>
                <div className={styles.overlay}>
                    <h5> Live Captioning </h5>
                    <p>
                    Quisque et viverra eros. Curabitur suscipit convallis dolor quis egestas. Sed ut euismod risus, a placerat lacus. Nam diam diam, ornare vitae tortor vel, efficitur tempor eros. Nulla euismod vehicula sem, vel ultricies ex porttitor eget.
                    </p>
                </div>
            </div></Link>

            <Link to="#" className={styles.link}><div className={styles.linkBox}>
                <div className={styles.overlay}>
                    <h5> Production Services </h5>
                    <p>
                    Quisque et viverra eros. Curabitur suscipit convallis dolor quis egestas. Sed ut euismod risus, a placerat lacus. Nam diam diam, ornare vitae tortor vel, efficitur tempor eros. Nulla euismod vehicula sem, vel ultricies ex porttitor eget.
                    </p>
                </div>
            </div></Link>
            <div className={styles.expander}></div>
        </div>

    </div>
)

export default OtherServices
