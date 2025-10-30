
import Image from "next/image";
const HeroBanner = () => {
  return (
    <div className="relative  bg-[#F4EFFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-8 md:py-12">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
           
            
          <h1 className="font-monument font-normal text-[50px] leading-[100%] text-gray-900 mb-4">
  Smart features
  <br />
  for effortless
  <br />
  precision
</h1>

            
            <p className="text-gray-500 text-sm md:text-base mb-6 max-w-md">
              Experience AI-powered tools that make measuring faster, easier, and more accurate than ever
            </p>
            
            <button className="bg-[#5D2A8B] hover:bg-[#F4EFFA]  hover:text-[#5D2A8B]   text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Try it Now
            </button>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex flex-1 items-center justify-center relative">
            <div className="relative w-72 h-72">
  
              
              {/* Main Character Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <Image
                 alt=""
                 src="/assets/freepik__background__98107 1.png"
                 width={713}
                 height={520}
                />
                <Image
                 alt=""
                 src="/assets/Get Inspired Streamline Bangalore - Free.png"
                 width={713}
                 height={520}
                />
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default HeroBanner;