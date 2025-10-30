import { memo } from 'react';
import Navbar from '../components/navbar';
import Footer from '../Home/footer/page';
import ReadyToCapture from '../Home/capture/page';
import AboutPage from './hero/page';
import { GoalsSection } from './goals/page';
const Page = () => {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <GoalsSection/>
      <ReadyToCapture/>
      <Footer/>
    </div>
  );
};

export default memo(Page);