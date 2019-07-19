import React from "react";
import Link from 'gatsby-link'

import styles from './FeatureSetStyles.module.css'
import Button3 from '../../UniversalElements/Buttons/Button3'
import Button4 from '../../UniversalElements/Buttons/Button3'




const Feature = props => (
    <div className={styles.feature}>
        <img src={props.imgFP} className={styles.graphic} />
        <h5>{props.name}</h5>
        <p className={styles.featureP}>{props.text}</p>

        
    </div>
)


class FeatureSet extends React.Component {
    constructor() {
        super()
        this.state = {
            showExtendedFeatures: false,
        }
    }

    render() {
        let extraContent;
        let btnText;

        if(!this.state.showExtendedFeatures) 
        {
            btnText = "Show More";
            extraContent = 
            <div className={styles.featureBarExpansion}></div>
        }
        else
        {
            extraContent=
            <div className={styles.featureBarExpansion}>
                <Feature 
                    imgFP="/download.jpg"
                    name="Name"
                    text="text"/>

                <Feature 
                    imgFP="/download.jpg"
                    name="Name"
                    text="text"/>

                <Feature 
                    imgFP="/download.jpg"
                    name="Name"
                    text="text"/>

                <Feature 
                    imgFP="/download.jpg"
                    name="Name"
                    text="text"/>
            </div>

            btnText = "Show Less";
        }



        return(
            <div className={styles.bg}>
                <div className={styles.banner}>
                    <h5> All Plans Include These Features: </h5>
                </div>
            
                <div className={styles.featureSet}>
                    <div className={styles.topFeatureBar}>
                        <Feature 
                            imgFP="/download.jpg"
                            name="Name"
                            text="text"/>

                        <Feature 
                            imgFP="/download.jpg"
                            name="Name"
                            text="text"/>

                        <Feature 
                            imgFP="/download.jpg"
                            name="Name"
                            text="text"/>

                        <Feature 
                            imgFP="/download.jpg"
                            name="Name"
                            text="text"/>

                    </div>

                    {extraContent}
                    

                    <div className={styles.expander}></div>

                    <div className={styles.fit} onClick={() => this.setState(prevState => ({showExtendedFeatures: !prevState.showExtendedFeatures}))}>
                        <Button4
                            text={btnText} />
                    </div>

                    


                </div>
            </div>
        )
    }
}

//onClick={() => this.setState(prevState => ({showQ6: !prevState.showQ6}))

export default FeatureSet;