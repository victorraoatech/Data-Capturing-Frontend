// "use client";

// import { MeasurementInterface } from "@/app/(main)/user/body-measurement/page";


// import { Pencil, Trash2, Users, Ruler, Badge } from "lucide-react";
// import { Button } from "../ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";



// interface MobileMeasurementListProps {
//   measurements: MeasurementInterface[];
//   onEdit: (measurement: MeasurementInterface) => void;
//   onDelete: (id: string) => void;
//   onViewDetails: (measurement: MeasurementInterface) => void;
// }

// const MobileMeasurementList: React.FC<MobileMeasurementListProps> = ({
//   measurements,
//   onEdit,
//   onDelete,
//   onViewDetails,
// }) => {
//   return (
//     <div className="space-y-4">
//       {measurements.map((measurement) => (
//         <Card key={measurement._id} className="shadow-sm">
//           <CardHeader className="pb-3">
//             <div className="flex justify-between items-start">
//               <CardTitle className="text-lg font-semibold">
//                 {measurement.title}
//               </CardTitle>
//               {/* <Badge
//                 variant={
//                   measurement.status === "active"
//                     ? "default"
//                     : measurement.status === "draft"
//                     ? "secondary"
//                     : "outline"
//                 }
//                 className="ml-2"
//               >
//                 {measurement.status}
//               </Badge> */}
//             </div>
//             <p className="text-sm text-gray-600 mt-1">
//               {measurement.description}
//             </p>
//           </CardHeader>
//           <CardContent className="pt-0">
//             <div className="space-y-3">
//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">SIM:</span>
//                   <p className="text-gray-600">{measurement.sim}</p>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Other Name:</span>
//                   <p className="text-gray-600">{measurement.otherName}</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4 text-sm">
//                 <div>
//                   <span className="font-medium text-gray-700">Measurements:</span>
//                   <p className="text-gray-600">{measurement.measurements.length}</p>
//                 </div>
//                 <div>
//                   <span className="font-medium text-gray-700">Pictures:</span>
//                   <p className="text-gray-600">
//                     {measurement.pictures.length + measurement.pictureLinks.length}
//                   </p>
//                 </div>
//               </div>

//               <div className="text-sm">
//                 <span className="font-medium text-gray-700">Created:</span>
//                 {/* <p className="text-gray-600">{formatDate(measurement.createdAt)}</p> */}
//               </div>

//               <div className="flex justify-between pt-2 border-t border-gray-100">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => onViewDetails(measurement)}
//                   className="flex items-center gap-1"
//                 >
//                   <Users className="w-4 h-4" />
//                   Details
//                 </Button>
//                 <div className="flex gap-2">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => onEdit(measurement)}
//                     className="flex items-center gap-1"
//                   >
//                     <Pencil className="w-4 h-4" />
//                     Edit
//                   </Button>
//                   <Button
//                     variant="destructive"
//                     size="sm"
//                     onClick={() => onDelete(measurement._id)}
//                     className="flex items-center gap-1"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                     Delete
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       ))}

//       {measurements.length === 0 && (
//         <Card>
//           <CardContent className="py-8 text-center">
//             <Ruler className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-500">No measurements found</p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default MobileMeasurementList;