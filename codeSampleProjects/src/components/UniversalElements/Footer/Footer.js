import React from 'react'
import Link from 'gatsby-link'

import styles from './FooterStyles.module.css'

const Footer = () => (
    <div className={styles.footer}>

        <div className={styles.upperFooter}>

            <div className={styles.navLinks}>

                <div className={styles.navLink}>

                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Platform
                    </h4></Link>

                    <Link to="#" className={styles.link}>Content Management                     </Link><br />
                    <Link to="#" className={styles.link}>Stream Analytics                       </Link><br />
                    <Link to="#" className={styles.link}>VOD                                    </Link><br />
                    <Link to="#" className={styles.link}>AI Transcription                       </Link><br />
                    <Link to="#" className={styles.link}>SD ECD                                 </Link><br />
                    <Link to="#" className={styles.link}>Online Video Editor                    </Link><br />
                    <Link to="#" className={styles.link}>OTT Delivery                           </Link><br />
                    <Link to="#" className={styles.link}>Moderated Chat                         </Link><br />
                    <Link to="#" className={styles.link}>Live Captioning                        </Link><br />
                    <Link to="#" className={styles.link}>Ad Management                          </Link><br />
                    <Link to="#" className={styles.link}>API                                    </Link><br />
                </div>

                <div className={styles.navLink}>

                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Services
                    </h4></Link>

                    <Link to="#" className={styles.link}>Live Event Webcasting                  </Link><br />
                    <Link to="#" className={styles.link}>Live Captioning                        </Link><br />
                    <Link to="#" className={styles.link}>AI Transcription                       </Link><br />
                    <Link to="#" className={styles.link}>Mobile App Building                    </Link><br />


                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Resources
                    </h4></Link>

                    <Link to="#" className={styles.link}>Blog                                   </Link><br />
                    <Link to="#" className={styles.link}>Webinars                               </Link><br />
                    <Link to="#" className={styles.link}>Get Started                            </Link><br />
                    <Link to="#" className={styles.link}>How-To Videos                          </Link><br />
                </div>

                <div className={styles.navLink}>

                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    About
                    </h4></Link>

                    <Link to="#" className={styles.link}>Careers                                </Link><br />
                    <Link to="#" className={styles.link}>News                                   </Link><br />
                    <Link to="#" className={styles.link}>Partners                               </Link><br />
                    <Link to="#" className={styles.link}>Events                                 </Link><br />
                    <Link to="#" className={styles.link}>Contact                                </Link><br />
                    
                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Support
                    </h4></Link>

                    <Link to="#" className={styles.link}>Contact Support                        </Link><br />
                    <Link to="#" className={styles.link}>Forum                                  </Link><br />
                    <Link to="#" className={styles.link}>Developers                             </Link><br />
                </div>
            </div>

            <div className={styles.sectionRight}>

                <div className={styles.location}>

                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Contact Us
                    </h4></Link>

                    <p>Invintus Media, Inc.     </p>
                    <p>1058 Capiton Way South   </p>
                    <p>Olympia, WA (98501)      </p>
                    <p>(360) 555-5555           </p>

                </div>

                <div className={styles.memberOrgs}>
                    <Link to="#" className={styles.link}><h4 className={styles.navLinkHeader}>
                    Member Organizations
                    </h4></Link>

                    <div className={styles.logoContainer}>
                        <p>Org Logos Go Here.</p>
                    </div>
                    
                </div>

            </div>

            <div className={styles.expander}></div>
            
        </div>
        
        <div className={styles.lowerFooterArea}>
            <div className={styles.lowerFooterContentArea}>
                <div className={styles.lowerFooterLeft}>
                    <Link to="#" className={styles.lowerLink}>Trademark                              </Link>
                    <Link to="#" className={styles.lowerLink}>Service Status                         </Link>
                    <Link to="#" className={styles.lowerLink}>Privacy Policy                         </Link>
                    <Link to="#" className={styles.lowerLink}>Terms of Use                           </Link>
                </div>
                <div className={styles.socialMedia}>
                    <a href="https://www.linkedin.com/" target="_blank"><img src="/img/logo-linkedin-web.png" /></a>
                    <a href="https://www.facebook.com/" target="_blank"><img src="/img/logo-facebook-web.svg" /></a>
                    <a href="https://www.twitter.com/" target="_blank"><img src="/img/logo-twitter-web.svg" /></a>
                </div>
                <div className={styles.expander}></div>
            </div>
        </div>

    </div>
)

export default Footer
