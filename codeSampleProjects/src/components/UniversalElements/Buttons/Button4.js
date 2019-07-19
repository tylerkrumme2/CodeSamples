import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button4 = props => (
        <div className={styles.btn4}>
            <p className={styles.btn4_p}>{props.text}</p>
        </div>
)

export default Button4;