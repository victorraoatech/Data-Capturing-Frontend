// "use client";

// import { useAuth } from "@/api/hooks/useAuth";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {  Pencil,  Search, Trash, Users } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import type React from "react";
// import { useState } from "react";

// // import MobileMeasurementList from "@/app/components/forms/measurementList";
// import MeasurementModal from "@/app/(main)/user/body-measurement/create/page";

// export interface MeasurementInterface {
//   _id: string;
//   title: string;
//   description: string;
//   measurements: Array<{
//     name: string;
//     value: number;
//     unit: string;
//     convertedValue?: number;
//     convertedUnit?: string;
//   }>;
//   pictures: string[];
//   pictureLinks: string[];
//   sim: string;
//   otherName: string;
//   status: "draft" | "active" | "archived";
//   createdAt: string;
//   updatedAt: string;
// }

// export default function MeasurementPage() {
//   const router = useRouter();
//   const queryClient = useQueryClient();
//   const { client } = useAuth();

//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [showMeasurementModal, setShowMeasurementModal] = useState(false);
//   const [selectedMeasurement, setSelectedMeasurement] = useState<MeasurementInterface | null>(null);
//   const [modalMode, setModalMode] = useState<"create" | "edit">("create");

//   const {
//     data: measurements = [],
//     isLoading,
//     isError,
//   } = useQuery<MeasurementInterface[]>({
//     queryKey: ["all measurements"],
//     queryFn: async () => {
//       const response = await client.get(`/api/v1/measurements`);
//       console.log("API response:", response.data);
//       return response.data.data;
//     },
//   });

//   const { mutate: deleteMeasurement } = useMutation({
//     mutationFn: async (id: string) => {
//       return client.delete(`/api/v1/measurements/${id}`);
//     },
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ["all measurements"] });
//     },
//     onError(error: unknown) {
//       console.error("Error deleting measurement:", error);
//     },
//   });

//   // Method: Handle Create Measurement
//   const handleCreate = () => {
//     setModalMode("create");
//     setSelectedMeasurement(null);
//     setShowMeasurementModal(true);
//   };

//   // Method: Handle Edit Measurement
//   const handleEdit = (measurement: MeasurementInterface) => {
//     setModalMode("edit");
//     setSelectedMeasurement(measurement);
//     setShowMeasurementModal(true);
//   };

//   // Method: Handle Delete Measurement
//   const handleDelete = (id: string) => {
//     if (confirm("Are you sure you want to delete this measurement?")) {
//       deleteMeasurement(id);
//     }
//   };

//   // Method: Handle View Details
//   const handleViewDetails = (measurement: MeasurementInterface) => {
//     // Open modal or navigate to detail page
//     console.log("View details:", measurement);
//   };

//   const itemsPerPage = 8;
//   const computedTotalPages =
//     measurements.length > 0 ? Math.ceil(measurements.length / itemsPerPage) : 1;
//   const [currentPage, setCurrentPage] = useState<number>(1);

//   const filteredMeasurements = measurements.filter(
//     (measurement) =>
//       measurement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       measurement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       measurement.sim.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       measurement.otherName.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const currentMeasurements = filteredMeasurements.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const renderPagination = () => {
//     const pages = Array.from({ length: computedTotalPages }, (_, i) => i + 1);
//     return (
//       <div className="flex items-center gap-2">
//         <button
//           onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//           disabled={currentPage === 1}
//           className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
//             currentPage === 1
//               ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           &lt;
//         </button>
//         {pages.map((page) => (
//           <button
//             key={page}
//             onClick={() => setCurrentPage(page)}
//             className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
//               currentPage === page
//                 ? "bg-[#EAAB40] text-white border-[#EAAB40]"
//                 : "bg-white text-gray-700"
//             }`}
//           >
//             {page}
//           </button>
//         ))}
//         <button
//           onClick={() =>
//             setCurrentPage((p) => Math.min(p + 1, computedTotalPages))
//           }
//           disabled={currentPage === computedTotalPages}
//           className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
//             currentPage === computedTotalPages
//               ? "bg-gray-100 text-gray-400 cursor-not-allowed"
//               : "bg-white text-gray-700"
//           }`}
//         >
//           &gt;
//         </button>
//       </div>
//     );
//   };

//   if (isLoading) {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EAAB40] mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading measurements...</p>
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
//         <div className="text-center text-red-600">
//           <p>Error loading measurements. Please try again.</p>
//           <button 
//             onClick={() => queryClient.invalidateQueries({ queryKey: ["all measurements"] })}
//             className="mt-4 bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-4">
//       <div className="p-4">
//         <div className="mt-2 px-2">
//           <h1 className="text-2xl font-semibold">
//             Body Measurements <span className="text-gray-400">({measurements.length})</span>
//           </h1>
//         </div>

//         <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-2 mt-4 max-w-screen-xl mx-auto px-4">
//           <button
//             onClick={() => router.push("/admin/measurements/log-section")}
//             className="bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
//           >
//             View Log Section
//           </button>
//           <button 
//             onClick={handleCreate}
//             className="bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
//           >
//             Create Measurement
//           </button>
//         </div>
//       </div>

//       <div className="">
//         <main className="flex-1 p-4 md:p-8">
//           <div className="mb-4">
//             <h2 className="text-lg font-medium mb-2 text-[#9D9999]">
//               Measurement History
//             </h2>
//             <div className="flex flex-wrap items-center gap-2">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Input Search"
//                   value={searchQuery}
//                   onChange={handleSearch}
//                   className="border border-gray-300 h-8 rounded-3xl pl-10 pr-3 py-2 max-sm:w-[74%]"
//                 />
//                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-4" />
//               </div>
//             </div>
//           </div>

//           {/* Desktop Table */}
//           <div className="hidden md:block bg-white shadow rounded overflow-x-auto">
//             <table className="w-full min-w-full text-left font-semibold text-sm">
//               <thead className="bg-gray-100">
//                 <tr className="border-b border-gray-200 hover:bg-gray-50">
//                   <th className="py-3 px-4 whitespace-nowrap">Measurement Title</th>
//                   <th className="py-3 px-4">Description</th>
//                   <th className="py-3 px-4">SIM</th>
//                   <th className="py-3 px-4">Other Name</th>
//                   <th className="py-3 px-4">Measurements Count</th>
//                   <th className="py-3 px-4">Pictures</th>
//                   <th className="py-3 px-4">Status</th>
//                   <th className="py-3 px-4">Created Date</th>
//                   <th className="py-3 px-4">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentMeasurements.length > 0 ? (
//                   currentMeasurements.map((measurement) => (
//                     <tr
//                       key={measurement._id}
//                       className="text-gray-500 border-b border-gray-200 hover:bg-gray-50"
//                     >
//                       <td className="py-3 px-4 font-medium text-gray-900">{measurement.title}</td>
//                       <td className="py-3 px-4 max-w-xs truncate" title={measurement.description}>
//                         {measurement.description}
//                       </td>
//                       <td className="py-3 px-4">{measurement.sim}</td>
//                       <td className="py-3 px-4">{measurement.otherName}</td>
//                       <td className="py-3 px-4 text-center">
//                         {measurement.measurements.length}
//                       </td>
//                       <td className="py-3 px-4 text-center">
//                         {measurement.pictures.length + measurement.pictureLinks.length}
//                       </td>
//                       <td className="py-3 px-4">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           measurement.status === 'active' 
//                             ? 'bg-green-100 text-green-800'
//                             : measurement.status === 'draft'
//                             ? 'bg-yellow-100 text-yellow-800'
//                             : 'bg-gray-100 text-gray-800'
//                         }`}>
//                           {measurement.status}
//                         </span>
//                       </td>
//                       <td className="py-3 px-4 whitespace-nowrap">
//                         {/* {formatDate(measurement.createdAt)} */}
//                       </td>
//                       <td className="py-3 px-4 whitespace-nowrap">
//                         <div className="flex items-center gap-2">
//                           <button
//                             onClick={() => handleViewDetails(measurement)}
//                             className="w-4 h-4 inline-block cursor-pointer mr-2 text-blue-600"
//                             title="View Details"
//                           >
//                             <Users />
//                           </button>
//                           <button
//                             onClick={() => handleEdit(measurement)}
//                             className="w-4 h-4 inline-block cursor-pointer mr-2 text-green-600"
//                             title="Edit"
//                           >
//                             <Pencil />
//                           </button>
//                           <button
//                             onClick={() => handleDelete(measurement._id)}
//                             className="text-red-500 w-4 h-4 inline-block cursor-pointer mr-2"
//                             title="Delete"
//                           >
//                             <Trash />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={9} className="text-center py-5 text-gray-500">
//                       No measurements found.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Mobile View */}
//           {/* <div className="md:hidden">
//             <MobileMeasurementList
//               measurements={currentMeasurements}
//               onEdit={handleEdit}
//               onDelete={handleDelete}
//               onViewDetails={handleViewDetails}
//             />
//           </div> */}

//           <div className="flex justify-start md:justify-end mt-4">
//             {renderPagination()}
//           </div>

//           {/* Measurement Modal */}
//           <MeasurementModal
//             isOpen={showMeasurementModal}
//             onClose={() => setShowMeasurementModal(false)}
//             mode={modalMode}
//             measurement={selectedMeasurement}
//           />
//         </main>
//       </div>
//     </div>
//   );
// }



"use client";

import { useAuth } from "@/api/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Search, Trash, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

// import MobileMeasurementList from "@/app/components/forms/measurementList";

export interface MeasurementInterface {
  _id: string;
  title: string;
  description: string;
  measurements: Array<{
    name: string;
    value: number;
    unit: string;
    convertedValue?: number;
    convertedUnit?: string;
  }>;
  pictures: string[];
  pictureLinks: string[];
  sim: string;
  otherName: string;
  status: "draft" | "active" | "archived";
  createdAt: string;
  updatedAt: string;
}

// Mock data generator
const generateMockMeasurements = (): MeasurementInterface[] => {
  const mockTitles = [
    "Full Body Measurement",
    "Upper Body Stats",
    "Fitness Progress",
    "Weight Loss Tracking",
    "Muscle Growth",
    "Custom Measurement Set",
    "Weekly Progress",
    "Monthly Check-in"
  ];

  const mockDescriptions = [
    "Complete body measurements for tracking progress",
    "Upper body measurements including chest, arms, and shoulders",
    "Fitness and workout progress tracking",
    "Weight loss journey measurements",
    "Muscle growth and development tracking",
    "Custom measurement set for specific goals",
    "Weekly progress check",
    "Monthly body measurement review"
  ];

  const measurementTypes = [
    { name: "Chest", unit: "cm" },
    { name: "Waist", unit: "cm" },
    { name: "Hips", unit: "cm" },
    { name: "Left Arm", unit: "cm" },
    { name: "Right Arm", unit: "cm" },
    { name: "Left Thigh", unit: "cm" },
    { name: "Right Thigh", unit: "cm" },
    { name: "Weight", unit: "kg" },
    { name: "Height", unit: "cm" }
  ];

  const statuses: ("draft" | "active" | "archived")[] = ["draft", "active", "archived"];

  return Array.from({ length: 25 }, (_, index) => {
    const numMeasurements = Math.floor(Math.random() * 5) + 3; // 3-7 measurements
    const measurements = Array.from({ length: numMeasurements }, (_, mIndex) => {
      const type = measurementTypes[mIndex % measurementTypes.length];
      const value = Math.floor(Math.random() * 50) + 50; // 50-100 value
      return {
        name: type.name,
        value: value,
        unit: type.unit,
        convertedValue: type.unit === "cm" ? value / 2.54 : value * 2.20462,
        convertedUnit: type.unit === "cm" ? "inch" : "lbs"
      };
    });

    const numPictures = Math.floor(Math.random() * 3);
    const pictures = Array.from({ length: numPictures }, (_, i) => `picture-${i + 1}.jpg`);
    const numPictureLinks = Math.floor(Math.random() * 2);
    const pictureLinks = Array.from({ length: numPictureLinks }, (_, i) => `https://example.com/photo-${i + 1}.jpg`);

    const titleIndex = index % mockTitles.length;
    const createdAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(); // Random date in last 30 days

    return {
      _id: `measurement-${index + 1}`,
      title: `${mockTitles[titleIndex]} #${index + 1}`,
      description: mockDescriptions[titleIndex],
      measurements,
      pictures,
      pictureLinks,
      sim: `SIM-${Math.floor(Math.random() * 1000) + 1000}`,
      otherName: `Measurement Set ${index + 1}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      createdAt,
      updatedAt: createdAt
    };
  });
};

const mockMeasurements = generateMockMeasurements();

// Mock API delay function
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default function MeasurementPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { client } = useAuth();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedMeasurement, setSelectedMeasurement] = useState<MeasurementInterface | null>(null);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");

  const {
    data: measurements = [],
    isLoading,
    isError,
  } = useQuery<MeasurementInterface[]>({
    queryKey: ["all measurements"],
    queryFn: async () => {
      // Simulate API call delay
      await delay(1000);
      
      // If you want to simulate an error sometimes, uncomment below:
      // if (Math.random() < 0.1) throw new Error("Mock API error");
      
      console.log("Returning mock measurements data");
      return mockMeasurements;
    },
    // Keep data fresh for 5 minutes
    staleTime: 5 * 60 * 1000,
  });

  const { mutate: deleteMeasurement } = useMutation({
    mutationFn: async (id: string) => {
      // Simulate API call delay
      await delay(500);
      console.log("Mock delete measurement:", id);
      // In a real implementation, this would be the actual API call
      // return client.delete(`/api/v1/measurements/${id}`);
      return { data: { success: true } };
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["all measurements"] });
    },
    onError(error: unknown) {
      console.error("Error deleting measurement:", error);
    },
  });

  // Method: Handle Create Measurement - Navigate to create page
  const handleCreate = () => {
    router.push("/user/body-measurement/create");
  };

  // Method: Handle Edit Measurement
  const handleEdit = (measurement: MeasurementInterface) => {
    // You can navigate to edit page or open a modal
    // For now, let's navigate to the create page with edit mode
    router.push(`/user/body-measurement/edit`);
    // Alternatively, you can set up a proper edit page:
    // router.push(`/user/body-measurement/edit/${measurement._id}`);
  };

  // Method: Handle Delete Measurement
  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this measurement?")) {
      deleteMeasurement(id);
    }
  };

  // Method: Handle View Details
  const handleViewDetails = (measurement: MeasurementInterface) => {
    // You can navigate to a details page or open a modal
    console.log("View details:", measurement);
    // For now, show an alert with details
    alert(`Viewing details for: ${measurement.title}\n\nDescription: ${measurement.description}\nMeasurements: ${measurement.measurements.length}\nStatus: ${measurement.status}`);
  };

  // Date formatter function
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const itemsPerPage = 8;
  const computedTotalPages =
    measurements.length > 0 ? Math.ceil(measurements.length / itemsPerPage) : 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredMeasurements = measurements.filter(
    (measurement) =>
      measurement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      measurement.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      measurement.sim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      measurement.otherName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMeasurements = filteredMeasurements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const renderPagination = () => {
    const pages = Array.from({ length: computedTotalPages }, (_, i) => i + 1);
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700"
          }`}
        >
          &lt;
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
              currentPage === page
                ? "bg-[#EAAB40] text-white border-[#EAAB40]"
                : "bg-white text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, computedTotalPages))
          }
          disabled={currentPage === computedTotalPages}
          className={`px-3 py-2 border rounded hover:bg-gray-100 transition-colors ${
            currentPage === computedTotalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700"
          }`}
        >
          &gt;
        </button>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EAAB40] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading measurements...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading measurements. Please try again.</p>
          <button 
            onClick={() => queryClient.invalidateQueries({ queryKey: ["all measurements"] })}
            className="mt-4 bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="p-4">
        <div className="mt-2 px-2">
          <h1 className="text-2xl font-semibold">
            Body Measurements <span className="text-gray-400">({measurements.length})</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-2 mt-4 max-w-screen-xl mx-auto px-4">
          <button
            onClick={() => router.push("/admin/measurements/log-section")}
            className="bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            View Log Section
          </button>
          <button 
            onClick={handleCreate}
            className="bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            Create Measurement
          </button>
        </div>
      </div>

      <div className="">
        <main className="flex-1 p-4 md:p-8">
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 text-[#9D9999]">
              Measurement History
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Input Search"
                  value={searchQuery}
                  onChange={handleSearch}
                  className="border border-gray-300 h-8 rounded-3xl pl-10 pr-3 py-2 max-sm:w-[74%]"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 w-4" />
              </div>
            </div>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block bg-white shadow rounded overflow-x-auto">
            <table className="w-full min-w-full text-left font-semibold text-sm">
              <thead className="bg-gray-100">
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <th className="py-3 px-4 whitespace-nowrap">Measurement Title</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">SIM</th>
                  <th className="py-3 px-4">Other Name</th>
                  <th className="py-3 px-4">Measurements Count</th>
                  <th className="py-3 px-4">Pictures</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Created Date</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMeasurements.length > 0 ? (
                  currentMeasurements.map((measurement) => (
                    <tr
                      key={measurement._id}
                      className="text-gray-500 border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">{measurement.title}</td>
                      <td className="py-3 px-4 max-w-xs truncate" title={measurement.description}>
                        {measurement.description}
                      </td>
                      <td className="py-3 px-4">{measurement.sim}</td>
                      <td className="py-3 px-4">{measurement.otherName}</td>
                      <td className="py-3 px-4 text-center">
                        {measurement.measurements.length}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {measurement.pictures.length + measurement.pictureLinks.length}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          measurement.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : measurement.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {measurement.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {formatDate(measurement.createdAt)}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(measurement)}
                            className="w-4 h-4 inline-block cursor-pointer mr-2 text-blue-600"
                            title="View Details"
                          >
                            <Users />
                          </button>
                          <button
                            onClick={() => handleEdit(measurement)}
                            className="w-4 h-4 inline-block cursor-pointer mr-2 text-green-600"
                            title="Edit"
                          >
                            <Pencil />
                          </button>
                          <button
                            onClick={() => handleDelete(measurement._id)}
                            className="text-red-500 w-4 h-4 inline-block cursor-pointer mr-2"
                            title="Delete"
                          >
                            <Trash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="text-center py-5 text-gray-500">
                      No measurements found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile View - You can uncomment and implement this later */}
          {/* <div className="md:hidden">
            <MobileMeasurementList
              measurements={currentMeasurements}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onViewDetails={handleViewDetails}
            />
          </div> */}

          <div className="flex justify-start md:justify-end mt-4">
            {renderPagination()}
          </div>
        </main>
      </div>
    </div>
  );
}