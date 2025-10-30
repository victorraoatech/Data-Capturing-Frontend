


import { memo } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/Home/footer/page";
import HeroBanner from "./herobanner/page";
import Measurement from "./measure/page";
import KeyFeatures from "./key-features/page";
import ReadyToCapture from "@/app/Home/capture/page";
const Page = () => {
  return (
    <div>
     
      <Navbar />
      <HeroBanner />
      <Measurement/>
      <KeyFeatures/>
      
      <ReadyToCapture/>
      <Footer />
    </div>
  );
};

export default memo(Page);
