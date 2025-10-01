"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ClientInformationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "",
    notes: "",
  });

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header title="CaptureIt" showIcons />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Client Information</h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter full name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#3a3a4a] border border-[#3a3a4a] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#3a3a4a] border border-[#3a3a4a] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-4 py-3 bg-[#3a3a4a] border border-[#3a3a4a] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="contactMethod"
              className="block text-sm font-medium mb-2"
            >
              Preferred Contact Method
            </label>
            <div className="relative">
              <select
                id="contactMethod"
                value={formData.contactMethod}
                onChange={(e) =>
                  setFormData({ ...formData, contactMethod: e.target.value })
                }
                className="w-full px-4 py-3 bg-[#3a3a4a] border border-[#3a3a4a] rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all cursor-pointer"
              >
                <option value="">Select contact method</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              placeholder="Any specific requests or details?"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 bg-[#3a3a4a] border border-[#3a3a4a] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-transparent transition-all resize-none"
            />
          </div>

          <div className="border-2 border-dashed border-[#3a3a4a] rounded-lg p-12 text-center">
            <h3 className="text-lg font-semibold mb-2">Upload Client Photo</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Tap to upload or use the camera
            </p>
            <button
              type="button"
              className="bg-[#3a3a4a] hover:bg-[#4a4a5a] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Open Camera
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-4 rounded-lg transition-colors mt-8"
          >
            Submit Information
          </button>
        </form>
      </main>
    </div>
  );
}
