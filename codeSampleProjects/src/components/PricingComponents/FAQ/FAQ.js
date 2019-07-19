import React from "react";

import styles from './FAQStyles.module.css'

class FAQ extends React.Component {
    constructor() {
        super()
        this.state = {
            showQ1: false,
            showQ2: false,
            showQ3: false,
            showQ4: false,
            showQ5: false,
            showQ6: false,
        }
    }

    render() {
        let answer1;
        let answer2;
        let answer3;
        let answer4;
        let answer5;
        let answer6;



        if(this.state.showQ1) {
            answer1=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer1 = <div className={styles.answer_hidden}> </div> }


        if(this.state.showQ2) {
            answer2=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer2 = <div className={styles.answer_hidden}> </div> }


        if(this.state.showQ3) {
            answer3=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer3 = <div className={styles.answer_hidden}> </div> }


        if(this.state.showQ4) {
            answer4=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer4 = <div className={styles.answer_hidden}> </div> }


        if(this.state.showQ5) {
            answer5=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer5 = <div className={styles.answer_hidden}> </div> }


        if(this.state.showQ6) {
            answer6=
            <div className={styles.answer_shown}>
                    <p>Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie.</p>
            </div>

        } else { answer6 = <div className={styles.answer_hidden}></div> }



        return(
            <div className={styles.FAQ}>
                <h4>FAQ</h4>

                <div className={styles.column}>
                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ1: !prevState.showQ1}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer1}
                    </div>

                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ2: !prevState.showQ2}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer2}
                    </div>

                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ3: !prevState.showQ3}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer3}
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ4: !prevState.showQ4}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer4}
                    </div>
                    
                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ5: !prevState.showQ5}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer5}
                    </div>

                    <div className={styles.QABox}>
                        <h6 onClick={() => this.setState(prevState => ({showQ6: !prevState.showQ6}))} className={styles.question}>
                        Sample Question Goes Here?
                        </h6>
                        {answer6}
                    </div>
                    <div className={styles.expander}></div>    
                </div>
            <div className={styles.expander}></div>
            </div>
        )
    }
}

export default FAQ;