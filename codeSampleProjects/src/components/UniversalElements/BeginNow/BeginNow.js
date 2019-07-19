import React from 'react'
import Link from 'gatsby-link'

import styles from './BeginNowStyles.module.css'

import Button4 from '../Buttons/Button4'

const BeginNow = () => (
    <div className={styles.beginNow}>
        <div className={styles.content}>
            <h4> Begin Now </h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit metus tortor, dictum ultrices metus vehicula vitae. Curabitur in congue nisl. Curabitur eu fermentum dui. Pellentesque bibendum nulla malesuada fermentum facilisis. Nunc tincidunt id lacus in auctor. Mauris id libero posuere, porttitor sem sit amet, placerat enim. Integer feugiat, massa eu fermentum eleifend, nunc metus fermentum odio, nec posuere diam orci ac mi. Aliquam diam leo, molestie a ante id, semper mollis nibh. Phasellus auctor augue ex, eu rutrum ex tempor et.
            </p>
            <div className={styles.btn_container}>
                <div className={styles.button}> 
                    <Button4
                        text="hello" />
                </div>
            </div>
            <div className={styles.btn_container}>
                <div className={styles.button}> 
                    <Button4
                        text="hello" />
                </div>
            </div>
            
            <div className={styles.expander}></div>
        </div>
    </div>
)

export default BeginNow
