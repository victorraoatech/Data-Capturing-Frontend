
"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Search, Trash, Users, Plus, Ruler } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ObjectDimension } from "../../../../../types";

export default function ObjectDimensionsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  

  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: objectDimensions = [],
    isLoading,
    isError,
  } = useQuery<ObjectDimension[]>({
    queryKey: ["all object dimensions"],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockData: ObjectDimension[] = [
        {
          _id: "1",
          title: "Steel Beam Structure",
          description: "Structural steel beam for construction",
          formId: "FORM-BEAM-001",
          measurementUnit: "cm",
          objectName: "I-Beam 200x100",
          objectType: "Structural Beam",
          brand: "SteelCorp",
          quantity: 10,
          length: 600,
          height: 200,
          width: 100,
          weight: 45.5,
          depth: 8,
          status: "active",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          _id: "2",
          title: "Aluminum Pipe",
          description: "Round aluminum pipe for industrial use",
          formId: "FORM-PIPE-002",
          measurementUnit: "mm",
          objectName: "Al-Pipe-50mm",
          objectType: "Pipe",
          brand: "MetalWorks",
          diameter: 50,
          length: 3000,
          thickness: 2,
          status: "draft",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      return mockData;
    },
  });

  const { mutate: deleteObjectDimension } = useMutation({
    mutationFn: async (id: string) => {
      // Mock delete - replace with actual API call
      console.log("Deleting object dimension:", id);
      return { data: { success: true } };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all object dimensions"] });
    },
    onError: (error: unknown) => {
      console.error("Error deleting object dimension:", error);
    },
  });

  const handleCreate = () => {
    router.push("/user/object-dimension/create");
  };

  const handleEdit = (dimension: ObjectDimension) => {
    // router.push(`/user/object-dimensions/edit=${dimension._id}`);
        router.push(`/user/object-dimensions/edit`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this object dimension?")) {
      deleteObjectDimension(id);
    }
  };

  const handleViewDetails = (dimension: ObjectDimension) => {
    // router.push(`/user/object-dimension/${dimension._id}`);
      router.push(`/user/object-dimension/view`);
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredDimensions = objectDimensions.filter(
    (dimension) =>
      dimension.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dimension.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dimension.objectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dimension.objectType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dimension.formId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentDimensions = filteredDimensions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const computedTotalPages = Math.ceil(filteredDimensions.length / itemsPerPage);

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
          <p className="mt-4 text-gray-600">Loading object dimensions...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading object dimensions. Please try again.</p>
          <button 
            onClick={() => queryClient.invalidateQueries({ queryKey: ["all object dimensions"] })}
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
          <h1 className="text-2xl font-semibold flex items-center gap-2">
            <Ruler className="w-6 h-6" />
            Object Dimensions <span className="text-gray-400">({objectDimensions.length})</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-2 mt-4 max-w-screen-xl mx-auto px-4">
          <button 
            onClick={handleCreate}
            className="flex items-center gap-2 bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            <Plus className="w-4 h-4" />
            Create Object Dimension
          </button>
        </div>
      </div>

      <div className="">
        <main className="flex-1 p-4 md:p-8">
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 text-[#9D9999]">
              Object Dimension History
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Input Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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
                  <th className="py-3 px-4 whitespace-nowrap">Title</th>
                  <th className="py-3 px-4">Object Name</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Brand</th>
                  <th className="py-3 px-4">Form ID</th>
                  <th className="py-3 px-4">Dimensions</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Created Date</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentDimensions.length > 0 ? (
                  currentDimensions.map((dimension) => (
                    <tr
                      key={dimension._id}
                      className="text-gray-500 border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">{dimension.title}</td>
                      <td className="py-3 px-4">{dimension.objectName}</td>
                      <td className="py-3 px-4">{dimension.objectType}</td>
                      <td className="py-3 px-4">{dimension.brand}</td>
                      <td className="py-3 px-4">{dimension.formId}</td>
                      <td className="py-3 px-4">
                        {dimension.length && `${dimension.length}×`}
                        {dimension.width && `${dimension.width}×`}
                        {dimension.height && `${dimension.height}`}
                        {dimension.measurementUnit}
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          dimension.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : dimension.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {dimension.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {new Date(dimension.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(dimension)}
                            className="w-4 h-4 inline-block cursor-pointer mr-2 text-blue-600"
                            title="View Details"
                          >
                            <Users />
                          </button>
                          <button
                            onClick={() => handleEdit(dimension)}
                            className="w-4 h-4 inline-block cursor-pointer mr-2 text-green-600"
                            title="Edit"
                          >
                            <Pencil />
                          </button>
                          <button
                            onClick={() => handleDelete(dimension._id)}
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
                      No object dimensions found.
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
    </div>
  );
}