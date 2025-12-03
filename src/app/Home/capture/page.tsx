


// "use client"

// import { useRouter } from "next/navigation"
// import Image from "next/image"

// const CallToActionSection = () => {
//   const router = useRouter()

//   const handleUploadClick = () => {
//     router.push("/upload-image")
//   }

//   return (
//     <section 
//       className="relative bg-[#5D2A8B] text-white overflow-hidden w-full"
//       style={{
//         maxWidth: "1441px",
//         minHeight: "417px",
//         marginBottom: "200px",
//         marginLeft: "auto",
//         marginRight: "auto",
//         padding: "0 20px",
//       }}
//     >
//       {/* Inner Container */}
//       <div 
//         className="absolute inset-0 flex items-center justify-center"
//         style={{
//           padding: "95px 20px 20px 20px",
//         }}
//       >
//         <div
//           style={{
//             maxWidth: "605px",
//             width: "100%",
//           }}
//         >
//           {/* H1 and P Tag Container */}
//           <div 
//             style={{
//               width: "100%",
//               maxWidth: "605px",
//               gap: "16px",
//               marginBottom: "32px",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <h2 
//               style={{
//                 fontFamily: "Monument Extended",
//                 fontWeight: 400,
//                 fontSize: "clamp(24px, 5vw, 36px)",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#FFFFFF",
//                 width: "100%",
//                 margin: 0,
//               }}
//             >
//               Ready to capture now?
//             </h2>
//             <p 
//               style={{
//                 fontFamily: "Manrope",
//                 fontWeight: 400,
//                 fontSize: "clamp(16px, 3vw, 20px)",
//                 lineHeight: "100%",
//                 letterSpacing: "0%",
//                 textAlign: "center",
//                 color: "#FFFFFFB2",
//                 width: "100%",
//                 maxWidth: "532px",
//                 margin: 0,
//               }}
//             >
//               Experience instant, accurate measurements with AI.
//             </p>
//           </div>

//           {/* Upload Button */}
//           <div className="flex justify-center">
//           <button
//             onClick={handleUploadClick}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "scale(1.06)"
//               e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)"
//               e.currentTarget.style.border = "2px solid #C8A2E0"
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "scale(1)"
//               e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
//               e.currentTarget.style.border = "2px solid transparent"
//             }}
//             onMouseDown={(e) => {
//               e.currentTarget.style.transform = "scale(0.98)"
//             }}
//             onMouseUp={(e) => {
//               e.currentTarget.style.transform = "scale(1.06)"
//             }}
//             className="inline-flex items-center justify-center bg-white text-[#5D2A8B] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
//             style={{
//               paddingLeft: "24px",
//               paddingRight: "24px",
//               paddingTop: "10px",
//               paddingBottom: "10px",
//               borderRadius: "9999px",
//               transformOrigin: "center",
//               boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//               border: "2px solid transparent",
//               fontFamily: "Manrope",
//               fontWeight: 600,
//               fontSize: "16px",
//             }}
//           >
//             Capture Image
//           </button>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Image */}
//       <div 
//         className="absolute hidden md:block"
//         style={{
//           top: "4px",
//           right: "32px",
//         }}
//       >
//         <Image
//           src="/Warm.png"
//           alt="silhouette"
//           width={140}
//           height={220}
//           className="object-contain"
//         />
//       </div>
//     </section>
//   )
// }

// export default CallToActionSection


"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"

const CallToActionSection = () => {
  const router = useRouter()

  const handleUploadClick = () => {
    router.push("/upload-image")
  }

  return (
    <section 
      className="relative bg-[#5D2A8B] text-white overflow-hidden w-full mobile-cta-section"
      style={{
        maxWidth: "1441px",
        minHeight: "417px",
        marginBottom: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 20px",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-cta-section {
            height: 367px !important;
            min-height: 367px !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
          }
          .cta-inner-container {
            padding: 102px 0 20px 39px !important;
            align-items: flex-start !important;
          }
          .cta-content-wrapper {
            max-width: 311px !important;
          }
          .cta-text-container {
            gap: 16px !important;
            margin-bottom: 24px !important;
          }
          .cta-heading {
            font-size: 24px !important;
            line-height: 100% !important;
            width: 311px !important;
          }
          .cta-description {
            font-size: 16px !important;
            line-height: 100% !important;
            width: 311px !important;
            color: #FFFFFFB2 !important;
          }
          .cta-decorative-image {
            width: 80px !important;
            height: 45.41px !important;
            top: -13px !important;
            left: 319px !important;
            right: auto !important;
          }
          .cta-decorative-image img {
            width: 80px !important;
            height: 45.41px !important;
            transform: rotate(52.18deg) !important;
          }
        }
      `}</style>

      {/* Inner Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center cta-inner-container"
        style={{
          padding: "95px 20px 20px 20px",
        }}
      >
        <div
          className="cta-content-wrapper"
          style={{
            maxWidth: "605px",
            width: "100%",
          }}
        >
          {/* H1 and P Tag Container */}
          <div 
            className="cta-text-container"
            style={{
              width: "100%",
              maxWidth: "605px",
              gap: "16px",
              marginBottom: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2 
              className="cta-heading"
              style={{
                fontFamily: "Monument Extended",
                fontWeight: 400,
                fontSize: "clamp(24px, 5vw, 36px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFF",
                width: "100%",
                margin: 0,
              }}
            >
              Ready to capture now?
            </h2>
            <p 
              className="cta-description"
              style={{
                fontFamily: "Manrope",
                fontWeight: 400,
                fontSize: "clamp(16px, 3vw, 20px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#FFFFFFB2",
                width: "100%",
                maxWidth: "532px",
                margin: 0,
              }}
            >
              Experience instant, accurate measurements with AI.
            </p>
          </div>

          {/* Upload Button */}
          <div className="flex justify-center">
            <button
              onClick={handleUploadClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)"
                e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)"
                e.currentTarget.style.border = "2px solid #C8A2E0"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
                e.currentTarget.style.border = "2px solid transparent"
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.98)"
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1.06)"
              }}
              className="inline-flex items-center justify-center bg-white text-[#5D2A8B] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
              style={{
                paddingLeft: "24px",
                paddingRight: "24px",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "9999px",
                transformOrigin: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "2px solid transparent",
                fontFamily: "Manrope",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Capture Image
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div 
        className="absolute cta-decorative-image"
        style={{
          top: "4px",
          right: "32px",
        }}
      >
        <Image
          src="/Warm.png"
          alt="silhouette"
          width={140}
          height={220}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default CallToActionSection