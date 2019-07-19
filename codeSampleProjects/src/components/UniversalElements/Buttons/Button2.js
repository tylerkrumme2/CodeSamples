import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button2 = props => (
        <div className={styles.btn2}>
            <p className={styles.btn2_p}>{props.text}</p>
        </div>
)

export default Button2;