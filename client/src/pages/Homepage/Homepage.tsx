import HeroSection from './herosection'
import ClientlogoSection from './clientlogosection'
import WhyEpic from './whyepic'
import YourBenefits from './yourbenefits'
import Newsletter from './newletter'
import ContactUsForm from './contactusform'
import WhatURGoodAt from './whaturgoodat'

const Homepage = () => {
  return (
    <div className='overflow-hidden '>
      <HeroSection />
      <WhyEpic />
      {/* <WhatURGoodAt/> */}
      <YourBenefits/>
      <ClientlogoSection />
      
      
    </div>
  )
}

export default Homepage
