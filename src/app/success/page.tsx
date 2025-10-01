import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 6L5 9L10 3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-semibold text-black">
                Data Capture
              </span>
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/home"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Home
              </Link>
              <Link
                href="/forms"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Forms
              </Link>
              <Link
                href="/responses"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Responses
              </Link>
              <Link
                href="/settings"
                className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
              >
                Settings
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 overflow-hidden">
                <div className="w-full h-full bg-center bg-cover"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          Your responses have been saved!
        </h1>
        <p className="text-gray-600 text-lg mb-12">
          Thank you for submitting your form. Your responses have been
          successfully saved and are now available for review.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Save Offline
          </button>
          <Link
            href="/dashboard"
            className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-3 rounded-lg font-medium transition-colors inline-block"
          >
            Go to Dashboard
          </Link>
        </div>
      </main>
    </div>
  );
}
