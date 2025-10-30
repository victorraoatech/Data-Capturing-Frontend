// import { memo } from 'react';
// import Image from 'next/image';

// const Features = () => {
//   const features = [
//     {
//       title: "Multi-object measurement",
//       description: "Measure people or objects from a single image upload.",
//       icon: "/Ruler Streamline Tabler Line.png"
//     },
//     {
//       title: "Create questionnaire for clients",
//       description: "Collect data from clients",
//       icon: "/Vector.png"
//     },
//     {
//       title: "Privacy-first system",
//       description: "Your data stays yours",
//       icon: "/Vector (1).png"
//     },
//     {
//       title: "Cross-platform support",
//       description: "Simple, fast, and intuitive. No setup needed on any device.",
//       icon: "/Electric Bolt Streamline Rounded Line - Material Pro Free.png"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 bg-[#F4EFFA] w-[1225px] h-[1089px] top-[2042px] left-[80px]">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-6">
//             Our features
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Our core tools built with intelligent features that make precision effortless.
//           </p>
//         </div>

//         {/* Features Grid Container */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
//             >
//               {/* Icon Container */}
//               <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                 <div className="w-8 h-8 relative">
//                   <Image
//                     src={feature.icon}
//                     alt={feature.title}
//                     width={60}
//                     height={60}
//                     className="object-contain"
//                   />
//                 </div>
//               </div>

//               {/* Content Container */}
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#5D2A8B] transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
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
    <section className="py-20 bg-white flex flex-col items-center">
      {/* Header Section - stays on white background */}
      <div className="text-center mb-12">
        <h2
          className="text-gray-900 mb-6"
          style={{
            fontFamily: "Monument Extended, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "36px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          our features
        </h2>
        <p
          className="mt-6 text-gray-600"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
            marginTop: "24px",
          }}
        >
          Our core tools built with intelligent features that make <br/> precision
          effortless.
        </p>
      </div>

      {/* Inner colored background container */}
      <div
        className="bg-[#F4EFFA] rounded-[20px] flex justify-center items-center"
        style={{
          width: "1255px",
          height: "876px",
        }}
      >
        {/* Cards Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-[80px] gap-y-[38px]"
          style={{
            width: "980px",
            height: "688px",
          }}
        >
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[20px] shadow-md hover:shadow-lg transform transition-all duration-300 flex flex-col items-center text-center p-8"
              style={{
                width: "450px",
                height: "325px",
              }}
            >
              {/* Icon */}
              <div
                className="flex items-center justify-center mb-6"
                style={{
                  width: "120px",
                  height: "120px",
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "90px",
                    position: "relative",
                  }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="90px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="px-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
