
"use client"

import Image from "next/image";
const Measurement = () => {
  return (
    <div className="relative">
      <style jsx>{`
        .container { width: 100%; max-width: 1440px; margin: 0 auto; }
        .measureWrap { position: relative; width: 1255px; height: 550px; margin-left: 80px; margin-top: 100px; }
        .imgBox { position: absolute; top: 0; left: 0; width: 602px; height: 550px; border-radius: 20px; overflow: hidden; }
        .textBox { width: 561px; height: 197px; gap: 30px; }
        @media (min-width: 1280px) {
          .textBox { position: absolute; top: 174px; left: 694px; }
        }
        @media (max-width: 1279px) {
          .measureWrap { width: 100%; height: auto; margin-left: 0; padding: 0 16px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
          .imgBox { position: static; width: 100%; max-width: 602px; height: auto; background: #FCFBFE; }
          .textBox { position: static; width: 100%; max-width: 561px; }
        }
      `}</style>
      <div className="container">
        <div className="measureWrap">
         
         
         <div className="imgBox mt-[100]" style={{backgroundColor: "#FCFBFE", width:"602px", height:"550px", borderRadius: "20px", position: "relative"}}>
  <Image
    alt=""
    src="/assets/Frame 1707479253.png"
    width={350}
    height={350}
    style={{
      position: "absolute",
      top: "100px", 
      left: "126px",
  
    }}
  />
</div>
          <div className="textBox">
            <h1
              style={{
                width: "561px",
                height: "86px",
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                fontSize: "36px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Built to measure
              <br />
              anything, anywhere
            </h1>
            <p
              style={{
                width: "561px",
                height: "81px",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#6E6E6EB2",
                margin: 0,
              }}
            >
              From human bodies to complex objects and interior spaces, Data Capturing adapts seamlessly — analyzing shape, proportion, and scale in one intelligent scan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measurement;

