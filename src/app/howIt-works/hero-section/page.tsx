


"use client";

import { memo } from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      aria-label="Hero"
      className="w-full bg-[#F4EFFA] flex items-center"
      style={{
        // allow the section to fill viewport height visually but be responsive
        minHeight: "70vh",
        // fallback vertical padding
        paddingTop: "3rem",
        paddingBottom: "3rem",
      }}
    >
      {/* Centered container. Use max-w to preserve desktop proportions but be fluid */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Layout: left column (text) and right column (image) */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* LEFT: Text column */}
          <div
            className="flex flex-col justify-center"
            style={{
              flex: "0 1 44%", // roughly 614/1440 = 42-44%
              minWidth: 280,    // prevents the column from collapsing too small
              gap: "1.5rem",
            }}
          >
            {/* Text block: allow heading to wrap naturally */}
            <div>
              <h1
                style={{
                  fontFamily: "Monument Extended, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4.5vw, 50px)", // scales with viewport and zoom
                  lineHeight: "1.02",
                  margin: 0,
                  color: "#000000",
                }}
              >
                Powered by AI,
                <br />
                designed for
                <br />
                speed, accuracy,
                <br />
                and simplicity
              </h1>

              <p
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  lineHeight: 1.4,
                  color: "#666666",
                  marginTop: "0.75rem",
                  maxWidth: "36rem", // keeps line length comfortable
                }}
              >
                Get accurate measurements in three simple steps.
              </p>
            </div>

            {/* Action row */}
            <div className="flex items-center gap-4">
              <button
                style={{
                  minWidth: "150px",
                  height: "52px",
                  backgroundColor: "#5D2A8B",
                  color: "#fff",
                  borderRadius: "40px",
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "clamp(14px, 1.4vw, 18px)",
                  fontWeight: 600,
                }}
                className="hover:bg-[#4B1E6E] px-6"
              >
                Try it Now
              </button>
             
              
            </div>
          </div>

          {/* RIGHT: Image column */}
          <div
            className="flex items-center justify-center"
            style={{
              flex: "0 1 50%", // allow image to take remaining space
              minWidth: 300,   // prevents image from shrinking to 0 on zoom
            }}
          >
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "560px", // keeps image similar to original 500-560px
                aspectRatio: "1 / 1", // keep square-ish; adjust to your design ratio if needed
              }}
            >
              <Image
                src="/assets/Artificial Intelligence 2 Streamline Barcelona.png"
                alt="AI Scientist Illustration"
                fill
                priority
                sizes="(min-width: 1024px) 560px, (min-width: 640px) 40vw, 90vw"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
