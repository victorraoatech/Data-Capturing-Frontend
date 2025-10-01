import Link from "next/link";

interface TailorHeaderProps {
  title: string;
  activeTab?: string;
}

export default function TailorHeader({ title, activeTab }: TailorHeaderProps) {
  const navItems = [
    { label: "Dashboard", href: "/tailor/dashboard" },
    { label: "Clients", href: "/tailor/clients" },
    { label: "Orders", href: "/tailor/orders" },
    { label: "Fabric", href: "/tailor/fabric" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <div className="w-2 h-4 bg-white"></div>
            </div>
            <span className="text-lg font-semibold text-black">{title}</span>
          </Link>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeTab === item.label
                    ? "text-black"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4v8M4 8h8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 overflow-hidden">
              <div className="w-full h-full bg-center bg-cover"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
