
"use client"
import type React from "react"
import Image from "next/image"

interface FeatureCard {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureCard[] = [
  {
    icon: (
      <Image
        src="/assets/fram66.png"
        alt="Machine Learning"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Machine Learning Algorithms",
    description: "Our system learns from thousands of data samples to improve measurement accuracy over time.",
  },
  {
    icon: (
      <Image
        src="/assets/Frame 249.png"
        alt="Computer Vision"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Computer Vision Detection",
    description: "Detects edges, contours, and reference points in your image to calculate dimensions precisely.",
  },
  {
    icon: (
      <Image
        src="/assets/fram333.png"
        alt="Smart Calibration"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Smart Calibration",
    description:
      "Uses object or body ratios and context clues (like posture or object placement) to auto-correct angles and perspective.",
  },
  {
    icon: (
      <Image
        src="/assets/Frame 249 (1).png"
        alt="Data Privacy"
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Data Privacy",
    description: "All processing happens securely – your uploaded images are not stored or shared.",
  },
]

export function AIFeaturesSection() {
  return (
    <section className="w-full">
      <div className="relative hidden md:block" style={{ width: "1296px", height: "637px", margin: "0 auto" }}>
        <div className="absolute" style={{ width: "566px", height: "156px", left: "377px", gap: "16px" }}>
          <h2
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#1A1A1A",
              width: "566px",
              height: "86px",
              margin: 0,
            }}
          >
            Built on Advanced AI & Computer Vision
          </h2>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#6E6E6EB2",
              width: "566px",
              height: "54px",
              marginTop: "16px",
            }}
          >
            Our technology analyzes every pixel, shape, and proportion — delivering accurate measurements without manual input.
          </p>
        </div>

        <div className="absolute" style={{ width: "1296px", height: "381px", top: "256px", display: "flex", gap: "28px" }}>
          {features.map((feature, index) => (
            <div key={index} style={{ width: "303px", height: "381px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", gap: "30px" }}>
              {/* Increased icon container size */}
              <div style={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 500,
                  fontSize: "28px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#1A1A1A",
                  width: "239px",
                  height: "76px",
                  margin: 0,
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 300,
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#6E6E6EB2",
                  width: "303px",
                  height: "81px",
                  margin: 0,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div style={{ width: "100%", maxWidth: "1296px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", paddingLeft: "1rem", paddingRight: "1rem" }}>
            <h2
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "110%",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Built on Advanced AI & Computer Vision
            </h2>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "130%",
                color: "#6E6E6EB2",
                marginTop: "12px",
              }}
            >
              Our technology analyzes every pixel, shape, and proportion — delivering accurate measurements without manual input.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ marginTop: "24px" }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description}: FeatureCard & { index: number }) {
  return (
    <div className="flex flex-col items-center text-center p-4 lg:p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300">
      {/* Increased icon container size for mobile */}
      <div className="w-32 h-32 flex items-center justify-center mb-4 lg:mb-6 p-2">
        <div className="relative w-24 h-24">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-3 lg:gap-4">
        <h3 className="font-manrope font-semibold text-lg sm:text-xl lg:text-2xl leading-tight text-black">
          {title}
        </h3>
        <p className="font-manrope font-light text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default AIFeaturesSection