import React from "react";

import styles from './hpStyles.module.css'

const CompanyInfo = props => (
<div className={styles.content}> 
    <div className={styles.topRow}>
        <div className={styles.avatar}></div>
        <div className={styles.topContent}>
            <h4> {props.companyName} </h4>
            <p> {props.speaker} </p>
        </div>
        <div className={styles.expander}></div>
    </div>
    <p className={styles.quote}> {props.quote} </p>
    <div className={styles.expander}></div>
</div>
)


class Testimonials extends React.Component {
    constructor() {
        super()
        this.state = {
            currentSlide: 1, 
            animation: true,
            animation_Reverse: false,
            seconds: 0,
            prevSlide: 1,
            autoSlide: true,
            slider: 0,
        }
    }

    //Set up a timer for running the testimonial switching
    tick() {
        this.setState(prevState => ({seconds: prevState.seconds + 1}));
        if(this.state.autoSlide)
        {
            if( this.state.seconds >= 5 )
            {
                this.setState({seconds: 0});
                this.setState({animation: true});
            }

            if( this.state.seconds == 1)
            {
                this.setState({animation: false});
                this.setState({animation_Reverse: false});
                this.setState(prevState => ({currentSlide: prevState.currentSlide + 1}));
                if(this.state.currentSlide >= 4) {
                    this.setState({currentSlide: 1});
                }
            }
        }
        else
        {
            if (this.state.seconds >=5)
            {
                this.setState({seconds: 0});
            }
            if(this.state.seconds == 1)
            {
                this.setState({animation: false});
                this.setState({animation_Reverse: false});
                this.setState({currentSlide: this.state.prevSlide});
                this.setState({slider: 1});
            }
        }   
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
        
    }

    discoverSlideDir() {
        
        this.setState({slider: 4}); 
        this.setState({animation_Reverse: true});
        console.log(this.state.prevSlide);
        console.log(this.state.currentSlide);
        if(this.state.currentSlide > this.state.prevSlide)
        {
            this.setState({slider: 10});
        }   
    }

    

    render() {
        let displayed;
        let stat1;
        let stat2;
        let stat3;

        let next;
        let nextStat1;
        let nextStat2;
        let nextStat3;

        let previous;
        let previousStat1;
        let previousStat2;
        let previousStat3;

        let company1;
        let company1Stat1;
        let company1Stat2;
        let company1Stat3;

        let company2;
        let company2Stat1;
        let company2Stat2;
        let company2Stat3;

        let company3;
        let company3Stat1;
        let company3Stat2;
        let company3Stat3;



        company1 = 
            <CompanyInfo
                companyName = "Company 1"
                speaker = "Speaker 1 Name, Pos @ Company"
                quote = "quote 1"
            />
        company1Stat1 = 
            <p> 
            over 1000000 plays 
            </p>;

        company1Stat2 = 
            <p> 
            over 10000 VOD hours 
            </p>;

        company1Stat3 =
            <p> 
            over 1000 streams 
            </p>;



        company2 = 
            <CompanyInfo
                companyName = "Company Name 2"
                speaker = "Speaker 2 Name, Pos @ Company"
                quote = "quote 2"
            />
        company2Stat1 = 
            <p> 
            over 2000000 plays 
            </p>;

        company2Stat2 = 
            <p> 
            over 20000 VOD hours 
            </p>;

        company2Stat3 =
            <p> 
            over 2000 streams 
            </p>;



        company3 = 
            <CompanyInfo
                companyName = "Company Name 3"
                speaker = "Speaker 3 Name, Pos @ Company"
                quote = "quote 3"
            />;
        company3Stat1 = 
            <p> 
            over 3000000 plays 
            </p>;

        company3Stat2 = 
            <p> 
            over 30000 VOD hours 
            </p>;

        company3Stat3 =
            <p> 
            over 3000 streams 
            </p>;

        if (this.state.prevSlide == 1) 
        {
                    previous = company1;
                    previousStat1 = company1Stat1;
                    previousStat2 = company1Stat2;
                    previousStat3 = company1Stat3;

                    next = company1;
                    nextStat1 = company1Stat1;
                    nextStat2 = company1Stat2;
                    nextStat3 = company1Stat3;
        }
        else
        {
            if (this.state.prevSlide == 2)
            {
                    previous = company2;
                    previousStat1 = company2Stat1;
                    previousStat2 = company2Stat2;
                    previousStat3 = company2Stat3;

                    next = company2;
                    nextStat1 = company2Stat1;
                    nextStat2 = company2Stat2;
                    nextStat3 = company2Stat3;
            }
            else
            {
                    previous = company3;
                    previousStat1 = company3Stat1;
                    previousStat2 = company3Stat2;
                    previousStat3 = company3Stat3;

                    next = company3;
                    nextStat1 = company3Stat1;
                    nextStat2 = company3Stat2;
                    nextStat3 = company3Stat3;
            }
        }



        if (this.state.currentSlide == 1) 
        {
                    displayed = company1;
                    stat1= company1Stat1;
                    stat2= company1Stat2;
                    stat3= company1Stat3;

                    if(this.state.autoSlide)
                    {
                        next = company2;
                        nextStat1= company2Stat1;
                        nextStat2= company2Stat2;
                        nextStat3= company2Stat3;
                    }
        } 
        else 
        {
            if (this.state.currentSlide == 2) 
            {
                    displayed = company2;
                    stat1= company2Stat1;
                    stat2= company2Stat2;
                    stat3= company2Stat3;

                    if(this.state.autoSlide)
                    {
                        next = company3;
                        nextStat1= company3Stat1;
                        nextStat2= company3Stat2;
                        nextStat3= company3Stat3;
                    }
            } 
            else 
            {
                    displayed = company3;
                    stat1= company3Stat1;
                    stat2= company3Stat2;
                    stat3= company3Stat3;

                    if(this.state.autoSlide)
                    {
                        next = company1;
                        nextStat1= company1Stat1;
                        nextStat2= company1Stat2;
                        nextStat3= company1Stat3;
                    }
            }
        };

        
        





        return(
            <div>
                <div className={styles.testimonialBlock}>
                    <button onClick={() => {
                        this.setState(prevState =>({prevSlide:prevState.prevSlide = 1,})),
                        this.setState({autoSlide: false}),
                        clearInterval(this.interval),
                        this.discoverSlideDir();
                        this.interval = setInterval(() => this.tick(), 1000),
                        this.setState({seconds: 0})
                        }}> 
                        1 
                    </button>

                    <button onClick={() => {
                        this.setState(prevState =>({prevSlide:prevState.prevSlide = 2,})),
                        this.setState({autoSlide: false}),
                        clearInterval(this.interval),
                        this.discoverSlideDir();
                        this.interval = setInterval(() => this.tick(), 1000),
                        this.setState({seconds: 0})
                        }}> 
                        2 
                    </button>
                    
                    <button onClick={() => {
                        this.setState(prevState =>({prevSlide:prevState.prevSlide = 3,})),
                        this.setState({autoSlide: false}),
                        clearInterval(this.interval),
                        this.discoverSlideDir();
                        this.interval = setInterval(() => this.tick(), 1000),
                        this.setState({seconds: 0})
                        }}> 
                        3 
                    </button>
                    <input 
                        type="checkbox"
                        checked={this.state.animation}
                        onChange={event => {
                            this.setState({animation: event.target.checked})
                        }} />

                    <input 
                        type="radio"
                        checked={this.state.animation_Reverse}
                        onChange={event => {
                            this.setState({animation_Reverse: event.target.checked})
                        }} />
                    
                    <section className={styles.contentArea}> 
                        {previous}

                        {displayed}

                        {next}
                        <div className={styles.expander}></div>
                    </section>

                    <div> Seconds: {this.state.seconds} </div>
                    <div> currentSlide: {this.state.currentSlide} </div>
                    <div> prevSlide: {this.state.prevSlide} </div>
                    <div> slider: {this.state.slider} </div>

                    <div className={styles.statBar}>

                        <div className={styles.statArea}>
                            <section className={styles.statRoll}>
                                <div className={styles.stat}>
                                    {stat1}
                                </div>
                                <div className={styles.stat}>
                                    {nextStat1}
                                </div>
                            </section>
                        </div>

                        <div className={styles.statArea}>
                            <section className={styles.statRoll}>
                                <div className={styles.stat}>
                                    {stat2}
                                </div>
                                <div className={styles.stat}>
                                    {nextStat2}
                                </div>
                            </section>
                        </div>

                        <div className={styles.statArea}>
                            <section className={styles.statRoll}>
                                <div className={styles.stat}>
                                    {stat3}
                                </div>
                                <div className={styles.stat}>
                                    {nextStat3}
                                </div>
                            </section>
                        </div>
                    </div>

                    <div className={styles.expander}></div>
                </div>
                
            </div>
        )
    }
}

export default Testimonials;