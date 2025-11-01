



import Image from "next/image";
import { memo } from "react";

const SimpleSteps = () => {
  return (
    <section className="flex flex-col items-center bg-white py-16">
      {/* Header layout (above the inner container) */}
      <div
        className="text-center"
        style={{
          width: "566px",
          height: "129px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "556px",
            height: "33px",
          }}
        >
          <h2
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "30px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              margin: 0,
              color: "#000",
              textTransform: "none",
            }}
          >
            Simple Steps, Smart
            <br />
            Results
          </h2>
        </div>

        <div
          style={{
            width: "556px",
            height: "27px",
            marginTop: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#7A7A7A",
            }}
          >
            Just upload, wait a moment, and let our AI do the rest.
          </p>
        </div>
      </div>

      {/* Outer wrapper to position chevrons outside */}
    <div
  className="relative mt-8 flex items-center justify-center"
  style={{ width: "1230px", height: "519px" }}
>
  {/* LEFT (PREV) circular nav button — outside & centered */}
  <button
    aria-label="previous"
    className="absolute flex items-center justify-center"
    style={{
      left: "56px", // closer to the card
      top: "50%",
      transform: "translateY(-50%)",
      width: "84px",
      height: "84px",
      borderRadius: "9999px",
      background: "rgba(238,176,254,0.12)",
      opacity: 0.9,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      zIndex: 20,
    }}
  >
    <Image
      src="/assets/SVG (1).png"
      alt="previous"
      width={32}
      height={32}
      style={{ objectFit: "contain" }}
    />
  </button>

  {/* MAIN CENTER CONTAINER */}
  <div
    style={{
      width: "998px",
      height: "519px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* Inner white bordered card */}
    <div
      style={{
        width: "880px",
        height: "340px",
        borderRadius: "12px",
        background: "#fff",
        border: "1px solid rgba(238,176,254,0.6)",
        boxShadow: "0 8px 30px rgba(93,42,139,0.06)",
        display: "flex",
        alignItems: "center",
        padding: "28px 36px",
        position: "relative",
      }}
    >
      {/* Step badge */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "63px",
          height: "31px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
          background: "rgba(238,176,254,0.12)",
          color: "#6B21A8",
          fontFamily: "Manrope, sans-serif",
          fontSize: "14px",
          opacity: 0.6,
          padding: "6px 12px",
        }}
      >
        Step 1
      </div>

      {/* Left illustration area */}
      <div
        style={{
          width: "480px",
          height: "240px",
          flexShrink: 0,
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/assets/Frame 1707479275.png"
            alt="step illustration"
            fill
            style={{ objectFit: "contain" }}
            sizes="480px"
          />
        </div>
      </div>

      {/* Right text area */}
      <div style={{ marginLeft: "36px", width: "340px", textAlign: "left" }}>
        <h3
          style={{
            fontFamily: "Monument Extended, sans-serif",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "100%",
            margin: 0,
            color: "#111827",
          }}
        >
          Upload Your Image
        </h3>
        <p
          style={{
            fontFamily: "Manrope, sans-serif",
            fontSize: "16px",
            marginTop: "12px",
            color: "#6B7280",
            lineHeight: "1.4",
          }}
        >
          Start by uploading a clear image of yourself or an object.
        </p>
      </div>

      {/* Decorative warm icon */}
      <div
        style={{
          position: "absolute",
          top: "22px",
          right: "20px",
          width: "40px",
          height: "40px",
          opacity: 0.9,
        }}
        aria-hidden
      >
        <div style={{ position: "relative", width: "100%", height: "56.77px" }}>
          <Image
            src="/Warm.png"
            alt="decor"
            fill
            style={{ objectFit: "contain" }}
            sizes="40px"
          />
        </div>
      </div>
    </div>
  </div>

  {/* RIGHT (NEXT) circular nav button — outside & centered */}
  <button
    aria-label="next"
    className="absolute flex items-center justify-center"
    style={{
      right: "56px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "84px",
      height: "84px",
      borderRadius: "9999px",
      background: "rgba(238,176,254,0.12)",
      opacity: 0.9,
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      zIndex: 20,
    }}
  >
    <Image
      src="/assets/SVG.png"
      alt="next"
      width={36}
      height={32}
      style={{ objectFit: "contain", color:"#5D2A8B" }}
    />
  </button>
</div>

    </section>
  );
};

export default memo(SimpleSteps);