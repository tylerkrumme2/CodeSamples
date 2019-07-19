import React from 'react'
import Link from 'gatsby-link'

import styles from './pageStyles/index.module.css'

import Hero from '../components/UniversalElements/Hero/Hero'
import HeroVideo from '../components/UniversalElements/Hero/Hero-Video'
import FeaturesSection from '../components/HomepageComponents/FeaturesSection'
import ClientWall from '../components/HomepageComponents/ClientWall'
import Testimonials from '../components/HomepageComponents/TestimonialCard'
import BoilerRightImg from '../components/UniversalElements/BoilerPlate/BoilerRightImg'
import BoilerLeftImg from '../components/UniversalElements/BoilerPlate/BoilerLeftImg'
import Banner from '../components/UniversalElements/Banners/Banner1'
import Button6 from '../components/UniversalElements/Buttons/Button6'

import FAQ from '../components/PricingComponents/FAQ/FAQ'
/*
<Hero bgFilePath="/img/hero-event-webcasting.jpg">
      <h1> LIVE AND ON-DEMAND STREAMING PLATFORM </h1>
      <p> VIDEO STREAMING MANAGEMENT MADE SIMPLE </p>
      <Button6
        text="Start Streaming" />
    </Hero>

*/
const IndexPage = () => (
  <div>

    <HeroVideo bgFilePath="/teaser.mp4">
      <h1> LIVE AND ON-DEMAND STREAMING PLATFORM </h1>
      <p> VIDEO STREAMING MANAGEMENT MADE SIMPLE </p>
      <Button6
        text="Start Streaming" />
    </HeroVideo>

    <FeaturesSection />

    <ClientWall />

    <Testimonials 
      imgFP="/download.jpg"
      topText="Beth Switzer"
      bottomText="The Florida Channel"
      quote="The products and services delivered by Invintus have been exactly what we need and are of the highest quality. Additionally, Invintus folks are very forward-thinking, have excellent problem-solving skills and communicate unusually well."/>

    <Banner
      text="Banner"
      linkText="Action"
      link="page-2" />

    <BoilerRightImg
        imgFP="/download.jpg" >
        
    </BoilerRightImg>
    
    <BoilerLeftImg
        imgFP="/download.jpg" >
        
    </BoilerLeftImg>

    <BoilerRightImg
        imgFP="/download.jpg" >
    </BoilerRightImg>

  </div>
)

/*





*/

export default IndexPage
