
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
//       className="fixed top-0 left-0 right-0 flex justify-center items-center bg-[#F5F3FF] shadow-md z-50 overflow-hidden"
//       style={{
//         width: "1255px",
//         height: "236px",
//         borderRadius: "20px",
//         margin: "0 auto",
//       }}
//     >
//       <div className="w-full flex justify-between items-center px-8">
//         {/* Left Text Section */}
//         <div
//           className="flex flex-col justify-center"
//           style={{
//             width: "605px",
//             height: "86px",
//             gap: "16px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "Monument Extended, sans-serif",
//               fontSize: "28px",
//               lineHeight: "120%",
//               color: "#000",
//             }}
//           >
//             How data capturing works in the real world
//           </h2>
//           <p
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontSize: "16px",
//               lineHeight: "150%",
//               color: "#666",
//             }}
//           >
//             Designed for versatility — empowering individuals and professionals across industries.
//           </p>
//         </div>

//         {/* Upload Image Button */}
//         <button
//           style={{
//             width: "154.3px",
//             height: "41.8px",
//             backgroundColor: "#5D2A8B",
//             color: "#fff",
//             borderRadius: "29.84px",
//             padding: "9.95px 18.65px",
//             fontFamily: "Manrope, sans-serif",
//             fontSize: "16px",
//             fontWeight: 600,
//             cursor: "pointer",
//             transition: "all 0.3s ease",
//           }}
//           className="hover:bg-[#4B1E6E]"
//         >
//           Upload Image
//         </button>

//         {/* Right Image Section */}
//         <div
//           className="relative"
//           style={{
//             width: "416px",
//             height: "236px",
//             borderRadius: "20px",
//             overflow: "hidden",
//           }}
//         >
//           <Image
//             src={activeIndex !== null ? useCases[activeIndex].image : useCases[0].image}
//             alt="Real World Data"
//             fill
//             className="object-cover transition-all duration-500"
//           />
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
      aria-label="Data capturing strip"
      // fixed and centered using left:50% + translateX(-50%)
      style={{
        position: "fixed",
        left: "50%",
        top: "50%",               // vertically center; change to "24px" if you want it near top
        transform: "translate(-50%, -50%)",
        width: "min(1255px, 95%)", // caps at 1255px, shrinks to 95% of viewport if smaller
        height: "236px",
        borderRadius: "20px",
        background: "#F5F3FF",
        boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: "18px",
        paddingRight: "18px",
      }}
    >
      <div className="w-full flex items-center justify-between" style={{ gap: "16px" }}>
        {/* Left Text Section */}
        <div
          className="flex flex-col justify-center"
          style={{
            width: "605px",
            maxWidth: "48%", // allow shrink on smaller widths
            height: "86px",
            gap: "8px",
          }}
        >
          <h2
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontSize: "clamp(18px, 1.6vw, 28px)",
              lineHeight: "120%",
              color: "#000",
              margin: 0,
            }}
          >
            How data capturing works in the real world
          </h2>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(12px, 1.2vw, 16px)",
              lineHeight: "150%",
              color: "#666",
              margin: 0,
            }}
          >
            Designed for versatility — empowering individuals and professionals across industries.
          </p>
        </div>

        {/* Center area: optional accordion summary or controls (you can keep or remove) */}
        <div style={{ flex: "1 1 360px", display: "flex", justifyContent: "center" }}>
          {/* You can place a compact accordion indicator or short text here if desired */}
        </div>

        {/* Upload Image Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            style={{
              width: "154.3px",
              height: "41.8px",
              backgroundColor: "#5D2A8B",
              color: "#fff",
              borderRadius: "29.84px",
              padding: "9.95px 18.65px",
              fontFamily: "Manrope, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              border: "none",
            }}
            className="hover:bg-[#4B1E6E]"
          >
            Upload Image
          </button>

          {/* Right Image Thumbnail (keeps fixed size but responsive) */}
          <div
            className="relative"
            style={{
              width: "160px",
              height: "100%",
              maxHeight: "160px",
              borderRadius: "12px",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src={activeIndex !== null ? useCases[activeIndex].image : useCases[0].image}
              alt="Real World Data"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCapturingRealWorld;
