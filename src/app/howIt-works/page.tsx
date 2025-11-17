import { memo } from 'react';
import Navbar from '../components/navbar';
import Footer from '../Home/footer/page';
import HeroSection from './hero-section/page';
import SimpleSteps from "./simple-steps/page"
import { AIFeaturesSection } from './ai-feature/page';
import ReadyToCapture from '../Home/capture/page';
const Page = () => {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <div style={{marginTop: "200px", marginBottom: "200px"}}>
      <SimpleSteps/>
     </div>
     
     <div style={{marginTop: "200px", marginBottom: "200px"}}>
      <AIFeaturesSection />
     </div>
     
     {/* <ReadyToCapture/> */}
     <Footer/>
    </div>
  );
};

export default memo(Page);