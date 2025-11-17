
// "use client";
// import { useState } from "react";
// import Image from "next/image";

// const DataCapturingRealWorld = () => {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const useCases = [
//     {
//       id: 1,
//       title: "Fashion & Retail",
//       description: "Designers and brands use it for accurate sizing, reducing returns.",
//       image: "/assets/unsplash_77Ga1TXf3vQ.png",
//     },
//     {
//       id: 2,
//       title: "Engineering & Design",
//       description: "Precision measurements for prototypes, parts, and technical specifications.",
//       image: "/assets/engineering.jpg",
//     },
//     {
//       id: 3,
//       title: "Fitness & Wellness",
//       description: "Track body measurements and progress with accurate, consistent data.",
//       image: "/assets/fitness.jpg",
//     },
//     {
//       id: 4,
//       title: "Interior Planning",
//       description: "Measure spaces and furniture accurately for perfect room layouts.",
//       image: "/assets/interior.jpg",
//     },
//   ];

//   const toggleAccordion = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section
//       className="relative"
//       style={{ width: "1441px", height: "871px", margin: "0 auto", background: "#F4EFFA" }}
//     >
//       <div
//         className="absolute"
//         style={{
//           width: "602px",
//           height: "156px",
//           top: "100px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "16px",
//         }}
//       >
//         <h2
//           style={{
//             width: "602px",
//             height: "86px",
//             fontFamily: "Monument Extended, sans-serif",
//             fontWeight: 400,
//             fontStyle: "normal",
//             fontSize: "36px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "center",
//             textWrap: "balance",
//             color: "#1A1A1A",
//           }}
//         >
//           How data capturing works in the real world
//         </h2>
//         <p
//           style={{
//             width: "602px",
//             height: "54px",
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 400,
//             fontStyle: "normal",
//             fontSize: "20px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "center",
//             color: "#6E6E6EB2",
//             margin: 0,
//           }}
//         >
//           Designed for versatility — empowering individuals and professionals across industries to measure smarter.
//         </p>
//       </div>

//       <div
//         className="absolute"
//         style={{ width: "1288px", height: "450px", top: "356px", left: "80px" }}
//       >
//         <div
//           className="absolute"
//           style={{ width: "607px", height: "416px", top: "17px", left: "0px", borderRadius: "10px", overflow: "hidden", border: "7px solid #FFFFFF" }}
//         >
//           <Image
//             src={useCases[0].image}
//             alt="Real World"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div
//           className="absolute"
//           style={{ width: "583px", height: "363px", top: "50px", left: "683px" }}
//         >
//           {[0, 1, 2, 3].map((idx) => {
//             const item = useCases[idx];
//             const open = activeIndex === idx;
//             return (
//               <div
//                 key={item.id}
//                 style={{ width: "583px", height: "81px", borderTop: "1px solid #E4D8F3", display: "flex", alignItems: "center", cursor: "pointer" }}
//                 onClick={() => toggleAccordion(idx)}
//               >
//                 <div style={{ width: "28px", textAlign: "center", color: "#1A1A1A" }}>{idx + 1}</div>
//                 <div style={{ marginLeft: "16px", flex: 1 }}>
//                   <div
//                     style={{
//                       width: "341px",
//                       height: "33px",
//                       fontFamily: "Manrope, sans-serif",
//                       fontWeight: 500,
//                       fontStyle: "normal",
//                       fontSize: "24px",
//                       lineHeight: "100%",
//                       letterSpacing: "0%",
//                       color: "#000000",
//                     }}
//                   >
//                     {item.title}
//                   </div>
//                   {open && (
//                     <div
//                       style={{
//                         marginTop: "6px",
//                         fontFamily: "Manrope, sans-serif",
//                         fontWeight: 300,
//                         fontStyle: "normal",
//                         fontSize: "16px",
//                         lineHeight: "100%",
//                         letterSpacing: "0%",
//                         color: "#666666B2",
//                       }}
//                     >
//                       {item.description}
//                     </div>
//                   )}
//                 </div>
//                 <div style={{ width: "24px", height: "24px", position: "relative" }}>
//                   <div style={{ position: "absolute", top: "11px", left: 0, right: 0, borderTop: "2.2px solid #000000" }} />
//                   {!open && <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, borderLeft: "2.2px solid #000000" }} />}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DataCapturingRealWorld;



"use client";
import { useState } from "react";
import Image from "next/image";

const DataCapturingRealWorld = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const useCases = [
    {
      id: 1,
      title: "Fashion & Retail",
      description: "Designers and brands use it for accurate sizing, reducing returns.",
      image: "/assets/unsplash_77Ga1TXf3vQ.png",
    },
    {
      id: 2,
      title: "Engineering & Design",
      description: "Precision measurements for prototypes, parts, and technical specifications.",
      image: "/assets/engineering.jpg",
    },
    {
      id: 3,
      title: "Fitness & Wellness",
      description: "Track body measurements and progress with accurate, consistent data.",
      image: "/assets/fitness.jpg",
    },
    {
      id: 4,
      title: "Interior Planning",
      description: "Measure spaces and furniture accurately for perfect room layouts.",
      image: "/assets/interior.jpg",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="relative"
      style={{ width: "1441px", height: "871px", margin: "0 auto", background: "#F4EFFA" }}
    >
      <div
        className="absolute"
        style={{
          width: "602px",
          height: "156px",
          top: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <h2
          style={{
            width: "602px",
            height: "86px",
            fontFamily: "Monument Extended, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "36px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            textWrap: "balance",
            color: "#1A1A1A",
          }}
        >
          How data capturing works in the real world
        </h2>
        <p
          style={{
            width: "602px",
            height: "54px",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#6E6E6EB2",
            margin: 0,
          }}
        >
          Designed for versatility — empowering individuals and professionals across industries to measure smarter.
        </p>
      </div>

      <div
        className="absolute"
        style={{ width: "1288px", height: "450px", top: "356px", left: "80px" }}
      >
        <div
          className="absolute"
          style={{ width: "607px", height: "416px", top: "17px", left: "0px", borderRadius: "10px", overflow: "hidden", border: "7px solid #FFFFFF" }}
        >
          <Image
            src={useCases[0].image}
            alt="Real World"
            fill
            className="object-cover"
          />
        </div>

        <div
          className="absolute"
          style={{ width: "583px", height: "363px", top: "50px", left: "683px" }}
        >
          {[0, 1, 2, 3].map((idx) => {
            const item = useCases[idx];
            const open = activeIndex === idx;
            return (
              <div
                key={item.id}
                style={{ 
                  width: "583px", 
                  height: open ? "auto" : "81px", 
                  borderTop: "1px solid #E4D8F3", 
                  display: "flex", 
                  alignItems: "flex-start", // Change from center to flex-start
                  cursor: "pointer",
                  padding: "20px 0", // Add padding for better spacing
                }}
                onClick={() => toggleAccordion(idx)}
              >
                <div 
                  style={{ 
                    width: "28px", 
                    color: "#1A1A1A",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px", // Match the title line height
                    paddingTop: "4px", // Align with first line of text
                  }}
                >
                  {idx + 1}
                </div>
                <div style={{ marginLeft: "16px", flex: 1 }}>
                  <div
                    style={{
                      width: "341px",
                      height: "auto",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 500,
                      fontStyle: "normal",
                      fontSize: "24px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      color: "#000000",
                      marginBottom: open ? "8px" : "0",
                    }}
                  >
                    {item.title}
                  </div>
                  {open && (
                    <div
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 300,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                        color: "#666666B2",
                        width: "100%",
                      }}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
                <div style={{ width: "24px", height: "24px", position: "relative", marginTop: "4px" }}>
                  <div style={{ position: "absolute", top: "11px", left: 0, right: 0, borderTop: "2.2px solid #000000" }} />
                  {!open && <div style={{ position: "absolute", left: "11px", top: 0, bottom: 0, borderLeft: "2.2px solid #000000" }} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DataCapturingRealWorld;