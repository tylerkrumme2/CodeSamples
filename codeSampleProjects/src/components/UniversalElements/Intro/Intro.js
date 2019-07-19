import React from 'react'

import styles from './IntroStyles.module.css'

const Intro = props => (

    <div className={styles.contentArea}>
        <h2> {props.header} </h2>
        <p> {props.content} </p>
    </div>

)

export default Intro