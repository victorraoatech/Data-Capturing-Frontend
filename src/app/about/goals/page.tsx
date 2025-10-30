// import Image from "next/image"

// export function GoalsSection() {
//   const goals = [
//     {
//       <Image
//                     src="/assets/pin.png"
//                     alt="Real World Data"
//                     fill
//                     className="object-cover"
//                     sizes="160px"
//                   />
      
    
//       title: "To Make Work Seamless",
//       description:
//         "We eliminate complexity by tackling friction and inefficiencies — bringing clarity and ease to your workflows",
//     },
//     {
//        <Image
//                     src="/assets/h.png"
//                     alt="Real World Data"
//                     fill
//                     className="object-cover"
//                     sizes="160px"
//                   />
      
//       title: "To Make Empowering Work",
//       description: "We cultivate purpose by fueling trust, confidence, and performance through meaningful engagement",
//     },
//     {
//       <Image
//                     src="/assets/pin.png"
//                     alt="Real World Data"
//                     fill
//                     className="object-cover"
//                     sizes="160px"
//                   />
      
//       title: "To Match Client Success With Ours",
//       description: "We're invested in your growth — because your achievements fuel ours",
//     },
//   ]

//   return (
//     <div className="w-full py-20 px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div
//           className="flex flex-col items-center justify-center gap-4 mb-16"
//           style={{ width: "566px", margin: "0 auto" }}
//         >
//           <h2
//             className="text-center"
//             style={{
//               fontFamily: "Monument Extended, sans-serif",
//               fontWeight: 400,
//               fontSize: "36px",
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               width: "100%",
//               height: "43px",
//             }}
//           >
//             Our Goals
//           </h2>
//           <p
//             className="text-center text-gray-600"
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 400,
//               fontSize: "20px",
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               width: "100%",
//               height: "54px",
//             }}
//           >
//             We're driven by simplicity, empowerment, and shared success.
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="flex gap-6 justify-center" style={{ width: "1283px", margin: "0 auto" }}>
//           {goals.map((goal, index) => (
//             <div
//               key={index}
//               className="border border-gray-200 rounded-[10px] p-8 flex flex-col items-center justify-start"
//               style={{
//                 width: "413px",
//                 height: "330px",
//               }}
//             >
//               {/* Icon */}
//               <div
//                 className="text-4xl mb-6 flex items-center justify-center"
//                 style={{
//                   width: "344px",
//                   height: "81px",
//                 }}
//               >
//                 {goal.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 className="text-center mb-4"
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 500,
//                   fontSize: "28px",
//                   lineHeight: "100%",
//                   letterSpacing: "0%",
//                 }}
//               >
//                 {goal.title}
//               </h3>

//               {/* Description */}
//               <p
//                 className="text-center text-gray-600"
//                 style={{
//                   fontFamily: "Manrope, sans-serif",
//                   fontWeight: 300,
//                   fontSize: "20px",
//                   lineHeight: "100%",
//                   letterSpacing: "0%",
//                 }}
//               >
//                 {goal.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import Image from "next/image"

export function GoalsSection() {
  const goals = [
    {
      icon: (
        <div className="relative w-10 h-10">
          <Image
            src="/assets/pin.png"
            alt="Make Work Seamless"
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      ),
      title: "To Make Work Seamless",
      description:
        "We eliminate complexity by tackling friction and inefficiencies — bringing clarity and ease to your workflows",
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          <Image
            src="/assets/arror.png"
            alt="Make Empowering Work"
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      ),
      title: "To Make Empowering Work",
      description: "We cultivate purpose by fueling trust, confidence, and performance through meaningful engagement",
    },
    {
      icon: (
        <div className="relative w-10 h-10">
          <Image
            src="/assets/h.png"
            alt="Match Client Success With Ours"
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
      ),
      title: "To Match Client Success With Ours",
      description: "We're invested in your growth — because your achievements fuel ours",
    },
  ]

  return (
    <div className="w-full py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="flex flex-col items-center justify-center gap-4 mb-16"
          style={{ width: "566px", margin: "0 auto" }}
        >
          <h2
            className="text-center"
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "100%",
              height: "43px",
            }}
          >
            Our Goals
          </h2>
          <p
            className="text-center text-gray-600"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              width: "100%",
              height: "54px",
            }}
          >
            We're driven by simplicity, empowerment, and shared success.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex gap-6 justify-center" style={{ width: "1283px", margin: "0 auto" }}>
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-[10px] p-8 flex flex-col items-center justify-start"
              style={{
                width: "413px",
                height: "330px",
              }}
            >
              {/* Icon */}
              <div
                className="text-4xl mb-6 flex items-center justify-center"
                style={{
                  width: "344px",
                  height: "81px",
                }}
              >
                {goal.icon}
              </div>

              {/* Title */}
              <h3
                className="text-center mb-4"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: "28px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {goal.title}
              </h3>

              {/* Description */}
              <p
                className="text-center text-gray-600"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}