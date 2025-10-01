import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Demo Pages</h1>
        <div className="grid gap-4">
          <Link
            href="/surveys"
            className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">My Surveys</h2>
            <p className="text-gray-400">View and manage your surveys</p>
          </Link>
          <Link
            href="/two-factor"
            className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Two-Factor Authentication</h2>
            <p className="text-gray-400">Enter verification code</p>
          </Link>
          <Link
            href="/audit-logs"
            className="block p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#333333] transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">Audit Logs</h2>
            <p className="text-gray-400">View activity timeline</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
