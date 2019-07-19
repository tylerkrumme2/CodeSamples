import React from 'react'
import Link from 'gatsby-link'

import styles from './ButtonStyles.module.css'

const Button3 = props => (
        <div className={styles.btn3}>
            <p className={styles.btn3_p}>{props.text}</p>
        </div>
)

export default Button3;