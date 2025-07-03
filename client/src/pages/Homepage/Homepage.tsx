import HeroSection from './herosection'
import ClientlogoSection from './clientlogosection'
import WhyEpic from './whyepic'
import YourBenefits from './yourbenefits'

import WhatURGoodAt from './whaturgoodat'
// import ProjectCarousel from './projectcarousel'

const Homepage = () => {
  return (
    <div className='overflow-hidden '>
      <HeroSection />
      <WhyEpic />
      <WhatURGoodAt/>
      {/* <ProjectCarousel/> */}
      {/* <Newsletter/> */}
      <YourBenefits/>
      <ClientlogoSection />
      
      
    </div>
  )
}

export default Homepage
