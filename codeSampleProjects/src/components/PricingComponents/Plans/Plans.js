import React from 'react'
import Link from 'gatsby-link'
import Button1 from '../../UniversalElements/Buttons/Button1'
import Button2 from '../../UniversalElements/Buttons/Button2'

import styles from './PlanStyles.module.css'


const Plan = props => (
    <div className={styles.plan}>
        <div className={styles.col}></div>
        <div className={styles.content}>

            <div className={styles.titleBlock}>
                <h6> {props.name} </h6>
            </div>

            <div className={styles.mpBanner}><p>Most Popular</p></div>
            
            <p> {props.description} </p>
            <p> ${props.price} </p>
            
            <Button2
                text={props.btnText} />

            <div className={styles.extraContent}>
            {props.children}
            </div>

        </div>

        <div className={styles.colRight}></div>
        
        <div className={styles.bottomShadow}>
            <div className={styles.bottomCol}></div>
            <div className={styles.bottomMiddleCol}></div>
            <div className={styles.bottomColRight}></div>
        </div>

    </div>
)

const Plans = () => (
    <div className={styles.plans}>
        <div className={styles.topBar}>
            <h1> Find the plan that fits you best </h1>
            <div className={styles.fit}>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button1
                        text="Compare Plans" />
                </Link>
            </div>
        </div>

        <div className={styles.planContainer}>

            <Plan 
                name="Free Trial"
                description="Plan Description Here"
                price="Price"
                btnText="Start a Free Trial" >

                <p>Paragraph about Free Trial Here</p>
            </Plan>

            <Plan 
                name="Standard"
                description="Plan Description Here"
                price="Price"
                btnText="Start a Free Trial" >

                <h4>Bandwidth: </h4>

                <ul>
                    <li>Stream Data: 500GB</li>
                    <li>Storage: 300GB</li>
                    <li>Overage: $.30 per GB</li>
                </ul>

                <h4>Features: </h4>

                <ul>
                    <li>API Access: Yes</li>
                    <li>24/7 Stream: No</li>
                    <li>Adaptive Bitrate</li>
                    <li>Ad-free</li>
                    <li>Ad-insertion</li>
                </ul>
            </Plan>

            <Plan 
                name="Pro"
                description="Plan Description Here"
                price="Price"
                btnText="Start a Free Trial" />

            <Plan 
                name="Enterprise"
                description="Plan Description Here"
                price="Price"
                btnText="Start a Free Trial" />

            <div className={styles.expander}></div>
        </div>
        
    </div>
)

export default Plans