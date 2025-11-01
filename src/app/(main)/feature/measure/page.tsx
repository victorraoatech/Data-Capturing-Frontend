
import Image from "next/image";
const Measurement = () => {
  return (
    <div className="relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-8 md:py-12">

              <div className="hidden md:flex flex-1 items-center justify-center relative">
            <div className="relative w-72 h-72">
  
              
            
              <div className="absolute inset-0 flex items-center justify-center -ml-8">
                 <Image
                 alt=""
                 src="/assets/Frame 1707479253.png"
                 width={602}
                 height={550}
                />
               
               
                
              </div>
            </div>
          </div>
          
         
          <div className="flex-1 max-w-lg">
           
            
          <h1 className="font-monument font-normal text-[50px] leading-[100%] text-gray-900 mb-4">
 Built to measure
 
  <br />
  anything, anywhere
</h1>

            
            <p className=" font-manrope font-normal text-gray-500 text-sm md:text-base mb-6 max-w-md">
             From human bodies to complex objects and interior spaces, Data Capturing adapts seamlessly — analyzing shape, proportion, and scale in one intelligent scan.
            </p>
            
            
          </div>
        
        </div>
      </div>
      
    </div>
  );
};

export default Measurement;