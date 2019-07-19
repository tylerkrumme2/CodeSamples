import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button1 = props => (
        <div className={styles.btn1}>
            <p className={styles.btn1_p}>{props.text}</p>
        </div>
)

export default Button1;