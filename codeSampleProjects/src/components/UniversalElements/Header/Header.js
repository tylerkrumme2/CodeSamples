import React from 'react'
import Link from 'gatsby-link'
import styles from './HeaderStyles.module.css'

const Header = () => (
    <div className={styles.header}>

        <div className={styles.upperHeader}>
            <Link to="#" className={styles.link}>Developers                             </Link>
            <Link to="#" className={styles.link}>Blog                                   </Link>
            <Link to="#" className={styles.link}>Go Live                                </Link>
            <Link to="#" className={styles.link}>Login                                  </Link>
            
            <div className={styles.expander}></div>
        </div>
        <div className={styles.hero}>
            <div className={styles.lowerHeader}>
                <Link to="/">
                <div className={styles.logo}>
                    <h4> Invintus </h4>
                </div>
                </Link>

                <div className={styles.primaryNav}>
                    <Link to="#" className={styles.navTitle}><p>
                    Features
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>

                        <div className={styles.spacer}></div>
                        <div className={styles.pointer}></div>

                        <div className={styles.container}>
                            <Link to="#" className={styles.hiddenNavItem}><div> Content Management </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Stream Analytics </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> VOD </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Video Transcription </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> SD eCDN </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Online Video Editor </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> OTT Delivery </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Moderated Chat </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Live Captioning </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Ad Management </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> API </div></Link>
                        </div>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="#" className={styles.navTitle}><p>
                    Clients
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>

                        <div className={styles.spacer}></div>
                        <div className={styles.pointer}></div>

                        <div className={styles.container}>
                            <Link to="/enterprise" className={styles.hiddenNavItem}><div> Enterprise Webcasting </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Government Webcasting </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Broadcast Streaming </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Nonprofit Webcasting </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Church Streaming </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Testimonials </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Case Studies </div></Link>
                        </div>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="#" className={styles.navTitle}><p>
                    Services
                    </p></Link>
                    
                    <div className={styles.hiddenNav}>

                        <div className={styles.spacer}></div>
                        <div className={styles.pointer}></div>

                        <div className={styles.container}>
                            <Link to="#" className={styles.hiddenNavItem}><div> Live Event Webcasting </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Live Captioning </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> AI Transcription </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> Mobile Application Building </div></Link>
                            <Link to="#" className={styles.hiddenNavItem}><div> OTT Applications </div></Link>
                        </div>

                        <div className={styles.extension}></div>
                    </div>
                </div>

                <div className={styles.primaryNav}>
                    <Link to="/pricing" className={styles.navTitle}><p>
                    Pricing
                    </p></Link>
                    
                </div>

                <div className={styles.secondaryNav}>

                    <div className={styles.btnPlaceholder}>
                        Sign Up
                    </div>

                    <div className={styles.primaryNav}>
                        <Link to="#" className={styles.navTitle}><p>
                        Resources
                        </p></Link>
                        
                        <div className={styles.hiddenNav}>

                            <div className={styles.spacer}></div>
                            <div className={styles.pointer}></div>

                            <div className={styles.container}>
                                <Link to="#" className={styles.hiddenNavItem}><div> Blog </div></Link>
                                <Link to="#" className={styles.hiddenNavItem}><div> Webinars </div></Link>
                                <Link to="#" className={styles.hiddenNavItem}><div> Get Started </div></Link>
                                <Link to="#" className={styles.hiddenNavItem}><div> How-To Videos </div></Link>
                            </div>

                            <div className={styles.extension}></div>
                        </div>
                    </div>

                </div>

                <div className={styles.expander}></div>
            </div>
        </div>
    </div>
)

export default Header
