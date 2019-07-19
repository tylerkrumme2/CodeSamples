import React from 'react'
import Link from 'gatsby-link'
import Button1 from '../Buttons/Button1'

import styles from './BoilerPlateStyles.module.css'

const BoilerLeftImg = props => (
    <div className={styles.boilerPlate}>

        <img src={props.imgFP} className={styles.img_left}/>

        <div className={styles.contentArea_left}>
            <h2> Boiler Plate With Button </h2>
            <p> Quisque et viverra eros. Curabitur suscipit convallis dolor quis egestas. Sed ut euismod risus, a placerat lacus. Nam diam diam, ornare vitae tortor vel, efficitur tempor eros. Nulla euismod vehicula sem, vel ultricies ex porttitor eget. Mauris nisi lectus, rhoncus a egestas nec, sodales non odio. Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie. </p>
            <div style={{width: 'fit-content'}}>
            <Link to="/" style={{textDecoration: 'none'}}>
                <Button1
                text="See more" />
            </Link>
            </div>
        </div>
        
        <div className={styles.expander}></div>

    </div> 
)

export default BoilerLeftImg