import React from 'react'
import Link from 'gatsby-link'


import styles from './SmallFeatures.module.css'

const BeginNow = () => (
    <div className={styles.featuresSection}>

        <h4> 
        Platform Features 
        </h4>

        <div className={styles.features}>

            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Live Video Streaming 
                </h5>

                <p className={styles.text}> Go live from just about anywhere! our methods of capture allow you to use practically any encoder, even your phone. </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Scheduled Events Management
                </h5>

                <p className={styles.text}> Powerful Content Management! Search, find and manage media quickly using powerful organizational tools. </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Manage Video Assets
                </h5>

                <p className={styles.text}> Upload - Record Live - Edit video Add other associated media such as slides, images and documents and captions </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Cloud Video Editor
                </h5>

                <p className={styles.text}> Edit, trim and paste video segments together right in our online management interface. </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Live Event Automation
                </h5>

                <p className={styles.text}> Full automation.. schedule live broadcasts start and stop automatically </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Embed Video Channels
                </h5>

                <p className={styles.text}> Embed or share entire categories of event listings on your webpages, blog or social media sites </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>

                <div className={styles.graphic}></div>

                <h5> 
                Customizable Player
                </h5>

                <p className={styles.text}> Customize the look and feel of the video player and all of the amazing features that go along with your live or on-demand video </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>


            <div className={styles.feature}>
            
                <div className={styles.graphic}></div>

                <h5> 
                API
                </h5>

                <p className={styles.text}> The API is a powerful tool to use in designing and customizing your delivery application. </p>

                <div className={styles.fit}>
                    <Link to="#" style={{textDecoration: 'none'}}><p className={styles.link}>
                    Link
                    </p></Link>
                </div>
            </div>
            

            <div className={styles.expander}></div>

        </div>

    </div>
)

export default BeginNow
