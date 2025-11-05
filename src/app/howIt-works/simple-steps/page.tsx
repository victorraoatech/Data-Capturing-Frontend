



// import Image from "next/image";
// import { memo } from "react";

// const SimpleSteps = () => {
//   return (
//     <section className="flex flex-col items-center bg-white py-16">
//       {/* Header layout (above the inner container) */}
//       <div
//         className="text-center"
//         style={{
//           width: "566px",
//           height: "129px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         <div
//           style={{
//             width: "556px",
//             height: "33px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "Monument Extended, sans-serif",
//               fontWeight: 400,
//               fontStyle: "normal",
//               fontSize: "30px",
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               textAlign: "center",
//               margin: 0,
//               color: "#000",
//               textTransform: "none",
//             }}
//           >
//             Simple Steps, Smart
//             <br />
//             Results
//           </h2>
//         </div>

//         <div
//           style={{
//             width: "556px",
//             height: "27px",
//             marginTop: "16px",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "Manrope, sans-serif",
//               fontWeight: 400,
//               fontStyle: "normal",
//               fontSize: "14px",
//               lineHeight: "100%",
//               letterSpacing: "0%",
//               textAlign: "center",
//               color: "#7A7A7A",
//             }}
//           >
//             Just upload, wait a moment, and let our AI do the rest.
//           </p>
//         </div>
//       </div>

//       {/* Outer wrapper to position chevrons outside */}
//     <div
//   className="relative mt-8 flex items-center justify-center"
//   style={{ width: "1230px", height: "519px" }}
// >
//   {/* LEFT (PREV) circular nav button — outside & centered */}
//   <button
//     aria-label="previous"
//     className="absolute flex items-center justify-center"
//     style={{
//       left: "56px", // closer to the card
//       top: "50%",
//       transform: "translateY(-50%)",
//       width: "84px",
//       height: "84px",
//       borderRadius: "9999px",
//       background: "rgba(238,176,254,0.12)",
//       opacity: 0.9,
//       border: "none",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: 0,
//       zIndex: 20,
//     }}
//   >
//     <Image
//       src="/assets/SVG (1).png"
//       alt="previous"
//       width={32}
//       height={32}
//       style={{ objectFit: "contain" }}
//     />
//   </button>

//   {/* MAIN CENTER CONTAINER */}
//   <div
//     style={{
//       width: "998px",
//       height: "519px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       position: "relative",
//       zIndex: 1,
//     }}
//   >
//     {/* Inner white bordered card */}
//     <div
//       style={{
//         width: "880px",
//         height: "340px",
//         borderRadius: "12px",
//         background: "#fff",
//         border: "1px solid rgba(238,176,254,0.6)",
//         boxShadow: "0 8px 30px rgba(93,42,139,0.06)",
//         display: "flex",
//         alignItems: "center",
//         padding: "28px 36px",
//         position: "relative",
//       }}
//     >
//       {/* Step badge */}
//       <div
//         style={{
//           position: "absolute",
//           top: "20px",
//           left: "20px",
//           width: "63px",
//           height: "31px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           borderRadius: "10px",
//           background: "rgba(238,176,254,0.12)",
//           color: "#6B21A8",
//           fontFamily: "Manrope, sans-serif",
//           fontSize: "14px",
//           opacity: 0.6,
//           padding: "6px 12px",
//         }}
//       >
//         Step 1
//       </div>

//       {/* Left illustration area */}
//       <div
//         style={{
//           width: "480px",
//           height: "240px",
//           flexShrink: 0,
//         }}
//       >
//         <div style={{ position: "relative", width: "100%", height: "100%" }}>
//           <Image
//             src="/assets/Frame 1707479275.png"
//             alt="step illustration"
//             fill
//             style={{ objectFit: "contain" }}
//             sizes="480px"
//           />
//         </div>
//       </div>

//       {/* Right text area */}
//       <div style={{ marginLeft: "36px", width: "340px", textAlign: "left" }}>
//         <h3
//           style={{
//             fontFamily: "Monument Extended, sans-serif",
//             fontSize: "24px",
//             fontWeight: 400,
//             lineHeight: "100%",
//             margin: 0,
//             color: "#111827",
//           }}
//         >
//           Upload Your Image
//         </h3>
//         <p
//           style={{
//             fontFamily: "Manrope, sans-serif",
//             fontSize: "16px",
//             marginTop: "12px",
//             color: "#6B7280",
//             lineHeight: "1.4",
//           }}
//         >
//           Start by uploading a clear image of yourself or an object.
//         </p>
//       </div>

//       {/* Decorative warm icon */}
//       <div
//         style={{
//           position: "absolute",
//           top: "22px",
//           right: "20px",
//           width: "40px",
//           height: "40px",
//           opacity: 0.9,
//         }}
//         aria-hidden
//       >
//         <div style={{ position: "relative", width: "100%", height: "56.77px" }}>
//           <Image
//             src="/Warm.png"
//             alt="decor"
//             fill
//             style={{ objectFit: "contain" }}
//             sizes="40px"
//           />
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* RIGHT (NEXT) circular nav button — outside & centered */}
//   <button
//     aria-label="next"
//     className="absolute flex items-center justify-center"
//     style={{
//       right: "56px",
//       top: "50%",
//       transform: "translateY(-50%)",
//       width: "84px",
//       height: "84px",
//       borderRadius: "9999px",
//       background: "rgba(238,176,254,0.12)",
//       opacity: 0.9,
//       border: "none",
//       cursor: "pointer",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: 0,
//       zIndex: 20,
//     }}
//   >
//     <Image
//       src="/assets/SVG.png"
//       alt="next"
//       width={36}
//       height={32}
//       style={{ objectFit: "contain", color:"#5D2A8B" }}
//     />
//   </button>
// </div>

//     </section>
//   );
// };

// export default memo(SimpleSteps);

"use client"
import Image from "next/image";
import { memo, useState } from "react";

const steps = [
  {
    step: 1,
    title: "Upload Your Image",
    description: "Start by uploading a clear image of yourself or an object.",
    image: "/assets/Frame 1707479275.png",
  },
  {
    step: 2,
    title: "AI Processing",
    description: "Our AI analyzes the image and detects key points for measurement.",
    image: "/assets/Frame 1707479275.png", // Replace with actual image
  },
  {
    step: 3,
    title: "Get Results",
    description: "Receive accurate measurements in seconds.",
    image: "/assets/Frame 1707479275.png", // Replace with actual image
  },
];

const SimpleSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="flex flex-col items-center bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
        <h2 className="font-mono font-normal text-2xl sm:text-3xl lg:text-4xl leading-tight text-black mb-4">
          Simple Steps, Smart
          <br />
          Results
        </h2>
        <p className="font-manrope font-normal text-sm sm:text-base text-gray-600">
          Just upload, wait a moment, and let our AI do the rest.
        </p>
      </div>

      {/* Mobile Step Indicators */}
      <div className="flex justify-center mb-6 lg:hidden">
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentStep ? "bg-purple-600" : "bg-gray-300"
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl">
        {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
        <button
          aria-label="previous step"
          onClick={prevStep}
          className="hidden lg:flex absolute left-2 lg:left-4 xl:left-8 top-1/2 transform -translate-y-1/2 
                     items-center justify-center w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 
                     rounded-full bg-purple-50 hover:bg-purple-100 transition-colors 
                     border-none cursor-pointer z-20"
        >
          <Image
            src="/assets/SVG (1).png"
            alt="previous"
            width={20}
            height={20}
            className="lg:w-6 lg:h-6"
            style={{ objectFit: "contain" }}
          />
        </button>

        {/* Step Content */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl lg:max-w-4xl bg-white rounded-xl border border-purple-200 
                        shadow-lg lg:shadow-xl p-4 sm:p-6 lg:p-8 relative">
            {/* Step Badge */}
            <div className="absolute top-3 lg:top-4 left-3 lg:left-4 px-3 py-1.5 
                          bg-purple-50 text-purple-800 rounded-lg font-manrope text-xs lg:text-sm">
              Step {steps[currentStep].step}
            </div>

            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mt-8 lg:mt-4">
              {/* Image/Illustration */}
              <div className="w-full lg:w-1/2 h-48 sm:h-56 lg:h-64 relative">
                <Image
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h3 className="font-mono font-normal text-xl sm:text-2xl lg:text-3xl 
                             text-gray-900 mb-3 lg:mb-4">
                  {steps[currentStep].title}
                </h3>
                <p className="font-manrope font-normal text-sm sm:text-base lg:text-lg 
                            text-gray-600 leading-relaxed">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>

            {/* Decorative Icon */}
            <div className="absolute top-3 lg:top-4 right-3 lg:right-4 w-8 h-8 lg:w-10 lg:h-10 opacity-60">
              <Image
                src="/Warm.png"
                alt="decorative icon"
                fill
                style={{ objectFit: "contain" }}
                sizes="40px"
              />
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          aria-label="next step"
          onClick={nextStep}
          className="hidden lg:flex absolute right-2 lg:right-4 xl:right-8 top-1/2 transform -translate-y-1/2 
                     items-center justify-center w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 
                     rounded-full bg-purple-50 hover:bg-purple-100 transition-colors 
                     border-none cursor-pointer z-20"
        >
          <Image
            src="/assets/SVG.png"
            alt="next"
            width={20}
            height={20}
            className="lg:w-6 lg:h-6"
            style={{ objectFit: "contain", color: "#5D2A8B" }}
          />
        </button>

        {/* Mobile Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6 lg:hidden">
          <button
            onClick={prevStep}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 
                       border-none cursor-pointer"
          >
            <Image
              src="/assets/SVG (1).png"
              alt="previous"
              width={16}
              height={16}
              style={{ objectFit: "contain" }}
            />
          </button>
          <button
            onClick={nextStep}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-50 
                       border-none cursor-pointer"
          >
            <Image
              src="/assets/SVG.png"
              alt="next"
              width={16}
              height={16}
              style={{ objectFit: "contain", color: "#5D2A8B" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(SimpleSteps);