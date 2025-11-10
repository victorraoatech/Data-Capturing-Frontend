// "use client"
// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// import Navbar from "../components/navbar";
// import Hero from "@/app/Home/hero/page"
// import { UserSidebar } from "../components/sidebar";
// import HowItWorks from "./how-it-works/page";
// import Features from "@/app/Home/features/page"
// import Audience from "./users/page";
// import Footer from "./footer/page";
// import ReadyToCapture from "./capture/page";
// import AnimatedAISection from "./animatedAi-section/page";





// const HomePage = () => {
//     const router = useRouter();
//  const handleUploadClick = () => {
//     router.push('/upload-image');
//   };
  
//     return (
//         <div className="flex flex-col min-h-screen bg-gray-100">
//               <Navbar />
          
//             <UserSidebar onShow={false} setShow={function (value: React.SetStateAction<boolean>): void {
//                 throw new Error("Function not implemented.");
//             } }/>
            
//             <main className="flex-grow">
//               <Hero/>

//                <HowItWorks/>
//                <Features/>

//                 {/* Testimonial */}
//                <section className="relative bg-[#5D2A8B] text-white py-16 overflow-hidden">
//   <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center relative z-10">
//     {/* Text Content */}
//     <h2 className="text-3xl font-bold mb-4">
//       Ready to capture now?
//     </h2>
//     <p className="mb-8 text-base">
//       Experience instant, accurate measurements with AI.
//     </p>

//     {/* Upload Area */}
//     <div className="flex flex-col items-center justify-center gap-2">
//      <button
//   onClick={handleUploadClick}
//   onMouseEnter={(e) => {
//     (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
//     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 14px 36px rgba(255,255,255,0.3)";
//     (e.currentTarget as HTMLButtonElement).style.border = "2px solid #C8A2E0";
//   }}
//   onMouseLeave={(e) => {
//     (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
//     (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
//     (e.currentTarget as HTMLButtonElement).style.border = "2px solid transparent";
//   }}
//   onMouseDown={(e) => {
//     (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
//   }}
//   onMouseUp={(e) => {
//     (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.06)";
//   }}
//   className="inline-flex items-center justify-center bg-white text-[#5D2A8B] font-semibold transition-all duration-300 ease-in-out cursor-pointer"
//   style={{
//     paddingLeft: "24px",
//     paddingRight: "24px",
//     paddingTop: "10px",
//     paddingBottom: "10px",
//     borderRadius: "9999px",
//     transformOrigin: "center",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     border: "2px solid transparent",
//   }}
// >
//   <span
//     style={{
//       fontSize: "14px",
//       lineHeight: "100%",
//       fontFamily: "Manrope, sans-serif",
//       fontWeight: 600,
//     }}
//   >
//     Upload Image
//   </span>
// </button>
//     </div>
//   </div>

//   <div className="absolute top-4 right-8">
//     <Image
//       src="/Warm.png"
//       alt="silhouette"
//       width={140}
//       height={220}
//       className="object-contain"
//     />
//   </div>
// </section>


//                 <Audience/>
//                 <AnimatedAISection/>
//            {/* <section className="bg-[#F4EFFA] py-16">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="flex items-center justify-between gap-12">
          
//           <div className="flex-1">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 font-monument font-normal">
//               Powered by AI technology
//             </h2>
//             <p className=" font-manrope font-normal text-[#6E6E6EB2] text-lg leading-relaxed">
//               Our intelligent system uses computer vision and machine learning to detect shapes, calculate proportions, and deliver measurements with remarkable accuracy, all from the images uploaded.
//             </p>
            
           
//             <div className="mt-8 space-y-3">
//               <div className="flex items-center gap-3 bg-[#E4D8F380] rounded-lg w-[78%] px-2">
//                 <p className="font-manrope font-normal text-[#6E6E6EB2]">Image upload → AI analysis → Accurate measurements</p>
//               </div>
//             </div>
//           </div>

          
//           <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
           
//             <Image
//               src='/Rss Feed Streamline Ultimate Regular - Free (4).png'
//               alt="AI Icon"
//               width={70}
//               height={70}
//               className="absolute left-0 top-1/2 -translate-y-1/2 opacity-80"
//             />
            
          
//             <div className="relative z-10">
//               <Image
//                 src='/Frame.png'
//                 alt="AI Technology Visualization"
//                 width={400}
//                 height={400}
//                 className="rounded-full"
//               />
//             </div>
            
           
//             <Image
//               src='/Rss Feed Streamline Ultimate Regular - Free (5).png'
//               alt="AI Icon"
//               width={70}
//               height={70}
//               className="absolute right-0 top-1/2 -translate-y-1/2 opacity-80"
//             />
//           </div>
//         </div>
//       </div>
//     </section> */}
//             </main>
//              <ReadyToCapture/>
//               <Footer/>
             
//         </div>
//     );
// };

// export default HomePage;


"use client"
import React from "react";
import Navbar from "../components/navbar";
import Hero from "@/app/Home/hero/page"
import HowItWorks from "./how-it-works/page";
import Features from "@/app/Home/features/page"
import Audience from "./users/page";
import Footer from "./footer/page";
import AnimatedAISection from "./animatedAi-section/page";
import CallToActionSection from "./capture/page";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full">
        <div className="w-full max-w-none">
          <Hero/>
          <HowItWorks/>
          <Features/>
          <CallToActionSection/>
          <Audience/>
          <AnimatedAISection/>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default HomePage;