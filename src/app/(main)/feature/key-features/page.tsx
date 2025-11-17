
import Image from "next/image";

const KeyFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Image Upload Recognition",
      description:
        "Upload a single photo — our AI automatically detects shapes, edges, and proportions to deliver accurate measurements in seconds.",
      iconSrc: "/assets/Frame 248.png",
    },
    {
      id: 2,
      title: "Smart Dimension Mapping",
      description:
        "Break down dimensions precisely across multiple points. From body measurements to room layouts, every angle counts.",
      iconSrc: "/assets/Frame 248 (1).png",
    },
    {
      id: 3,
      title: "Auto Data Storage",
      description:
        "Keep track of your measurements effortlessly. Save, export, or revisit past captures with a single click.",
      iconSrc: "/assets/Frame 248 (2).png",
    },
    {
      id: 4,
      title: "AI Precision Engine",
      description:
        "Powered by advanced machine learning algorithms. Built to refine scan — improving accuracy and adaptability over time.",
      iconSrc: "/assets/Frame 248 (3).png",
    },
    {
      id: 5,
      title: "Multi-Use Capability",
      description:
        "From fashion to fitness, and from furniture to engineering — one tool fits all industries that rely on accuracy.",
      iconSrc: "/assets/Frame 248 (4).png",
    },
    {
      id: 6,
      title: "Privacy-First Design",
      description:
        "Your data stays yours. Images are processed securely, and we never store or share them without your permission.",
      iconSrc: "/assets/Frame 248 (5).png",
    },
  ];

  return (
    <div className="relative bg-white">
      <div className="relative mx-auto" style={{ width: "1440px", minHeight: "1000px" }}>
        {/* Section container per spec */}
        <div
          className="absolute"
          style={{ width: "1283px", height: "893px", top: "0px", left: "80px" }}
        >
          {/* Header Container - Exact specifications */}
          <div 
            className="absolute text-center"
            style={{ 
              width: "566px", 
              height: "113px", 
              left: "358px", 
              top: "30px",
              gap: "16px"
            }}
          >
            <h2
              className="font-normal"
              style={{ 
                fontFamily: "Monument Extended, sans-serif",
                fontSize: "36px", 
                fontWeight: 400, 
                lineHeight: "100%", 
                color: "#1A1A1A", 
                width: "566px",
                height: "43px",
                margin: 0,
                marginBottom: "16px"
              }}
            >
              Key features
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#6E6E6EB2",
                width: "566px",
                height: "54px",
                margin: 0
              }}
            >
              Smart tools that handle the hard work, so you can focus on what matters.
            </p>
          </div>

          {/* Cards container per spec */}
          <div
            className="absolute"
            style={{ width: "1283px", height: "680px", top: "213px" }}
          >
            {/* Two rows */}
            {[0, 1].map((rowIndex) => (
              <div
                key={rowIndex}
                className="flex"
                style={{ width: "1283px", height: "310px", gap: "22px", marginBottom: rowIndex === 0 ? "22px" : "0px" }}
              >
                {features.slice(rowIndex * 3, rowIndex * 3 + 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="relative"
                    style={{
                      width: "413px",
                      height: "310px",
                      borderRadius: "10px",
                      border: "1px solid #E4D8F3",
                      boxShadow: "0px 4px 16px 0px #1A1A1A40",
                      background: "#FFFFFF",
                    }}
                  >
                    {/* Icon */}

                    <div
  className="absolute"
  style={{
    width: "50px",
    height: "50px",
    top: "30px",
    left: "30px",
    borderRadius: "40px",
    position: "relative", // Important for layout="fill"
  }}
>
  <Image 
    src={feature.iconSrc} 
    alt="" 
    layout="fill"
    objectFit="contain" 
   style={{
                          borderRadius: "25px", 
                          
                        }}
  />
</div>
                    {/* <div
                      className="absolute"
                      style={{
                        width: "50px",
                        height: "50px",
                        top: "30px",
                        left: "30px",
                        borderRadius: "25px",
                        padding: "13px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image 
                        src={feature.iconSrc} 
                        alt="" 
                        width={50} 
                        height={50} 
                        style={{
                          borderRadius: "25px", 
                          top: "30px",
                          left: "30px",
                        }}
                      />
                    </div> */}

                    {/* Header + paragraph container */}
                    <div
                      className="absolute"
                      style={{ width: "317px", height: "164px", top: "120px", left: "30px", gap: "18px" }}
                    >
                      <h3
                        style={{
                          width: "344px",
                          height: "38px",
                          fontFamily: "Manrope, sans-serif",
                          fontWeight: 500,
                          fontStyle: "normal",
                          fontSize: "28px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#1A1A1A",
                          marginBottom: "18px",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <p
                        style={{
                          width: "344px",
                          height: "108px",
                          fontFamily: "Manrope, sans-serif",
                          fontWeight: 300,
                          fontStyle: "normal",
                          fontSize: "20px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          color: "#6E6E6EB2",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;