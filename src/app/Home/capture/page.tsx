

// "use client"

// import { useRouter } from "next/navigation"

// const ReadyToCapture = () => {
//   const router = useRouter()

//   const handleUploadClick = () => {
//     router.push("/upload-image")
//   }

//   return (
//     <div
//       className="bg-[#5D2A8B] text-white shadow-md relative"
//       style={{
//         width: "1255px",
//         height: "236px",
//         borderRadius: "20px",
//         left: "92px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         paddingLeft: "80px",
//         paddingRight: "72px",
//       }}
//     >
//       <div
//         className="flex flex-col items-center justify-center"
//         style={{
//           width: "605px",
//           height: "86px",
//           gap: "16px",
//         }}
//       >
//         <h2
//           style={{
//             fontFamily: "Monument Extended, sans-serif",
//             fontSize: "36px",
//             fontWeight: 400,
//             lineHeight: "100%",
//             textAlign: "center",
//             width: "605px",
//             height: "43px",
//           }}
//         >
//           Ready to capture now?
//         </h2>

//         <p
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontSize: "20px",
//             fontWeight: 400,
//             lineHeight: "100%",
//             textAlign: "center",
//             width: "478px",
//             height: "27px",
//             opacity: 0.9,
//           }}
//         >
//           Experience instant, accurate measurements with AI.
//         </p>
//       </div>

//       <button
//         onClick={handleUploadClick}
//         onMouseEnter={(e) => {
//           ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)"
//           ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)"
//           ;(e.currentTarget as HTMLButtonElement).style.border = "2px solid #C8A2E0"
//         }}
//         onMouseLeave={(e) => {
//           ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"
//           ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)"
//           ;(e.currentTarget as HTMLButtonElement).style.border = "2px solid transparent"
//         }}
//         onMouseDown={(e) => {
//           ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)"
//         }}
//         onMouseUp={(e) => {
//           ;(e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)"
//         }}
//         className="inline-flex items-center justify-center bg-white text-[#5D2A8B] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
//         style={{
//           width: "154.31px",
//           height: "41.8px",
//           paddingLeft: "18.65px",
//           paddingRight: "18.65px",
//           paddingTop: "9.95px",
//           paddingBottom: "9.95px",
//           borderRadius: "29.84px",
//           transformOrigin: "center",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//           border: "2px solid transparent",
//           gap: "14.92px",
//           flexShrink: 0,
//         }}
//       >
//         <span
//           style={{
//             fontSize: "14px",
//             lineHeight: "100%",
//             fontFamily: "Manrope, sans-serif",
//             fontWeight: 600,
//           }}
//         >
//           Upload Image
//         </span>
//       </button>
//     </div>
//   )
// }

// export default ReadyToCapture
"use client"

import { useRouter } from "next/navigation"

const ReadyToCapture = () => {
  const router = useRouter()

  const handleUploadClick = () => {
    router.push("/upload-image")
  }

  return (
    <div
      className="bg-[#5D2A8B] text-white shadow-md relative"
      style={{
        width: "1255px",
        height: "236px",
        borderRadius: "20px",
        left: "92px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "80px",
        paddingRight: "72px",
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{
          width: "605px",
          height: "auto",
          gap: "16px",
        }}
      >
        <h2
          style={{
            fontFamily: "Monument Extended, sans-serif",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: "100%",
            textAlign: "center",
            width: "100%",
            margin: 0,
          }}
        >
          Ready to capture now?
        </h2>

        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "100%",
            textAlign: "center",
            width: "100%",
            opacity: 0.9,
            margin: 0,
          }}
        >
          Experience instant, accurate measurements with AI.
        </p>
      </div>

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
          width: "154.31px",
          height: "41.8px",
          padding: "9.95px 18.65px",
          borderRadius: "29.84px",
          transformOrigin: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "2px solid transparent",
          gap: "14.92px",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "14px",
            lineHeight: "100%",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
          }}
        >
          Upload Image
        </span>
      </button>
    </div>
  )
}

export default ReadyToCapture
