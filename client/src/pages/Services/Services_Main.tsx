import Service_hero from './Services_Home';
import Robot_Automation from './Robotics_Automation_Page';
import Scada from './Scada_Page';
import Contact from './Contact_us';
import Spm from './S_p_m_Page';
import Robot_Prog_Services from './Robot_Prog_Services';
import PLC_HMI from './PLC_HMI';
import Custom_Panel_Design from './Custom_Panel_Design_Page';
const services = () => {
  return (
    <div className='bg-gradient-to-r from-[#5cd9ff] via-[#d2f2ff] to-[#ebe97c]'>
      <Service_hero />
      <Robot_Automation />
      <Spm />
      <Scada />
      <Custom_Panel_Design />
      <Robot_Prog_Services />
      <PLC_HMI />
      <Contact />
    </div>
  )
}

export default services
