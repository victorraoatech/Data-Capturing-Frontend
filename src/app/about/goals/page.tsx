

import Image from "next/image"

export function GoalsSection() {
  const goals = [
    {
      icon: (
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src="/assets/pin.png"
            alt="Make Work Seamless"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 32px, 40px"
          />
        </div>
      ),
      title: "To Make Work Seamless",
      description:
        "We eliminate complexity by tackling friction and inefficiencies — bringing clarity and ease to your workflows",
    },
    {
      icon: (
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src="/assets/arror.png"
            alt="Make Empowering Work"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 32px, 40px"
          />
        </div>
      ),
      title: "To Make Empowering Work",
      description: "We cultivate purpose by fueling trust, confidence, and performance through meaningful engagement",
    },
    {
      icon: (
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <Image
            src="/assets/h.png"
            alt="Match Client Success With Ours"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 32px, 40px"
          />
        </div>
      ),
      title: "To Match Client Success With Ours",
      description: "We're invested in your growth — because your achievements fuel ours",
    },
  ]

  return (
    <div className="w-full py-10 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12 md:mb-16 max-w-2xl mx-auto">
          <h2 className="text-center font-['Monument_Extended'] font-normal text-2xl sm:text-3xl md:text-4xl leading-tight">
            Our Goals
          </h2>
          <p className="text-center text-gray-600 font-['Manrope'] font-normal text-base sm:text-lg md:text-xl leading-relaxed md:leading-tight">
            We`&apos;`re driven by simplicity, empowerment, and shared success.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border rounded-[10px] p-6 md:p-8 flex flex-col items-center justify-start flex-1"
              style={{
                borderColor: "#E4D8F3",
                minHeight: "280px",
              }}
            >
              {/* Icon */}
              <div className="text-3xl md:text-4xl mb-4 md:mb-6 flex items-center justify-center w-full">
                {goal.icon}
              </div>

              {/* Title */}
              <h3 className="text-center mb-3 md:mb-4 font-['Manrope'] font-medium text-xl sm:text-2xl md:text-2xl lg:text-2xl leading-tight">
                {goal.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 font-['Manrope'] font-light text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GoalsSection