import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Demo Pages</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">CaptureIt - Survey App</h2>
          <div className="grid gap-4">
            <Link
              href="/surveys"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">My Surveys</h3>
              <p className="text-gray-400">View and manage your surveys</p>
            </Link>
            <Link
              href="/two-factor"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Two-Factor Authentication</h3>
              <p className="text-gray-400">Enter verification code</p>
            </Link>
            <Link
              href="/audit-logs"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Audit Logs</h3>
              <p className="text-gray-400">View activity timeline</p>
            </Link>
            <Link
              href="/client-info"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Client Information Form</h3>
              <p className="text-gray-400">Capture client details with photo upload</p>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">TailorMade - Client Management</h2>
          <div className="grid gap-4">
            <Link
              href="/tailor/clients/1"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Client Details - Sophia Clark</h3>
              <p className="text-gray-400">View measurements and history</p>
            </Link>
            <Link
              href="/tailor/clients/1/message"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Client Details - Olivia Bennett (with Message)</h3>
              <p className="text-gray-400">View client with messaging option</p>
            </Link>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Onboarding & Success</h2>
          <div className="grid gap-4">
            <Link
              href="/onboarding/profile"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Profile Completion</h3>
              <p className="text-gray-400">Onboarding form with progress indicator</p>
            </Link>
            <Link
              href="/success"
              className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Success Page</h3>
              <p className="text-gray-400">Confirmation after form submission</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
