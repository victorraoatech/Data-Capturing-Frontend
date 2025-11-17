
import Image from "next/image";
const HeroBanner = () => {
  return (
    <div id="feature-hero" className="relative bg-[#F4EFFA]">
      <div
        className="relative mx-auto"
        style={{ width: "1440px", minHeight: "640px" }}
      >
        <div
          className="absolute"
          style={{
            width: "614px",
            height: "381.89617919921875px",
            top: "217px",
            left: "80px",
            gap: "60px",
          }}
        >
          <div
            className="flex flex-col"
            style={{ width: "614px", height: "266px", gap: "20px" }}
          >
            <h1
              className="font-normal"
              style={{
                fontFamily: 'Monument Extended, sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: "50px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1A1A1A",
              }}
            >
              Smart features
              <br />
              for effortless
              <br />
              precision
            </h1>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#6E6E6EB2',
                marginTop: '10px',
              }}
            >
              Experience AI-powered tools that make measuring
              <span style={{ display: 'block', marginTop: '12px' }}>
                faster, easier, and more accurate than ever
              </span>
            </p>
          </div>
          <div
            style={{
              width: "237.7393035888672px",
              height: "55.89617919921875px",
            }}
          >
            <button
  style={{
    width: "237.74px",
    height: "55.9px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14.92px",
    borderRadius: "29.84px",
    padding: "0 18.65px",
    background: "#5D2A8B",
    marginTop: "20px",       // move button down
  }}
>
  <span
    style={{
      fontFamily: "Manrope, sans-serif",
      fontWeight: 600,
      fontSize: "26px",
      lineHeight: "1",
      color: "#FFFFFF",
    }}
  >
    Try it Now
  </span>
</button>

          </div>
        </div>
        <div
          className="absolute"
          style={{
            width: "713px",
            height: "520px",
            top: "119px",
            left: "679px",
            position: "absolute",
          }}
        >
          <div
            className="absolute"
            style={{ width: "297px", height: "446px", top: "42px", left: "0px", opacity: 0.5 }}
          >
            <Image
              alt=""
              src="/assets/freepik__background__98107 1.png"
              width={297}
              height={446}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div
            className="absolute"
            style={{ width: "520px", height: "520px", top: "0px", left: "193px" }}
          >
            <Image
              alt=""
              src="/assets/Get Inspired Streamline Bangalore - Free.png"
              width={520}
              height={520}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;