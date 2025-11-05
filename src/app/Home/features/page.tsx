



// import { memo } from "react";
// import Image from "next/image";

// const Features = () => {
//   const features = [
//     {
//       title: "Multi-object measurement",
//       description: "Measure people or objects from a single image upload.",
//       icon: "/Ruler Streamline Tabler Line.png",
//     },
//     {
//       title: "Create questionnaire for clients",
//       description: "Collect data from clients",
//       icon: "/Vector.png",
//     },
//     {
//       title: "Privacy-first system",
//       description: "Your data stays yours",
//       icon: "/Vector (1).png",
//     },
//     {
//       title: "Cross-platform support",
//       description:
//         "Simple, fast, and intuitive. No setup needed on any device.",
//       icon: "/Electric Bolt Streamline Rounded Line - Material Pro Free.png",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white flex flex-col items-center">
//       {/* Header Section - stays on white background */}
//       <div className="text-center mb-12">
//         <h2
//           className="text-gray-900 mb-6"
//           style={{
//             fontFamily: "Monument Extended, sans-serif",
//             fontWeight: 400,
//             fontStyle: "normal",
//             fontSize: "36px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "center",
//           }}
//         >
//           our features
//         </h2>
//         <p
//           className="mt-6 text-gray-600"
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 400,
//             fontStyle: "normal",
//             fontSize: "20px",
//             lineHeight: "100%",
//             letterSpacing: "0%",
//             textAlign: "center",
//             maxWidth: "700px",
//             margin: "0 auto",
//             marginTop: "24px",
//           }}
//         >
//           Our core tools built with intelligent features that make <br/> precision
//           effortless.
//         </p>
//       </div>

//       {/* Inner colored background container */}
//       <div
//         className="bg-[#F4EFFA] rounded-[20px] flex justify-center items-center"
//         style={{
//           width: "1255px",
//           height: "876px",
//         }}
//       >
//         {/* Cards Layout */}
//         <div
//           className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[38px]"
//           style={{
//             width: "980px",
//             height: "688px",
//           }}
//         >
//           {features.map((feature, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-[20px] shadow-md hover:shadow-lg transform transition-all duration-300 flex flex-col items-center text-center p-8"
//               style={{
//                 width: "450px",
//                 height: "325px",
//               }}
//             >
//               {/* Icon */}
//               <div
//                 className="flex items-center justify-center mb-6"
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                 }}
//               >
//                 <div
//                   style={{
//                     width: "90px",
//                     height: "90px",
//                     position: "relative",
//                   }}
//                 >
//                   <Image
//                     src={feature.icon}
//                     alt={feature.title}
//                     fill
//                     style={{ objectFit: "contain" }}
//                     sizes="90px"
//                   />
//                 </div>
//               </div>

//               {/* Text */}
//               <div className="px-2">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default memo(Features);


import { memo } from "react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Multi-object measurement",
      description: "Measure people or objects from a single image upload.",
      icon: "/Ruler Streamline Tabler Line.png",
    },
    {
      title: "Create questionnaire for clients",
      description: "Collect data from clients",
      icon: "/Vector.png",
    },
    {
      title: "Privacy-first system",
      description: "Your data stays yours",
      icon: "/Vector (1).png",
    },
    {
      title: "Cross-platform support",
      description:
        "Simple, fast, and intuitive. No setup needed on any device.",
      icon: "/Electric Bolt Streamline Rounded Line - Material Pro Free.png",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white flex flex-col items-center px-4 sm:px-6">
      {/* Header Section */}
      <div className="text-center mb-8 lg:mb-12 max-w-4xl mx-auto">
        <h2
          className="text-gray-900 mb-4 lg:mb-6"
          style={{
            fontFamily: "Monument Extended, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(28px, 6vw, 36px)",
            lineHeight: "1.1",
            letterSpacing: "0%",
          }}
        >
          our features
        </h2>
        <p
          className="text-gray-600 mx-auto"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(16px, 4vw, 20px)",
            lineHeight: "1.4",
            letterSpacing: "0%",
            maxWidth: "700px",
          }}
        >
          Our core tools built with intelligent features that make{" "}
          <br className="hidden lg:block" />
          precision effortless.
        </p>
      </div>

      {/* Inner colored background container */}
      <div
        className="bg-[#F4EFFA] rounded-[20px] flex justify-center items-center w-full max-w-[1255px]"
        style={{
          height: "auto",
          minHeight: "min(876px, 90vh)",
          padding: "clamp(20px, 5vw, 40px)",
        }}
      >
        {/* Cards Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-[80px] gap-y-[38px] w-full max-w-[980px]"
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] shadow-md hover:shadow-lg transform transition-all duration-300 flex flex-col items-center text-center p-6 lg:p-8 w-full mx-auto"
              style={{
                maxWidth: "450px",
                height: "clamp(280px, 40vw, 325px)",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-4 lg:mb-6"
                style={{
                  width: "clamp(80px, 20vw, 120px)",
                  height: "clamp(80px, 20vw, 120px)",
                }}
              >
                <div
                  style={{
                    width: "clamp(60px, 15vw, 90px)",
                    height: "clamp(60px, 15vw, 90px)",
                    position: "relative",
                  }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 768px) 60px, 90px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-2 flex-1 flex flex-col justify-center">
                <h3 
                  className="font-semibold text-gray-900 mb-2 lg:mb-3"
                  style={{
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-gray-500 leading-relaxed"
                  style={{
                    fontSize: "clamp(14px, 3vw, 16px)",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Features);