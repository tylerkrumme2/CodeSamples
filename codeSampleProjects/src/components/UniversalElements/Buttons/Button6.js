import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button6 = props => (
        <div className={styles.btn6}>
            <p className={styles.btn6_p}>{props.text}</p>
        </div>
)

export default Button6;