import Image from "next/image"

export function ValueSection() {
  const goals = [
    {
      icon: "/Frame 1707479188.png",
      title: "Innovation",
      description: "We explore new ways to blend AI and usability for smarter results.",
    },
    {
      icon: "/Frame 1707479188 (1).png",
      title: "Accuracy",
      description: "Precision isn't an option; it's our foundation.",
    },
    {
      icon: "/Frame 1707479188 (2).png",
      title: "Accessibility",
      description: "Everyone deserves access to tools that make their work easier.",
    },
    {
      icon: "/Frame 1707479188 (3).png",
      title: "Integrity",
      description: "We build with honesty, transparency, and purpose.",
    },
  ]

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col items-center justify-center gap-4 mb-12 lg:mb-16 max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-4xl font-normal"
            style={{
              fontFamily: "Monument Extended, sans-serif",
              lineHeight: "100%",
            }}
          >
            Our Values
          </h2>
          <p
            className="text-gray-600 text-lg lg:text-xl"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              lineHeight: "130%",
            }}
          >
            Technology is only as powerful as the impact it creates.
          </p>
        </div>

        {/* Cards Container - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300"
              style={{
                borderColor: "#E4D8F3",
              }}
            >
              {/* Image Section */}
              <div className="relative w-full aspect-[624/277]">
                <Image
                  src={goal.icon}
                  alt={goal.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 624px"
                />
              </div>

              {/* Text Section */}
              <div className="p-6 lg:p-8">
                <div className="flex flex-col gap-4 lg:gap-5">
                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-medium"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      lineHeight: "110%",
                    }}
                  >
                    {goal.title}
                  </h3>

                 
                  <p
                    className="text-gray-600 text-base lg:text-lg leading-relaxed"
                    style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValueSection