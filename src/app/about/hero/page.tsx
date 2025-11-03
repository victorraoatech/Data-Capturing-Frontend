// "use client"



// export default function AboutPage() {
//   return (
//     <div className="min-h-screen">
     

//       {/* About Section */}
//       <div className="w-full bg-[#d0c1df]" style={{ height: "742px" }}>
//         <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
//           {/* Text Container */}
//           <div
//             className="flex flex-col items-center justify-center gap-5"
//             style={{
//               width: "819px",
//               height: "299px",
//             }}
//           >
//             {/* Heading */}
//             <h1
//               className="text-center"
//               style={{
//                 fontFamily: "Monument Extended, sans-serif",
//                 fontWeight: 400,
//                 fontSize: "50px",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 width: "703px",
//                 height: "180px",
//               }}
//             >
//               Redefining Measurement Through AI
//             </h1>

//             {/* Description */}
//             <p
//               className="text-center text-gray-600"
//               style={{
//                 fontFamily: "Manrope, sans-serif",
//                 fontWeight: 400,
//                 fontSize: "24px",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//               }}
//             >
//               We're building intelligent tools that make precision accessible to everyone — from designers and engineers
//               to everyday users through smart, image-based measurement technology
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <div className="w-full bg-[#d0c1df] py-12 md:py-0" style={{ minHeight: "300px" }}>
        <style jsx>{`
          @media (min-width: 768px) {
            .about-section {
              height: 742px !important;
            }
            .text-container {
              width: 819px !important;
              height: 299px !important;
              padding: 0 !important;
            }
            .heading {
              width: 703px !important;
              height: 180px !important;
              font-size: 50px !important;
            }
            .description {
              font-size: 24px !important;
            }
          }
          @media (max-width: 767px) {
            .about-section {
              height: auto !important;
            }
            .text-container {
              width: 100% !important;
              height: auto !important;
              padding: 0 24px !important;
            }
            .heading {
              width: 100% !important;
              height: auto !important;
              font-size: clamp(32px, 8vw, 50px) !important;
              line-height: 110% !important;
            }
            .description {
              font-size: clamp(16px, 4vw, 24px) !important;
              line-height: 130% !important;
            }
          }
        `}</style>

        <div className="about-section max-w-7xl mx-auto h-full flex items-center justify-center">
          {/* Text Container */}
          <div
            className="text-container flex flex-col items-center justify-center gap-5"
          >
            {/* Heading */}
            <h1
              className="heading text-center"
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Redefining Measurement Through AI
            </h1>

            {/* Description */}
            <p
              className="description text-center text-gray-600"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              We`&apos;`re building intelligent tools that make precision accessible to everyone — from designers and engineers
              to everyday users through smart, image-based measurement technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}