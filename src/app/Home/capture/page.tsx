

// "use client"

// import { useRouter } from "next/navigation"

// const ReadyToCapture = () => {
//   const router = useRouter()

//   const handleUploadClick = () => {
//     router.push("/upload-image")
//   }

//   return (
//     <div
//       className="bg-[#5D2A8B] text-white shadow-md relative mx-auto"
//       style={{
//         width: "100%",
//         maxWidth: "1255px",
//         height: "auto",
//         minHeight: "236px",
//         borderRadius: "20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "40px 20px",
//       }}
//     >
//       <style jsx>{`
//         @media (min-width: 768px) {
//           .capture-container {
//             padding: 0 72px 0 80px !important;
//             min-height: 236px !important;
//             flex-direction: row !important;
//             gap: 0 !important;
//           }
//         }
//         @media (max-width: 767px) {
//           .capture-container {
//             flex-direction: column !important;
//             gap: 32px !important;
//             padding: 32px 24px !important;
//           }
//         }
//       `}</style>

//       <div
//         className="capture-container"
//         style={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//         }}
//       >
//         <div
//           className="flex flex-col items-center justify-center text-center"
//           style={{
//             width: "100%",
//             maxWidth: "605px",
//             height: "auto",
//             gap: "16px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "Monument Extended, sans-serif",
//               fontSize: "clamp(24px, 5vw, 36px)",
//               fontWeight: 400,
//               lineHeight: "100%",
//               textAlign: "center",
//               width: "100%",
//               margin: 0,
//             }}
//           >
//             Ready to capture now?
//           </h2>

//           <p
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontSize: "clamp(16px, 3vw, 20px)",
//               fontWeight: 400,
//               lineHeight: "100%",
//               textAlign: "center",
//               width: "100%",
//               opacity: 0.9,
//               margin: 0,
//             }}
//           >
//             Experience instant, accurate measurements with AI.
//           </p>
//         </div>

//         <button
//           onClick={handleUploadClick}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "scale(1.06)"
//             e.currentTarget.style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)"
//             e.currentTarget.style.border = "2px solid #C8A2E0"
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "scale(1)"
//             e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
//             e.currentTarget.style.border = "2px solid transparent"
//           }}
//           onMouseDown={(e) => {
//             e.currentTarget.style.transform = "scale(0.98)"
//           }}
//           onMouseUp={(e) => {
//             e.currentTarget.style.transform = "scale(1.06)"
//           }}
//           className="inline-flex items-center justify-center bg-white text-[#5D2A8B] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
//           style={{
//             width: "154.31px",
//             height: "41.8px",
//             padding: "9.95px 18.65px",
//             borderRadius: "29.84px",
//             transformOrigin: "center",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             border: "2px solid transparent",
//             gap: "14.92px",
//             flexShrink: 0,
//           }}
//         >
//           <span
//             style={{
//               fontSize: "14px",
//               lineHeight: "100%",
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 600,
//             }}
//           >
//             Upload Image
//           </span>
//         </button>
//       </div>
//     </div>
//   )
// }

// export default ReadyToCapture


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
      className="relative bg-[#5D2A8B] text-white overflow-hidden w-full"
      style={{
        maxWidth: "1441px",
        minHeight: "417px",
        marginBottom: "200px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "0 20px",
      }}
    >
      {/* Inner Container */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          padding: "95px 20px 20px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "605px",
            width: "100%",
          }}
        >
          {/* H1 and P Tag Container */}
          <div 
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
            Upload Image
          </button>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <div 
        className="absolute hidden md:block"
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