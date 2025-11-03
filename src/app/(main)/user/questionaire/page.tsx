// app/(main)/user/questionnaires/page.tsx
"use client";

import { useAuth } from "@/api/hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pencil, Search, Trash, Users, Plus, FileText, Copy } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Questionnaire } from "../../../../../types";


export default function QuestionnairesPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
 

  const [searchQuery, setSearchQuery] = useState<string>("");

  const {
    data: questionnaires = [],
    isLoading,
    isError,
  } = useQuery<Questionnaire[]>({
    queryKey: ["all questionnaires"],
    queryFn: async () => {
      // Mock data - replace with actual API call
      const mockData: Questionnaire[] = [
        {
          _id: "1",
          title: "Customer Feedback Survey",
          description: "General customer satisfaction survey for our services",
          formId: "FORM-FEEDBACK-001",
          sendToIndividual: "john.doe@example.com",
          sendToGroup: ["customers", "subscribers"],
          sections: [
            {
              id: "section1",
              name: "Personal Information",
              fields: [
                { id: "field1", label: "Full Name", type: "text", required: true },
                { id: "field2", label: "Email Address", type: "email", required: true },
              ]
            },
            {
              id: "section2",
              name: "Feedback",
              fields: [
                { id: "field3", label: "Service Rating", type: "select", required: true, options: ["1", "2", "3", "4", "5"] },
                { id: "field4", label: "Comments", type: "textarea", required: false },
              ]
            }
          ],
          status: "active",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          _id: "2",
          title: "Employee Onboarding",
          description: "New employee information collection form",
          formId: "FORM-ONBOARD-002",
          sendToIndividual: "",
          sendToGroup: ["hr-team", "managers"],
          sections: [
            {
              id: "section1",
              name: "Personal Details",
              fields: [
                { id: "field1", label: "Full Name", type: "text", required: true },
                { id: "field2", label: "Date of Birth", type: "date", required: true },
              ]
            }
          ],
          status: "draft",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ];
      return mockData;
    },
  });

  const { mutate: deleteQuestionnaire } = useMutation({
    mutationFn: async (id: string) => {
      // Mock delete - replace with actual API call
      console.log("Deleting questionnaire:", id);
      return { data: { success: true } };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all questionnaires"] });
    },
    onError: (error: unknown) => {
      console.error("Error deleting questionnaire:", error);
    },
  });

  const { mutate: duplicateQuestionnaire } = useMutation({
    mutationFn: async (id: string) => {
      // Mock duplicate - replace with actual API call
      console.log("Duplicating questionnaire:", id);
      return { data: { success: true } };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["all questionnaires"] });
    },
    onError: (error: unknown) => {
      console.error("Error duplicating questionnaire:", error);
    },
  });

  const handleCreate = () => {
    router.push("/user/questionaire/create");
  };

  const handleEdit = (questionnaire: Questionnaire) => {
    router.push(`/user/questionaire/create?edit=${questionnaire._id}`);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this questionnaire?")) {
      deleteQuestionnaire(id);
    }
  };

  const handleDuplicate = (id: string) => {
    duplicateQuestionnaire(id);
  };

  const handleViewDetails = (questionnaire: Questionnaire) => {
    router.push(`/user/questionnaires/${questionnaire._id}`);
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredQuestionnaires = questionnaires.filter(
    (questionnaire) =>
      questionnaire.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      questionnaire.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      questionnaire.formId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentQuestionnaires = filteredQuestionnaires.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const computedTotalPages = Math.ceil(filteredQuestionnaires.length / itemsPerPage);

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
          <p className="mt-4 text-gray-600">Loading questionnaires...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Error loading questionnaires. Please try again.</p>
          <button 
            onClick={() => queryClient.invalidateQueries({ queryKey: ["all questionnaires"] })}
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
            <FileText className="w-6 h-6" />
            Questionnaires <span className="text-gray-400">({questionnaires.length})</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-end gap-2 mt-4 max-w-screen-xl mx-auto px-4">
          <button 
            onClick={handleCreate}
            className="flex items-center gap-2 bg-[#EAAB40] text-white px-4 py-2 rounded hover:bg-orange-500"
          >
            <Plus className="w-4 h-4" />
            Create Questionnaire
          </button>
        </div>
      </div>

      <div className="">
        <main className="flex-1 p-4 md:p-8">
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2 text-[#9D9999]">
              Questionnaire History
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
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Form ID</th>
                  <th className="py-3 px-4">Sections</th>
                  <th className="py-3 px-4">Fields</th>
                  <th className="py-3 px-4">Recipients</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Created Date</th>
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentQuestionnaires.length > 0 ? (
                  currentQuestionnaires.map((questionnaire) => (
                    <tr
                      key={questionnaire._id}
                      className="text-gray-500 border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900">{questionnaire.title}</td>
                      <td className="py-3 px-4 max-w-xs truncate" title={questionnaire.description}>
                        {questionnaire.description}
                      </td>
                      <td className="py-3 px-4 font-mono text-sm">{questionnaire.formId}</td>
                      <td className="py-3 px-4 text-center">
                        {questionnaire.sections.length}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {questionnaire.sections.reduce((total, section) => total + section.fields.length, 0)}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-col gap-1">
                          {questionnaire.sendToIndividual && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              Individual
                            </span>
                          )}
                          {questionnaire.sendToGroup.length > 0 && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {questionnaire.sendToGroup.length} Groups
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          questionnaire.status === 'active' 
                            ? 'bg-green-100 text-green-800'
                            : questionnaire.status === 'draft'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {questionnaire.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        {new Date(questionnaire.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleViewDetails(questionnaire)}
                            className="w-4 h-4 inline-block cursor-pointer text-blue-600 hover:text-blue-800"
                            title="View Details"
                          >
                            <Users />
                          </button>
                          <button
                            onClick={() => handleDuplicate(questionnaire._id)}
                            className="w-4 h-4 inline-block cursor-pointer text-purple-600 hover:text-purple-800"
                            title="Duplicate"
                          >
                            <Copy />
                          </button>
                          <button
                            onClick={() => handleEdit(questionnaire)}
                            className="w-4 h-4 inline-block cursor-pointer text-green-600 hover:text-green-800"
                            title="Edit"
                          >
                            <Pencil />
                          </button>
                          <button
                            onClick={() => handleDelete(questionnaire._id)}
                            className="text-red-500 w-4 h-4 inline-block cursor-pointer hover:text-red-700"
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
                      No questionnaires found.
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