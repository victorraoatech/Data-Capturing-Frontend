import Header from "@/components/Header";
import SurveyCard from "@/components/SurveyCard";
import { supabase } from "@/lib/supabase";

export const dynamic = 'force-dynamic';

export default async function SurveysPage() {
  const { data: surveys } = await supabase
    .from("surveys")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header title="CaptureIt" showIcons />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12">My Surveys</h1>
        <div className="space-y-8">
          {surveys && surveys.length > 0 ? (
            surveys.map((survey) => (
              <SurveyCard
                key={survey.id}
                type={survey.type}
                title={survey.title}
                responses={survey.responses}
                lastUpdated={new Date(survey.last_updated).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "2-digit", day: "2-digit" }
                )}
                imageUrl={survey.image_url}
              />
            ))
          ) : (
            <div className="text-center py-20">
              <div className="mx-auto w-96 h-64 bg-gradient-to-br from-[#f5e6d3] to-[#e8d4c0] rounded-lg mb-8 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded shadow-lg w-3/4 h-3/4"></div>
              </div>
              <h2 className="text-2xl font-bold mb-4">No Surveys Yet</h2>
              <p className="text-gray-400 mb-8">
                Create your first survey to start collecting data.
              </p>
              <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Create Survey
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
