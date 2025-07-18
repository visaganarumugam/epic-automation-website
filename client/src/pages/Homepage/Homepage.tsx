import HeroSection from './herosection'
import ClientlogoSection from './clientlogosection'
import WhyEpic from './whyepic'
import WhatWeRGoodAt from './WhatWeAreGoodAt'

import OurApproach from './ourapproach'
import YourBenefit from './yourbenefits'
import OurMission from './ourmisson'
// import ProjectCarousel from './projectcarousel'

const Homepage = () => {
  return (
    <div className='overflow-hidden bg-white'>
      <HeroSection />
      <WhyEpic />
      <OurMission />
      <OurApproach/>
      {/* <ProjectCarousel/> */}
      {/* <Newsletter/> */}
      <WhatWeRGoodAt/>
      <YourBenefit />
      <ClientlogoSection />
      
      
    </div>
  )
}

export default Homepage
