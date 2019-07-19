import React from 'react'

import Hero from '../../components/UniversalElements/Hero/Hero'
import Intro from '../../components/UniversalElements/Intro/Intro'
import FeaturesSection from '../../components/HomepageComponents/FeaturesSection'
import BoilerRightImg from '../../components/UniversalElements/BoilerPlate/BoilerRightImg'
import BoilerLeftImg from '../../components/UniversalElements/BoilerPlate/BoilerLeftImg'

const onlineVideoEditingPage = () => (
  <div>
    <Hero bgFilePath="/download.jpg">
      <h1> online Video Editing Header </h1>
    </Hero>

    <Intro 
        header="Online Video Editing"
        content="Quisque et viverra eros. Curabitur suscipit convallis dolor quis egestas. Sed ut euismod risus, a placerat lacus. Nam diam diam, ornare vitae tortor vel, efficitur tempor eros. Nulla euismod vehicula sem, vel ultricies ex porttitor eget. Mauris nisi lectus, rhoncus a egestas nec, sodales non odio. Aliquam felis urna, accumsan sed orci nec, dignissim scelerisque magna. Vivamus scelerisque blandit nisl at tempus. Sed dignissim fringilla tortor in molestie." />

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

export default onlineVideoEditingPage
