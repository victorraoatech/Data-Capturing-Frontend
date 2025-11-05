// import { memo } from 'react';

// const Audience = () => {
//   const targetAudience = [
//     { id: 1, image: '/lucas-favre-v8JtKauvvDk-unsplash 1.png', alt: 'Business Professional', title: 'Fashion designer', tall: true},
//     { id: 2, image: '/thisisengineering-CUA-_IGpXXo-unsplash 1.png', alt: 'Engineer/Technician', title: 'Engineer/Technician', tall: false},
//     { id: 3, image: '/roberto-cortese-ejhjSZKTeeg-unsplash 1.png', alt: 'Online Retailer', title: 'Online Retailer', tall: false },
//     { id: 4, image: '/collov-home-design-js8AQlw71HA-unsplash 1.png', alt: 'Interior Designers', title: 'Interior Designers', tall: false },
//     { id: 5, image: '/image 7.png', alt: 'Fitness Coaches', title: 'Fitness Coaches', tall: false },
//     { id: 6, image: '/image 8.png', alt: 'Health & Wellness', title: 'Individuals- You', tall: true },
//   ];

//   return (
//     <div className="min-h-screen bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Who is it for Section */}
//         <section className="mb-20">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800 font-monument font-normal">
//             Who is it for
//           </h2>
          
//           <p className="text-center text-gray-600 text-lg mb-12">
//             Whether you design, build, or create, we help you measure smarter.
//           </p>
          
//           <div className="relative  rounded-3xl p-8 shadow-lg">
//             <div className="grid grid-cols-2 md:grid-cols-6 gap-4 auto-rows-auto font-manrope">
//               {targetAudience.map((person) => (
//                 <div 
//                   key={person.id}
//                   className={`
//                     ${person.tall ? 'row-span-2' : 'row-span-1'} 
//                     rounded-2xl overflow-hidden shadow-md 
//                     transition-all duration-500 ease-out
//                     relative group
//                     hover:scale-105 hover:shadow-2xl hover:z-10
//                   `}
//                 >
//                   <img 
//                     src={person.image} 
//                     alt={person.alt}
//                     className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
//                   />
//                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                     <p className="text-white font-medium text-sm">{person.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default memo(Audience);
import { memo } from 'react';

const Audience = () => {
  const targetAudience = [
    { id: 1, image: '/lucas-favre-v8JtKauvvDk-unsplash 1.png', alt: 'Business Professional', title: 'Fashion designer', tall: true},
    { id: 2, image: '/thisisengineering-CUA-_IGpXXo-unsplash 1.png', alt: 'Engineer/Technician', title: 'Engineer/Technician', tall: false},
    { id: 3, image: '/roberto-cortese-ejhjSZKTeeg-unsplash 1.png', alt: 'Online Retailer', title: 'Online Retailer', tall: false },
    { id: 4, image: '/collov-home-design-js8AQlw71HA-unsplash 1.png', alt: 'Interior Designers', title: 'Interior Designers', tall: false },
    { id: 5, image: '/image 7.png', alt: 'Fitness Coaches', title: 'Fitness Coaches', tall: false },
    { id: 6, image: '/image 8.png', alt: 'Health & Wellness', title: 'Individuals- You', tall: true },
  ];

  return (
    <div className="min-h-screen bg-white py-12 lg:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Who is it for Section */}
        <section className="mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 text-gray-800 font-monument font-normal">
            Who is it for
          </h2>
          
          <p className="text-center text-gray-600 text-lg mb-8 lg:mb-12">
            Whether you design, build, or create, we help you measure smarter.
          </p>
          
          <div className="relative rounded-3xl p-4 lg:p-8 shadow-lg">
            {/* Mobile horizontal scroll container */}
            <div className="lg:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4 w-max">
                {targetAudience.map((person) => (
                  <div 
                    key={person.id}
                    className={`
                      rounded-2xl overflow-hidden shadow-md 
                      transition-all duration-300 ease-out
                      relative group
                      flex-shrink-0
                      ${person.tall ? 'w-32 h-64' : 'w-32 h-32'}
                    `}
                  >
                    <img 
                      src={person.image} 
                      alt={person.alt}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white font-medium text-sm">{person.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop grid - exact original layout */}
            <div className="hidden lg:grid grid-cols-6 gap-4 auto-rows-auto font-manrope">
              {targetAudience.map((person) => (
                <div 
                  key={person.id}
                  className={`
                    ${person.tall ? 'row-span-2' : 'row-span-1'} 
                    rounded-2xl overflow-hidden shadow-md 
                    transition-all duration-500 ease-out
                    relative group
                    hover:scale-105 hover:shadow-2xl hover:z-10
                  `}
                >
                  <img 
                    src={person.image} 
                    alt={person.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium text-sm">{person.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default memo(Audience);