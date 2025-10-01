import Link from "next/link";

interface HeaderProps {
  title: string;
  showIcons?: boolean;
}

export default function Header({ title, showIcons = false }: HeaderProps) {
  return (
    <header className="border-b border-[#2a2a2a] bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-6 h-6 bg-white"></div>
          <span className="text-lg font-semibold">{title}</span>
        </Link>
        {showIcons && (
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="1.5" />
                <path d="M10 7v3m0 3v.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="6" r="3" stroke="white" strokeWidth="1.5" />
                <path
                  d="M5 16c0-2.761 2.239-5 5-5s5 2.239 5 5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
