

"use client";
import { useAuth } from "@/api/hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Field,
  FieldArray,
  Form,
  Formik,
} from "formik";
import type React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

import {
  Plus,
  Trash2,
  Upload,
  ArrowLeft,
} from "lucide-react";
import { toast } from "@/app/components/hooks/use-toast";

interface BodySection {
  sectionName: string;
  size: number;
  neck?: number;
  customMeasurements: Array<{
    name: string;
    value: number;
  }>;
}

interface MeasurementFormValues {
  id: string;
  title: string;
  description: string;
  bodySections: BodySection[];
  pictures: File[];
  pictureLinks: string[];
  sim: string;
  otherName: string;
}

const validationSchema = Yup.object().shape({
  id: Yup.string().required("ID is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  sim: Yup.string().required("SIM is required"),
  otherName: Yup.string().required("Other name is required"),
  bodySections: Yup.array()
    .of(
      Yup.object().shape({
        sectionName: Yup.string().required("Section name is required"),
        size: Yup.number()
          .required("Size is required")
          .min(0, "Size must be positive"),
        neck: Yup.number()
          .min(0, "Neck must be positive")
          .nullable(),
        customMeasurements: Yup.array()
          .of(
            Yup.object().shape({
              name: Yup.string().required("Measurement name is required"),
              value: Yup.number()
                .required("Value is required")
                .min(0, "Value must be positive"),
            })
          )
      })
    )
    .min(1, "At least one body section is required"),
  pictureLinks: Yup.array().of(Yup.string().url("Must be a valid URL")),
});

const initialBodySections: BodySection[] = [
  {
    sectionName: "Head Section",
    size: 0,
    neck: 0,
    customMeasurements: []
  },
  {
    sectionName: "Chest Section", 
    size: 0,
    customMeasurements: []
  },
  {
    sectionName: "Abdomen Section",
    size: 0,
    customMeasurements: []
  },
  {
    sectionName: "Waist Section",
    size: 0,
    customMeasurements: []
  },
  {
    sectionName: "Thigh Section",
    size: 0,
    customMeasurements: []
  },
  {
    sectionName: "Leg Section",
    size: 0,
    customMeasurements: []
  }
];

const initialValues: MeasurementFormValues = {
  id: "",
  title: "",
  description: "",
  bodySections: initialBodySections,
  pictures: [],
  pictureLinks: [],
  sim: "Fistian Latinum",
  otherName: "21cm",
};

export default function CreateMeasurementForm() {
  const router = useRouter();
  const { client } = useAuth();
  const queryClient = useQueryClient();
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const createMeasurementMutation = useMutation({
    mutationFn: async (values: MeasurementFormValues) => {
      const formData = new FormData();

      // Basic information
      formData.append("id", values.id);
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("sim", values.sim);
      formData.append("otherName", values.otherName);

      // Body sections with measurements
      values.bodySections.forEach((section, sectionIndex) => {
        formData.append(`bodySections[${sectionIndex}][sectionName]`, section.sectionName);
        formData.append(`bodySections[${sectionIndex}][size]`, section.size.toString());
        
        if (section.neck !== undefined) {
          formData.append(`bodySections[${sectionIndex}][neck]`, section.neck.toString());
        }

        section.customMeasurements.forEach((measurement, measurementIndex) => {
          formData.append(`bodySections[${sectionIndex}][customMeasurements][${measurementIndex}][name]`, measurement.name);
          formData.append(`bodySections[${sectionIndex}][customMeasurements][${measurementIndex}][value]`, measurement.value.toString());
        });
      });

      // Picture links
      values.pictureLinks.forEach((link, index) => {
        formData.append(`pictureLinks[${index}]`, link);
      });

      // Uploaded pictures
      uploadedFiles.forEach((file) => {
        formData.append("pictures", file);
      });

      return client.post("/api/v1/measurements", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Measurement created successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["all measurements"] });
      router.push("/user/body-measurement");
    },
    onError: (error: unknown) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to create measurement",
        variant: "destructive",
      });
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900">
            Create Measurement
          </h1>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            createMeasurementMutation.mutate({
              ...values,
              pictures: uploadedFiles,
            });
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="space-y-6">
              {/* Basic Information */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Measurement Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ID
                    </label>
                    <Field
                      name="id"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter measurement ID"
                    />
                    {errors.id && touched.id && (
                      <p className="mt-1 text-sm text-red-600">{errors.id}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <Field
                      name="title"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter measurement title"
                    />
                    {errors.title && touched.title && (
                      <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    name="description"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter measurement description"
                  />
                  {errors.description && touched.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>
              </div>

              {/* Set Body Measurements */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Set Body Measurements
                </h3>

                <div className="space-y-6">
                  {values.bodySections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        {sectionIndex + 1}. {section.sectionName}
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        {/* Size Input */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Size
                          </label>
                          <Field
                            type="number"
                            name={`bodySections.${sectionIndex}.size`}
                            min="0"
                            step="0.1"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0.0"
                          />
                        </div>

                        {/* Neck Input - Only for Head Section */}
                        {section.sectionName === "Head Section" && (
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Neck
                            </label>
                            <Field
                              type="number"
                              name={`bodySections.${sectionIndex}.neck`}
                              min="0"
                              step="0.1"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="0.0"
                            />
                          </div>
                        )}
                      </div>

                      {/* Custom Measurements */}
                      <FieldArray name={`bodySections.${sectionIndex}.customMeasurements`}>
                        {({ remove, push }) => (
                          <div className="space-y-3">
                            {section.customMeasurements.map((measurement, measurementIndex) => (
                              <div key={measurementIndex} className="bg-white p-3 rounded-lg border border-gray-200">
                                <div className="flex items-center gap-3">
                                  <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Measurement Name
                                    </label>
                                    <Field
                                      name={`bodySections.${sectionIndex}.customMeasurements.${measurementIndex}.name`}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                      placeholder="Enter measurement name"
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Value
                                    </label>
                                    <Field
                                      type="number"
                                      name={`bodySections.${sectionIndex}.customMeasurements.${measurementIndex}.value`}
                                      min="0"
                                      step="0.1"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                      placeholder="0.0"
                                    />
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => remove(measurementIndex)}
                                    className="mt-6 text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}

                            <button
                              type="button"
                              onClick={() => push({ name: "", value: 0 })}
                              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
                            >
                              <Plus className="w-4 h-4" />
                              Add more
                            </button>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  ))}
                </div>
              </div>

              {/* Log Section */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                

                <div className="space-y-4">
                 

                  {/* Picture Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attach picture upload
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      <Upload className="absolute right-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>

                    {/* Uploaded Files List */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-3 space-y-2">
                        <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Picture Links */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Add pictures link to picture
                    </label>
                    <FieldArray name="pictureLinks">
                      {({ push, remove }) => (
                        <div className="space-y-3">
                          {values.pictureLinks.map((link, index) => (
                            <div key={index} className="flex gap-2">
                              <Field
                                name={`pictureLinks.${index}`}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="https://example.com/image.jpg"
                              />
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => push("")}
                            className="flex items-center gap-2 px-3 py-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg text-sm"
                          >
                            <Plus className="w-4 h-4" />
                            Add Link
                          </button>
                        </div>
                      )}
                    </FieldArray>
                  </div>
                </div>

               
              </div>

             

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 bg-white p-6 rounded-lg shadow-sm">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="flex items-center gap-2 px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    type="submit"
                    disabled={createMeasurementMutation.isPending}
                    className={`flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium ${
                      createMeasurementMutation.isPending ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {createMeasurementMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Creating...
                      </>
                    ) : (
                      <>Submit</>
                    )}
                  </button>
                </div>
              </div>

             
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}