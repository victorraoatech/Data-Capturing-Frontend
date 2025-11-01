// "use client";
// import { useAuth } from "@/api/hooks/useAuth";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   Field,
//   FieldArray,
//   Form,
//   Formik,
//   type FormikErrors,
//   type FormikTouched,
// } from "formik";
// import type React from "react";
// import { useState, useEffect } from "react";
// import * as Yup from "yup";
// import { useRouter, useSearchParams } from "next/navigation";

// import {
//   Plus,
//   Trash2,
//   Upload,
//   X,
//   Ruler,
//   ArrowLeft,
// } from "lucide-react";
// import { toast } from "@/app/components/hooks/use-toast";
// import { MeasurementInterface } from "../page";

// interface MeasurementValue {
//   name: string;
//   value: number;
//   unit: string;
//   convertedValue?: number;
//   convertedUnit?: string;
// }

// interface MeasurementFormValues {
//   title: string;
//   description: string;
//   measurements: MeasurementValue[];
//   pictures: File[];
//   pictureLinks: string[];
//   sim: string;
//   otherName: string;
//   status: "draft" | "active" | "archived";
// }

// const validationSchema = Yup.object().shape({
//   title: Yup.string().required("Title is required"),
//   description: Yup.string().required("Description is required"),
//   measurements: Yup.array()
//     .of(
//       Yup.object().shape({
//         name: Yup.string().required("Measurement name is required"),
//         value: Yup.number()
//           .required("Value is required")
//           .min(0, "Value must be positive"),
//         unit: Yup.string().required("Unit is required"),
//       })
//     )
//     .min(1, "At least one measurement is required"),
//   sim: Yup.string().required("SIM is required"),
//   otherName: Yup.string().required("Other name is required"),
//   pictureLinks: Yup.array().of(Yup.string().url("Must be a valid URL")),
// });

// // Mock data for editing (in real app, this would come from API)
// const mockMeasurements: MeasurementInterface[] = [
//   {
//     _id: "measurement-1",
//     title: "Full Body Measurement",
//     description: "Complete body measurements for tracking progress",
//     measurements: [
//       { name: "Head Action", value: 58, unit: "cm" },
//       { name: "Chest Action", value: 102, unit: "cm" },
//       { name: "Abolomen Action", value: 89, unit: "cm" },
//       { name: "Wast Section", value: 76, unit: "cm" },
//       { name: "Tight Section", value: 55, unit: "cm" },
//     ],
//     pictures: [],
//     pictureLinks: ["https://example.com/photo1.jpg"],
//     sim: "Fistian Latinum",
//     otherName: "21cm",
//     status: "active",
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//   },
// ];

// interface EditMeasurementFormProps {
//   editId: string;
// }

// export default function EditMeasurementForm({ editId }: EditMeasurementFormProps) {
//   const router = useRouter();
//   const { client } = useAuth();
//   const queryClient = useQueryClient();
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   // Fetch measurement data for editing
//   const { data: measurementData, isLoading: isLoadingMeasurement } = useQuery({
//     queryKey: ["measurement", editId],
//     queryFn: async () => {
//       if (!editId) return null;
      
//       // Simulate API call delay
//       await new Promise(resolve => setTimeout(resolve, 1000));
      
//       // In real app, this would be: client.get(`/api/v1/measurements/${editId}`)
//       const measurement = mockMeasurements.find(m => m._id === editId);
//       if (!measurement) throw new Error("Measurement not found");
//       return measurement;
//     },
//     enabled: !!editId && isClient,
//   });

//   const initialValues: MeasurementFormValues = {
//     title: measurementData?.title || "",
//     description: measurementData?.description || "",
//     measurements: measurementData?.measurements || [
//       { name: "Head Action", value: 0, unit: "cm" },
//       { name: "Chest Action", value: 0, unit: "cm" },
//       { name: "Abolomen Action", value: 0, unit: "cm" },
//       { name: "Wast Section", value: 0, unit: "cm" },
//       { name: "Tight Section", value: 0, unit: "cm" },
//     ],
//     pictures: [],
//     pictureLinks: measurementData?.pictureLinks || [],
//     // sim: measurementData?.sim || "Fistian Latinum",
//     otherName: measurementData?.otherName || "21cm",
//     // status: measurementData?.status || "draft",
//   };

//   const updateMeasurementMutation = useMutation({
//     mutationFn: async (values: MeasurementFormValues) => {
//       const formData = new FormData();

//       // Basic information
//       formData.append("title", values.title);
//       formData.append("description", values.description);
//       formData.append("sim", values.sim);
//       formData.append("otherName", values.otherName);
//       formData.append("status", values.status);

//       // Measurements
//       values.measurements.forEach((measurement, index) => {
//         formData.append(`measurements[${index}][name]`, measurement.name);
//         formData.append(`measurements[${index}][value]`, measurement.value.toString());
//         formData.append(`measurements[${index}][unit]`, measurement.unit);
//       });

//       // Picture links
//       values.pictureLinks.forEach((link, index) => {
//         formData.append(`pictureLinks[${index}]`, link);
//       });

//       // Uploaded pictures
//       uploadedFiles.forEach((file) => {
//         formData.append("pictures", file);
//       });

//       console.log("=== MEASUREMENT FORM DATA ===");
//       Array.from(formData.entries()).forEach(([key, value]) => {
//         if (value instanceof File) {
//           console.log(`${key}: File(${value.name}, ${value.size} bytes)`);
//         } else {
//           console.log(`${key}: ${value}`);
//         }
//       });

//       return client.put(`/api/v1/measurements/${editId}`, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//     },
//     onSuccess: () => {
//       toast({
//         title: "Success!",
//         description: "Measurement updated successfully",
//       });
//       queryClient.invalidateQueries({ queryKey: ["all measurements"] });
//       router.push("/user/body-measurement");
//     },
//     onError: (error: unknown) => {
//       toast({
//         title: "Error",
//         description: error instanceof Error ? error.message : "Failed to update measurement",
//         variant: "destructive",
//       });
//     },
//   });

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(event.target.files || []);
//     setUploadedFiles(prev => [...prev, ...files]);
//   };

//   const removeFile = (index: number) => {
//     setUploadedFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   const convertMeasurement = (value: number, fromUnit: string, toUnit: string): number => {
//     const conversions: { [key: string]: number } = {
//       cm: 1,
//       inch: 2.54,
//       mm: 0.1,
//     };

//     if (conversions[fromUnit] && conversions[toUnit]) {
//       return (value * conversions[fromUnit]) / conversions[toUnit];
//     }
//     return value;
//   };

//   if (!isClient || isLoadingMeasurement) {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EAAB40] mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading measurement data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="mb-6">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
//           >
//             <ArrowLeft className="w-5 h-5" />
//             Back to Measurements
//           </button>
          
//           <h1 className="text-3xl font-bold text-gray-900">
//             Edit Measurement
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Update your body measurement details
//           </p>
//         </div>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           enableReinitialize={true}
//           onSubmit={(values) => {
//             updateMeasurementMutation.mutate({
//               ...values,
//               pictures: uploadedFiles,
//             });
//           }}
//         >
//           {({ values, setFieldValue, errors, touched }) => (
//             <Form className="space-y-6">
//               {/* Basic Information Section */}
//               <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Basic Information
//                 </h3>
                
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Title <span className="text-red-500">*</span>
//                     </label>
//                     <Field
//                       name="title"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter measurement title"
//                     />
//                     {errors.title && touched.title && (
//                       <p className="mt-1 text-sm text-red-600">{errors.title}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Status
//                     </label>
//                     <Field
//                       as="select"
//                       name="status"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="draft">Draft</option>
//                       <option value="active">Active</option>
//                       <option value="archived">Archived</option>
//                     </Field>
//                   </div>
//                 </div>

//                 <div className="mt-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Description <span className="text-red-500">*</span>
//                   </label>
//                   <Field
//                     as="textarea"
//                     name="description"
//                     rows={3}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter measurement description"
//                   />
//                   {errors.description && touched.description && (
//                     <p className="mt-1 text-sm text-red-600">{errors.description}</p>
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       SIM <span className="text-red-500">*</span>
//                     </label>
//                     <Field
//                       name="sim"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter SIM"
//                     />
//                     {errors.sim && touched.sim && (
//                       <p className="mt-1 text-sm text-red-600">{errors.sim}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Other Name <span className="text-red-500">*</span>
//                     </label>
//                     <Field
//                       name="otherName"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter other name"
//                     />
//                     {errors.otherName && touched.otherName && (
//                       <p className="mt-1 text-sm text-red-600">{errors.otherName}</p>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Measurements Section */}
//               <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
//                 <div className="flex justify-between items-center mb-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     Body Measurements
//                   </h3>
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setFieldValue("measurements", [
//                         ...values.measurements,
//                         { name: "", value: 0, unit: "cm" },
//                       ]);
//                     }}
//                     className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-sm"
//                   >
//                     <Plus className="w-4 h-4" />
//                     Add Measurement
//                   </button>
//                 </div>

//                 <FieldArray name="measurements">
//                   {({ remove }) => (
//                     <div className="space-y-4">
//                       {values.measurements.map((measurement, index) => {
//                         const measurementErrors = errors.measurements?.[
//                           index
//                         ] as FormikErrors<MeasurementValue> | undefined;
//                         const measurementTouched = touched.measurements?.[
//                           index
//                         ] as FormikTouched<MeasurementValue> | undefined;

//                         return (
//                           <div
//                             key={index}
//                             className="bg-gray-50 p-4 rounded-lg border border-gray-200"
//                           >
//                             <div className="flex justify-between items-start mb-3">
//                               <h4 className="font-medium text-gray-800">
//                                 Measurement {index + 1}
//                               </h4>
//                               {values.measurements.length > 1 && (
//                                 <button
//                                   type="button"
//                                   onClick={() => remove(index)}
//                                   className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50"
//                                 >
//                                   <Trash2 className="w-4 h-4" />
//                                 </button>
//                               )}
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                   Name <span className="text-red-500">*</span>
//                                 </label>
//                                 <Field
//                                   name={`measurements.${index}.name`}
//                                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                   placeholder="e.g., Head Action"
//                                 />
//                                 {measurementErrors?.name && measurementTouched?.name && (
//                                   <p className="mt-1 text-sm text-red-600">
//                                     {measurementErrors.name}
//                                   </p>
//                                 )}
//                               </div>

//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                   Value <span className="text-red-500">*</span>
//                                 </label>
//                                 <Field
//                                   type="number"
//                                   name={`measurements.${index}.value`}
//                                   min="0"
//                                   step="0.1"
//                                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                   placeholder="0.0"
//                                 />
//                                 {measurementErrors?.value && measurementTouched?.value && (
//                                   <p className="mt-1 text-sm text-red-600">
//                                     {measurementErrors.value}
//                                   </p>
//                                 )}
//                               </div>

//                               <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                                   Unit <span className="text-red-500">*</span>
//                                 </label>
//                                 <Field
//                                   as="select"
//                                   name={`measurements.${index}.unit`}
//                                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                                 >
//                                   <option value="cm">cm</option>
//                                   <option value="inch">inch</option>
//                                   <option value="mm">mm</option>
//                                 </Field>
//                                 {measurementErrors?.unit && measurementTouched?.unit && (
//                                   <p className="mt-1 text-sm text-red-600">
//                                     {measurementErrors.unit}
//                                   </p>
//                                 )}
//                               </div>
//                             </div>

//                             {/* Unit Conversion Display */}
//                             <div className="mt-3 p-3 bg-blue-50 rounded-lg">
//                               <div className="flex items-center gap-2 mb-2">
//                                 <Ruler className="w-4 h-4 text-blue-600" />
//                                 <span className="text-sm font-medium text-blue-800">
//                                   Unit Conversion
//                                 </span>
//                               </div>
//                               <div className="grid grid-cols-2 gap-4 text-sm">
//                                 <div>
//                                   <span className="text-gray-600">In inches: </span>
//                                   <span className="font-medium">
//                                     {convertMeasurement(measurement.value, measurement.unit, "inch").toFixed(2)} inch
//                                   </span>
//                                 </div>
//                                 <div>
//                                   <span className="text-gray-600">In mm: </span>
//                                   <span className="font-medium">
//                                     {convertMeasurement(measurement.value, measurement.unit, "mm").toFixed(2)} mm
//                                   </span>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </FieldArray>

//                 {errors.measurements && typeof errors.measurements === 'string' && (
//                   <p className="mt-2 text-sm text-red-600">{errors.measurements}</p>
//                 )}
//               </div>

//               {/* Pictures Section */}
//               <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                   Pictures
//                 </h3>

//                 {/* File Upload */}
//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Upload Pictures
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       multiple
//                       accept="image/*"
//                       onChange={handleFileUpload}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                     />
//                     <Upload className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
//                   </div>

//                   {/* Uploaded Files List */}
//                   {uploadedFiles.length > 0 && (
//                     <div className="mt-3 space-y-2">
//                       <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
//                       {uploadedFiles.map((file, index) => (
//                         <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
//                           <span className="text-sm text-gray-600 truncate">{file.name}</span>
//                           <button
//                             type="button"
//                             onClick={() => removeFile(index)}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             <X className="w-4 h-4" />
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Picture Links */}
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Picture Links (URLs)
//                   </label>
//                   <FieldArray name="pictureLinks">
//                     {({ push, remove }) => (
//                       <div className="space-y-3">
//                         {values.pictureLinks.map((link, index) => (
//                           <div key={index} className="flex gap-2">
//                             <Field
//                               name={`pictureLinks.${index}`}
//                               className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                               placeholder="https://example.com/image.jpg"
//                             />
//                             <button
//                               type="button"
//                               onClick={() => remove(index)}
//                               className="px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
//                             >
//                               <Trash2 className="w-4 h-4" />
//                             </button>
//                           </div>
//                         ))}
//                         <button
//                           type="button"
//                           onClick={() => push("")}
//                           className="flex items-center gap-2 px-3 py-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm"
//                         >
//                           <Plus className="w-4 h-4" />
//                           Add Link
//                         </button>
//                       </div>
//                     )}
//                   </FieldArray>
//                   {errors.pictureLinks && typeof errors.pictureLinks === 'string' && (
//                     <p className="mt-1 text-sm text-red-600">{errors.pictureLinks}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Submit Buttons */}
//               <div className="flex justify-end gap-3 pt-6 border-t border-gray-200 bg-white p-6 rounded-lg shadow-sm">
//                 <button
//                   type="button"
//                   onClick={() => router.push("/user/body-measurement")}
//                   className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={updateMeasurementMutation.isPending}
//                   className={`flex items-center gap-2 px-6 py-2 bg-[#EAAB40] text-white rounded-lg hover:opacity-90 transition-opacity font-medium ${
//                     updateMeasurementMutation.isPending ? "opacity-70 cursor-not-allowed" : ""
//                   }`}
//                 >
//                   {updateMeasurementMutation.isPending ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//                       Updating...
//                     </>
//                   ) : (
//                     <>Update Measurement</>
//                   )}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// }

import React from 'react'

const page = () => {
  return (
    <div>
      page edit
    </div>
  )
}

export default page
