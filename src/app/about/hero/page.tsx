"use client"



export default function AboutPage() {
  return (
    <div className="min-h-screen">
     

      {/* About Section */}
      <div className="w-full bg-[#d0c1df]" style={{ height: "742px" }}>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
          {/* Text Container */}
          <div
            className="flex flex-col items-center justify-center gap-5"
            style={{
              width: "819px",
              height: "299px",
            }}
          >
            {/* Heading */}
            <h1
              className="text-center"
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                fontSize: "50px",
                lineHeight: "100%",
                letterSpacing: "0%",
                width: "703px",
                height: "180px",
              }}
            >
              Redefining Measurement Through AI
            </h1>

            {/* Description */}
            <p
              className="text-center text-gray-600"
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              We're building intelligent tools that make precision accessible to everyone — from designers and engineers
              to everyday users through smart, image-based measurement technology
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
