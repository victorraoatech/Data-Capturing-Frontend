"use client";

import Header from "@/components/Header";
import { useState, useRef, useEffect } from "react";

export default function TwoFactorPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value[0];
    }

    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    const newCode = [...code];

    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newCode[i] = pastedData[i];
      }
    }

    setCode(newCode);
    const nextEmptyIndex = newCode.findIndex((val) => !val);
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header title="CaptureIt" />
      <main className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Two-Factor Authentication</h1>
          <p className="text-gray-400 mb-8">
            Enter the code from your authenticator app
          </p>
          <div className="flex gap-3 mb-6 justify-center">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-14 h-16 bg-[#3a3a4a] border-2 border-[#3a3a4a] rounded-lg text-center text-2xl font-semibold focus:border-[#7c3aed] focus:outline-none transition-colors"
              />
            ))}
          </div>
          <button className="text-gray-400 hover:text-white underline mb-8 block mx-auto transition-colors">
            Didn&apos;t receive a code?
          </button>
          <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Verify
          </button>
        </div>
      </main>
    </div>
  );
}
