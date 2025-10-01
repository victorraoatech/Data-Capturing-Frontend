interface SurveyCardProps {
  type: string;
  title: string;
  responses: number;
  lastUpdated: string;
  imageUrl?: string;
}

export default function SurveyCard({
  type,
  title,
  responses,
  lastUpdated,
  imageUrl,
}: SurveyCardProps) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex-1">
        <p className="text-sm text-gray-400 mb-2">{type}</p>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">
          Responses: {responses} | Last Updated: {lastUpdated}
        </p>
      </div>
      {imageUrl && (
        <div className="w-72 h-44 bg-gradient-to-br from-[#f5e6d3] to-[#e8d4c0] rounded-lg overflow-hidden flex-shrink-0">
          <div className="w-full h-full flex items-center justify-center p-6">
            <div className="bg-white/80 backdrop-blur-sm rounded shadow-lg p-4 w-full h-full">
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                <div className="h-2 bg-gray-300 rounded w-full"></div>
                <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                <div className="h-2 bg-gray-300 rounded w-full"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
