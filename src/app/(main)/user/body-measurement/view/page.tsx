
// "use client";

// import { Ruler } from "lucide-react";
// import { useState } from "react";

// interface BodySection {
//   sectionName: string;
//   size: number;
//   neck?: number;
//   customMeasurements: Array<{
//     name: string;
//     value: number;
//   }>;
// }

// export interface MeasurementInterface {
//   _id: string;
//   id: string;
//   title: string;
//   description: string;
//   bodySections: BodySection[];
//   pictures: string[];
//   pictureLinks: string[];
//   sim: string;
//   otherName: string;
//   status: "draft" | "active" | "archived";
//   createdAt: string;
//   updatedAt: string;
// }

// interface MeasurementViewProps {
//   measurement: MeasurementInterface;
//   onBack: () => void;
//   onEdit: (measurement: MeasurementInterface) => void;
// }

// // Unit conversion function for the view
// const convertMeasurement = (value: number, fromUnit: string, toUnit: string): number => {
//   const conversions: { [key: string]: number } = {
//     cm: 1,
//     inch: 2.54,
//     mm: 0.1,
//   };

//   if (conversions[fromUnit] && conversions[toUnit]) {
//     return (value * conversions[fromUnit]) / conversions[toUnit];
//   }
//   return value;
// };

// export default function MeasurementView({ measurement, onBack, onEdit }: MeasurementViewProps) {
//   const [conversionUnit, setConversionUnit] = useState<"cm" | "inch" | "mm">("cm");

//   const getDisplayValue = (value: number): string => {
//     if (conversionUnit === "cm") {
//       return `${value.toFixed(1)} cm`;
//     } else if (conversionUnit === "inch") {
//       const converted = convertMeasurement(value, "cm", "inch");
//       return `${converted.toFixed(1)} inch`;
//     } else {
//       const converted = convertMeasurement(value, "cm", "mm");
//       return `${converted.toFixed(1)} mm`;
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-6">
//           <button
//             onClick={onBack}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
//           >
//             <span>←</span>
//             Back to Measurements
//           </button>
          
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">
//                 {measurement.title}
//               </h1>
//               <p className="text-gray-600 mt-2">{measurement.description}</p>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <div className="flex items-center gap-2">
//                 <Ruler className="w-4 h-4 text-gray-600" />
//                 <select
//                   value={conversionUnit}
//                   onChange={(e) => setConversionUnit(e.target.value as "cm" | "inch" | "mm")}
//                   className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 >
//                   <option value="cm">cm</option>
//                   <option value="inch">inch</option>
//                   <option value="mm">mm</option>
//                 </select>
//               </div>
//               <button
//                 onClick={() => onEdit(measurement)}
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 Edit
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Basic Information */}
//         <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
//               <p className="text-gray-900">{measurement.id}</p>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">SIM</label>
//               <p className="text-gray-900">{measurement.sim}</p>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Other Name</label>
//               <p className="text-gray-900">{measurement.otherName}</p>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
//               <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                 measurement.status === 'active' 
//                   ? 'bg-green-100 text-green-800'
//                   : measurement.status === 'draft'
//                   ? 'bg-yellow-100 text-yellow-800'
//                   : 'bg-gray-100 text-gray-800'
//               }`}>
//                 {measurement.status}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Body Measurements */}
//         <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Body Measurements</h3>
//           <div className="space-y-4">
//             {measurement.bodySections.map((section, index) => (
//               <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-3">{section.sectionName}</h4>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
//                     <p className="text-gray-900 font-medium">{getDisplayValue(section.size)}</p>
//                   </div>
//                   {section.neck !== undefined && (
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Neck</label>
//                       <p className="text-gray-900 font-medium">{getDisplayValue(section.neck)}</p>
//                     </div>
//                   )}
//                   {section.customMeasurements.map((custom, customIndex) => (
//                     <div key={customIndex}>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">{custom.name}</label>
//                       <p className="text-gray-900 font-medium">{getDisplayValue(custom.value)}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pictures Section */}
//         {(measurement.pictures.length > 0 || measurement.pictureLinks.length > 0) && (
//           <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
//             <h3 className="text-lg font-semibold text-gray-800 mb-4">Pictures</h3>
//             <div className="space-y-4">
//               {measurement.pictures.length > 0 && (
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-2">Uploaded Pictures</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {measurement.pictures.map((picture, index) => (
//                       <div key={index} className="bg-gray-100 p-2 rounded-lg">
//                         <span className="text-sm text-gray-600">{picture}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {measurement.pictureLinks.length > 0 && (
//                 <div>
//                   <h4 className="font-medium text-gray-800 mb-2">Picture Links</h4>
//                   <div className="space-y-2">
//                     {measurement.pictureLinks.map((link, index) => (
//                       <a 
//                         key={index} 
//                         href={link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="block text-blue-600 hover:text-blue-800 break-all"
//                       >
//                         {link}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>
      page
    </div>
  )
}

export default page
