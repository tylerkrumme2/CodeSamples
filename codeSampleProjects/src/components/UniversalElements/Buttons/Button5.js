import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button5 = props => (
        <div className={styles.btn5}>
            <p className={styles.btn5_p}>{props.text}</p>
        </div>
)

export default Button5;