
"use client";


import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Search, Trash, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";

interface BodySection {
  sectionName: string;
  size: number;
  neck?: number;
  customMeasurements: Array<{
    name: string;
    value: number;
  }>;
}

export interface MeasurementInterface {
  _id: string;
  id: string;
  title: string;
  description: string;
  firstName: string;
  lastName: string;
  otherName: string;
  bodySections: BodySection[];
  pictures: string[];
  pictureLinks: string[];
  createdAt: string;
  updatedAt: string;
}

// Mock data generator based on the new create form structure
const generateMockMeasurements = (): MeasurementInterface[] => {
  const firstNames = ["John", "Jane", "Mike", "Sarah", "David", "Emma", "James", "Lisa"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis"];

  const bodySectionsTemplate: BodySection[] = [
    {
      sectionName: "Head Section",
      size: 55,
      neck: 38,
      customMeasurements: []
    },
    {
      sectionName: "Chest Section", 
      size: 95,
      customMeasurements: []
    },
    {
      sectionName: "Abdomen Section",
      size: 85,
      customMeasurements: []
    },
    {
      sectionName: "Waist Section",
      size: 78,
      customMeasurements: []
    },
    {
      sectionName: "Thigh Section",
      size: 55,
      customMeasurements: []
    },
    {
      sectionName: "Leg Section",
      size: 45,
      customMeasurements: []
    }
  ];

  return Array.from({ length: 25 }, (_, index) => {
    const bodySections = bodySectionsTemplate.map(section => ({
      ...section,
      size: section.size + Math.floor(Math.random() * 10) - 5,
      neck: section.neck ? section.neck + Math.floor(Math.random() * 5) - 2 : undefined,
      customMeasurements: Math.random() > 0.7 ? [{
        name: "Custom Measurement",
        value: Math.floor(Math.random() * 20) + 30
      }] : []
    }));

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    const createdAt = new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString();

    return {
      _id: `measurement-${index + 1}`,
      id: `M-${1000 + index}`,
      title: `Measurement ${index + 1}`,
      description: `Body measurement record for ${firstName} ${lastName}`,
      firstName: firstName || "",
      lastName: lastName || "",
      otherName: `Measurement Set ${index + 1}`,
      bodySections,
      pictures: [],
      pictureLinks: [],
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
  // const { client } = useAuth();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sectionModalOpen, setSectionModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<{ measurement: MeasurementInterface; section: BodySection } | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [measurementToDelete, setMeasurementToDelete] = useState<MeasurementInterface | null>(null);

  const {
    data: measurements = [],
    isLoading,
    isError,
  } = useQuery<MeasurementInterface[]>({
    queryKey: ["all measurements"],
    queryFn: async () => {
      await delay(1000);
      return mockMeasurements;
    },
    staleTime: 5 * 60 * 1000,
  });

  const { mutate: deleteMeasurement } = useMutation({
    mutationFn: async (id: string) => {
      await delay(500);
      console.log("Mock delete measurement:", id);
      return { data: { success: true } };
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["all measurements"] });
    },
    onError(error: unknown) {
      console.error("Error deleting measurement:", error);
    },
  });

  const handleCreate = () => {
    router.push("/user/body-measurement/create");
  };

  const handleEdit = (measurement: MeasurementInterface) => {
    router.push(`/user/body-measurement/edit/${measurement._id}`);
  };

  const handleDeleteClick = (measurement: MeasurementInterface) => {
    setMeasurementToDelete(measurement);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (measurementToDelete) {
      deleteMeasurement(measurementToDelete._id);
      setDeleteModalOpen(false);
      setMeasurementToDelete(null);
    }
  };

  const handleViewDetails = (measurement: MeasurementInterface) => {
    router.push(`/user/body-measurement/view/${measurement._id}`);
  };

  const handleViewSection = (measurement: MeasurementInterface, sectionName: string) => {
    const section = measurement.bodySections.find(s => s.sectionName === sectionName);
    if (section) {
      setSelectedSection({ measurement, section });
      setSectionModalOpen(true);
    }
  };

  // Safe search function to handle undefined values
  const filteredMeasurements = measurements.filter((measurement) => {
    const searchLower = searchQuery.toLowerCase();
    
    const firstName = measurement.firstName || "";
    const lastName = measurement.lastName || "";
    const otherName = measurement.otherName || "";
    const id = measurement.id || "";

    return (
      firstName.toLowerCase().includes(searchLower) ||
      lastName.toLowerCase().includes(searchLower) ||
      otherName.toLowerCase().includes(searchLower) ||
      id.toLowerCase().includes(searchLower)
    );
  });

  const itemsPerPage = 8;
  const computedTotalPages =
    filteredMeasurements.length > 0 ? Math.ceil(filteredMeasurements.length / itemsPerPage) : 1;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentMeasurements = filteredMeasurements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
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
                  <th className="py-3 px-4 whitespace-nowrap">S/N</th>
                  <th className="py-3 px-4">First Name</th>
                  <th className="py-3 px-4">Last Name</th>
                  <th className="py-3 px-4">Other Name</th>
                  <th className="py-3 px-4">Head Section</th>
                  <th className="py-3 px-4">Chest Section</th>
                  <th className="py-3 px-4">Abdomen Section</th>
                  <th className="py-3 px-4">Waist Section</th>
                  <th className="py-3 px-4">Thigh Section</th>
                  <th className="py-3 px-4">Leg Section</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentMeasurements.length > 0 ? (
                  currentMeasurements.map((measurement, index) => (
                    <tr
                      key={measurement._id}
                      className="text-gray-500 border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {(currentPage - 1) * itemsPerPage + index + 1}
                      </td>
                      <td className="py-3 px-4">{measurement.firstName || "-"}</td>
                      <td className="py-3 px-4">{measurement.lastName || "-"}</td>
                      <td className="py-3 px-4">{measurement.otherName || "-"}</td>
                      
                      {/* Head Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Head Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
                      </td>
                      
                      {/* Chest Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Chest Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
                      </td>
                      
                      {/* Abdomen Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Abdomen Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
                      </td>
                      
                      {/* Waist Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Waist Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
                      </td>
                      
                      {/* Thigh Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Thigh Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
                      </td>
                      
                      {/* Leg Section */}
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleViewSection(measurement, "Leg Section")}
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          View Details
                        </button>
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
                            onClick={() => handleDeleteClick(measurement)}
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
                    <td colSpan={11} className="text-center py-5 text-gray-500">
                      No measurements found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex justify-start md:justify-end mt-4">
            {renderPagination()}
          </div>
        </main>
      </div>

      {/* Section Details Modal */}
      {sectionModalOpen && selectedSection && (
        <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {selectedSection.section.sectionName} Details
              </h3>
              <button
                onClick={() => setSectionModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded p-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-medium">Size:</span>
                    <span className="font-medium">{selectedSection.section.size}cm</span>
                  </div>
                  
                  {selectedSection.section.neck !== undefined && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 font-medium">Neck:</span>
                      <span className="font-medium">{selectedSection.section.neck}cm</span>
                    </div>
                  )}
                  
                  {selectedSection.section.customMeasurements.length > 0 ? (
                    selectedSection.section.customMeasurements.map((custom, customIndex) => (
                      <div key={customIndex} className="flex justify-between">
                        <span className="text-gray-600 font-medium">{custom.name}:</span>
                        <span className="font-medium">{custom.value}cm</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm">No additional measurements</p>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-medium text-gray-800 mb-2">Measurement Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Person:</span>
                    <span className="font-medium">
                      {selectedSection.measurement.firstName} {selectedSection.measurement.lastName}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Other Name:</span>
                    <span className="font-medium">{selectedSection.measurement.otherName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ID:</span>
                    <span className="font-medium">{selectedSection.measurement.id}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSectionModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && measurementToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Delete Measurement</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete the measurement for {measurementToDelete.firstName} {measurementToDelete.lastName}?
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => {
                  setDeleteModalOpen(false);
                  setMeasurementToDelete(null);
                }}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}