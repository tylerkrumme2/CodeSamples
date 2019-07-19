import React from 'react'
import Link from 'gatsby-link'
import styles from './Header2.module.css'

import Button4 from '../Buttons/Button4'
import Button5 from '../Buttons/Button5'

const Header = () => (
    <div className={styles.header}>
        <div className={styles.hero}>
            <div className={styles.lowerHeader}>
                <Link to="/">
                    <div className={styles.logo}>
                        <img src="/img/logo-invintus-web_2.png" />
                    </div>
                </Link>

                

                <div className={styles.primaryNav}>
                    <Link to="/features/overview" className={styles.navTitle}><p>
                    Features
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>
                        <div className={styles.containter}>
                            <div className={styles.colLeft}>
                                <Link to="/features/contentManagement" className={styles.hiddenNavItem}><div> Content Management </div></Link>
                                <Link to="/features/streamAnalytics" className={styles.hiddenNavItem}><div> Stream Analytics </div></Link>
                                <Link to="/features/vod" className={styles.hiddenNavItem}><div> VOD </div></Link>
                                <Link to="/features/videoTranscription" className={styles.hiddenNavItem}><div> Video Transcription </div></Link>
                                <Link to="/features/sdecdn" className={styles.hiddenNavItem}><div> SD eCDN </div></Link>
                                <Link to="/features/onlineVideoEditing" className={styles.hiddenNavItem}><div> Online Video Editor </div></Link>
                                <div className={styles.expander}></div>
                            </div>
                            <div className={styles.colRight}>
                                <Link to="/features/ottDelivery" className={styles.hiddenNavItem}><div> OTT Delivery </div></Link>
                                <Link to="/features/moderatedChat" className={styles.hiddenNavItem}><div> Moderated Chat </div></Link>
                                <Link to="/features/liveCaptioning" className={styles.hiddenNavItem}><div> Live Captioning </div></Link>
                                <Link to="/features/adManagement" className={styles.hiddenNavItem}><div> Ad Management </div></Link>
                                <Link to="/features/api" className={styles.hiddenNavItem}><div> API </div></Link>
                                <div className={styles.expander}></div>
                            </div>
                        </div>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="#" className={styles.navTitle}><p>
                    Clients
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>

                        <Link to="/clients/enterprise" className={styles.hiddenNavItem}><div> Enterprise Webcasting </div></Link>
                        <Link to="/clients/government" className={styles.hiddenNavItem}><div> Government Webcasting </div></Link>
                        <Link to="/clients/broadcast" className={styles.hiddenNavItem}><div> Broadcast Streaming </div></Link>
                        <Link to="/clients/nonprofit" className={styles.hiddenNavItem}><div> Nonprofit Webcasting </div></Link>
                        <Link to="/clients/church" className={styles.hiddenNavItem}><div> Church Streaming </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> Testimonials </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> Case Studies </div></Link>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="#" className={styles.navTitle}><p>
                    Services
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>

                        <Link to="#" className={styles.hiddenNavItem}><div> Live Event Webcasting </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> Live Captioning </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> AI Transcription </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> Mobile Application Building </div></Link>
                        <Link to="#" className={styles.hiddenNavItem}><div> OTT Applications </div></Link>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="/pricingv2" className={styles.navTitle}><p>
                    Pricing
                    </p></Link>
                    
                </div>

                <div className={styles.primaryNav}>
                        <Link to="#" className={styles.navTitle}><p>
                        Resources
                        </p></Link>
                        
                        <div className={styles.hiddenNav}>

                            <Link to="#" className={styles.hiddenNavItem}><div> Blog </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Webinars </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Get Started </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> How-To Videos </div></Link>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.secondaryNav}>
                
                    
                    <div className={styles.btn}>
                        
                            <Button5 className={styles.btn}
                                text="Log In" />
                        
                    </div>
                    
                    <Link to="/pricing" style={{textDecoration: 'none'}}>
                        <div className={styles.btn}>
                            <Button4 
                                text="Sign Up" />
                        </div>
                    </Link>
                </div>

                <div className={styles.expander}></div>
            </div>
        </div>
    </div>
)

export default Header
