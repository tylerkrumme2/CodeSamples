import React from 'react'
import Link from 'gatsby-link'
import Button1 from '../../UniversalElements/Buttons/Button1'
import Button2 from '../../UniversalElements/Buttons/Button2'

import styles from './PlanStylesv2.module.css'


const Plan = props => (
    <div className={styles.plan}>
        <div className={styles.col}></div>
        <div className={styles.content}>

            <div className={styles.titleBlock}>
                <h6> {props.name} </h6>
            </div>

            <div className={styles.mpBanner}><p>Most Popular</p></div>
            
            <p className={styles.desc}> {props.description} </p>
            <p className={styles.price}> ${props.price} </p>
            <p className={styles.subtext}>{props.subtext}</p>
            
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
                name="Standard"
                description="Plan Description Here"
                price="199/month"
                subtext="(paid anually)"
                btnText="Start a Free Trial" >

                <h4>Features: </h4>

                <ul>
                    <li>Unlimited Viewers</li>
                    <li>Unlimited Bandwidth</li>
                    <li>Powerful Streaming Analytics</li>
                    <li>Cloud Video Editing</li>
                    <li>Stream to Facebook and Twitter</li>
                    <li>Up to 10 hrs Live Streaming</li>
                    <li>Variable Bitrate encoding</li>
                </ul>
            </Plan>

            <Plan 
                name="Pro"
                description="Plan Description Here"
                price="499/month"
                subtext="(paid Anually)"
                btnText="Schedule a Demo">
                
                <h4>Features: </h4>

                <ul>
                    <li>Everything from Standard Plus</li>
                    <li>Live Moderated Chat</li>
                    <li>Advertising Manager</li>
                    <li>OTT Channel Management</li>
                    <li>Up to 50 hrs Live Streaming</li>
                    <li>Embedable Player</li>
                </ul>

            </Plan>

            <Plan 
                name="Enterprise"
                description="Enterprise Plans starting at:"
                price="999/month"
                subtext="(paid Anually)"
                btnText="Contact Us" />

            <div className={styles.expander}></div>
        </div>
        
    </div>
)

export default Plans