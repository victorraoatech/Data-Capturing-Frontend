"use client";

import TailorHeader from "@/components/TailorHeader";
import { useState } from "react";

export default function ClientDetailsPage() {
  const [activeTab, setActiveTab] = useState("Measurements");

  const client = {
    name: "Sophia Clark",
    clientId: "12345",
    joined: "2022-05-15",
    avatar: "/avatars/sophia.jpg",
  };

  const currentMeasurements = {
    height: '5\'6"',
    weight: "130 lbs",
    chest: '34"',
    waist: '28"',
    hips: '36"',
    sleeveLength: '24"',
    inseam: '30"',
    neck: '14"',
    shoulderWidth: '16"',
    armLength: '22"',
  };

  const measurementHistory = [
    {
      date: "2023-01-15",
      height: '5\'6"',
      weight: "130 lbs",
      chest: '34"',
      waist: '28"',
      hips: '36"',
    },
    {
      date: "2022-08-20",
      height: '5\'6"',
      weight: "132 lbs",
      chest: '34"',
      waist: '29"',
      hips: '37"',
    },
    {
      date: "2022-05-15",
      height: '5\'6"',
      weight: "135 lbs",
      chest: '35"',
      waist: '30"',
      hips: '38"',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <TailorHeader title="TailorMade" activeTab="Clients" />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Client Details</h1>
          <p className="text-gray-600">
            View and manage client information, measurements, and order history.
          </p>
        </div>

        <div className="flex items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 overflow-hidden flex-shrink-0">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/40"></div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black mb-1">
              {client.name}
            </h2>
            <p className="text-gray-600 text-sm mb-1">
              Client ID: {client.clientId}
            </p>
            <p className="text-gray-600 text-sm">Joined: {client.joined}</p>
          </div>
        </div>

        <div className="border-b border-gray-200 mb-8">
          <div className="flex gap-8">
            {["Measurements", "Orders", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "Measurements" && (
          <>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-6">
                Current Measurements
              </h3>
              <div className="grid grid-cols-2 gap-x-16 gap-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Height</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.height}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Weight</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.weight}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Chest</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.chest}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Waist</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.waist}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Hips</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.hips}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Sleeve Length</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.sleeveLength}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Inseam</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.inseam}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Neck</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.neck}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Shoulder Width</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.shoulderWidth}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Arm Length</p>
                  <p className="text-black font-medium">
                    {currentMeasurements.armLength}
                  </p>
                </div>
              </div>
              <button className="mt-8 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-black font-medium rounded-lg transition-colors">
                Edit Measurements
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black mb-6">
                Measurement History
              </h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Date
                      </th>
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Height
                      </th>
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Weight
                      </th>
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Chest
                      </th>
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Waist
                      </th>
                      <th className="text-left text-sm font-medium text-gray-700 px-6 py-3">
                        Hips
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {measurementHistory.map((record, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-200 last:border-0"
                      >
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.date}
                        </td>
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.height}
                        </td>
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.weight}
                        </td>
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.chest}
                        </td>
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.waist}
                        </td>
                        <td className="text-sm text-gray-700 px-6 py-4">
                          {record.hips}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
