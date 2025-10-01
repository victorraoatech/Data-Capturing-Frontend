import Header from "@/components/Header";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function AuditLogsPage() {
  const { data: logs } = await supabase
    .from("audit_logs")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header title="CaptureIt" showIcons />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">Audit Logs</h1>
        <div className="relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-px bg-[#3a3a3a]"></div>
          <div className="space-y-6">
            {logs?.map((log) => (
              <div key={log.id} className="flex gap-4 relative">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#3a3a3a] bg-[#1a1a1a] flex items-center justify-center z-10">
                  {log.is_system ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="12"
                        height="12"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <text
                        x="8"
                        y="11"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        N
                      </text>
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="5"
                        r="2.5"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3 13c0-2.5 2-4.5 5-4.5s5 2 5 4.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-white">
                    {log.user_name} {log.action} {log.entity}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{log.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
