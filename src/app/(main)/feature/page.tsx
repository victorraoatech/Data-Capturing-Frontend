


import { memo } from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/Home/footer/page";
import HeroBanner from "./herobanner/page";
import Measurement from "./measure/page";
import KeyFeatures from "./key-features/page";

import DataCapturingRealWorld from "./data-capture/page";
const Page = () => {
  return (
    <div>
     
      <Navbar />
      <HeroBanner />
      <Measurement/>
       <div style={{ marginTop: "200px" ,marginBottom:"200px"}}>
          <KeyFeatures/>
        </div>
     
        <div style={{ marginTop: "200px" ,marginBottom:"200px"}}>
          <DataCapturingRealWorld/>
        </div>
      
      <Footer />
    </div>
  );
};

export default memo(Page);
