// import type React from "react"
// import Image from "next/image"

// interface FeatureCard {
//   icon: React.ReactNode
//   title: string
//   description: string
// }

// const features: FeatureCard[] = [
//   {
//     icon: (
//       <Image
//         src="/assets/fram66.png"
//         alt="Machine Learning"
//         width={60}
//         height={60}
//         style={{ objectFit: "contain" }}
//       />
//     ),
//     title: "Machine Learning Algorithms",
//     description: "Our system learns from thousands of data samples to improve measurement accuracy over time.",
//   },
//   {
//     icon: (
//       <Image
//         src="/assets/Frame 249.png"
//         alt="Computer Vision"
//         width={60}
//         height={60}
//         style={{ objectFit: "contain" }}
//       />
//     ),
//     title: "Computer Vision Detection",
//     description: "Detects edges, contours, and reference points in your image to calculate dimensions precisely.",
//   },
//   {
//     icon: (
//       <Image
//         src="/assets/fram333.png"
//         alt="Smart Calibration"
//         width={60}
//         height={60}
//         style={{ objectFit: "contain" }}
//       />
//     ),
//     title: "Smart Calibration",
//     description:
//       "Uses object or body ratios and context clues (like posture or object placement) to auto-correct angles and perspective.",
//   },
//   {
//     icon: (
//       <Image
//         src="/assets/Frame 249 (1).png"
//         alt="Data Privacy"
//         width={60}
//         height={60}
//         style={{ objectFit: "contain" }}
//       />
//     ),
//     title: "Data Privacy",
//     description: "All processing happens securely – your uploaded images are not stored or shared.",
//   },
// ]

// export function AIFeaturesSection() {
//   return (
//     <section className="w-full py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex flex-col items-center justify-center mb-16 gap-4">
//           <h2 className="text-4xl font-bold text-center text-foreground max-w-2xl">
//             Built on Advanced AI & Computer Vision
//           </h2>
//           <p className="text-center text-muted-foreground max-w-2xl text-base">
//             Our technology analyzes every pixel, shape, and proportion – delivering accurate measurements without manual
//             input.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function FeatureCard({ icon, title, description }: FeatureCard) {
//   return (
//     <div className="flex flex-col items-center gap-4">
//       {/* Icon Container */}
//       <div className=" rounded-[100px] bg-purple-100 flex items-center justify-center flex-shrink-0">
//         {icon}
//       </div>

//       {/* Content */}
//       <div className="flex flex-col items-center gap-2">
//         <h3 className="text-lg font-semibold text-foreground text-center">{title}</h3>
//         <p className="text-sm text-muted-foreground text-center leading-relaxed">{description}</p>
//       </div>
//     </div>
//   )
// }




import type React from "react"
import Image from "next/image"

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: (
      <Image
        src="/assets/fram66.png"
        alt="Machine Learning"
        width={60}
        height={60}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Machine Learning Algorithms",
    description: "Our system learns from thousands of data samples to improve measurement accuracy over time.",
  },
  {
    icon: (
      <Image
        src="/assets/Frame 249.png"
        alt="Computer Vision"
        width={60}
        height={60}
        // style={{ objectFit: "contain" }}
      />
    ),
    title: "Computer Vision Detection",
    description: "Detects edges, contours, and reference points in your image to calculate dimensions precisely.",
  },
  {
    icon: (
      <Image
        src="/assets/fram333.png"
        alt="Smart Calibration"
        width={60}
        height={60}
        // style={{ objectFit: "contain" }}
      />
    ),
    title: "Smart Calibration",
    description:
      "Uses object or body ratios and context clues (like posture or object placement) to auto-correct angles and perspective.",
  },
  {
    icon: (
      <Image
        src="/assets/Frame 249 (1).png"
        alt="Data Privacy"
        width={60}
        height={60}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Data Privacy",
    description: "All processing happens securely – your uploaded images are not stored or shared.",
  },
]

export function AIFeaturesSection() {
  return (
    <section 
      className="w-full flex items-center justify-center" 
      style={{ 
        paddingTop: "80px", 
        paddingBottom: "80px",
        paddingLeft: "72px",
        paddingRight: "72px",
      }}
    >
      <div 
        style={{
          width: "1296px",
          height: "637px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header Section */}
        <div 
          className="flex flex-col items-center justify-center"
          style={{
            width: "566px",
            height: "156px",
            gap: "16px",
            marginBottom: "100px",
          }}
        >
          <h2 
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#000",
              width: "566px",
              height: "86px",
              margin: 0,
            }}
          >
            Built on Advanced AI & Computer Vision
          </h2>
          <p 
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#6E6E6E",
              width: "566px",
              height: "54px",
              margin: 0,
            }}
          >
            Our technology analyzes every pixel, shape, and proportion — delivering accurate measurements without manual input.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          style={{
            width: "1296px",
            height: "381px",
            display: "flex",
            gap: "28px",
            justifyContent: "center",
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description, index }: FeatureCard & { index: number }) {
  // Different heights for cards based on index
  const cardHeight = index === 0 ? "381px" : index === 1 ? "354px" : index === 2 ? "381px" : "354px";
  const contentHeight = index === 0 ? "202px" : index === 1 ? "175px" : index === 2 ? "202px" : "175px";
  const gapSize = index === 0 ? "30px" : index === 1 ? "30px" : index === 2 ? "30px" : "30px";
  const titleGap = index === 0 ? "18px" : index === 1 ? "18px" : index === 2 ? "18px" : "18px";
  
  return (
    <div 
      className="flex flex-col items-center"
      style={{
        width: "303px",
        height: cardHeight,
        gap: gapSize,
      }}
    >
      {/* Icon Container */}
      <div 
        className=""
        style={{
          width: "150x",
          height: "149px",
          padding:"13px"
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div 
        className="flex flex-col items-center"
        style={{
          width: "303px",
          height: contentHeight,
          gap: titleGap,
        }}
      >
        <h3 
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 500,
            fontSize: "28px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#000",
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p 
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 300,
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
            color: "#6E6E6EB2",
            width: "303px",
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default AIFeaturesSection