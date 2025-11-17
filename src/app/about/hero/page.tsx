
"use client"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div
        id="about-hero"
        className="w-full"
        style={{
          background: "linear-gradient(180deg, #F4EFFA 0%, rgba(93, 42, 139, 0.1) 10%, #F4EFFA 100%)",
        }}
      >
        <div className="hidden md:block" style={{ width: "1440px", height: "742px", margin: "0 auto", position: "relative" }}>
          <div style={{ width: "819px", height: "299px", position: "absolute", top: "217px", left: "311px", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center", justifyContent: "center" }}>
            <h1
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                fontSize: "50px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#1A1A1A",
                width: "703px",
                height: "180px",
                margin: 0,
              }}
            >
              Redefining Measurement Through AI
            </h1>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "130%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "#6E6E6EB2",
                width: "819px",
                height: "99px",
                margin: 0,
              }}
            >
              We&apos;re building intelligent tools that make precision accessible to everyone — from designers and engineers to everyday users through smart, image-based measurement technology.
            </p>
          </div>
        </div>

        <div className="md:hidden" style={{ padding: "24px 24px 48px" }}>
          <div style={{ maxWidth: "819px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "Monument Extended, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(32px, 8vw, 50px)",
                lineHeight: "110%",
                textAlign: "center",
                color: "#1A1A1A",
                margin: 0,
              }}
            >
              Redefining Measurement Through AI
            </h1>
            <p
              style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 4vw, 24px)",
                lineHeight: "130%",
                textAlign: "center",
                color: "#6E6E6EB2",
                marginTop: "16px",
              }}
            >
              We&apos;re building intelligent tools that make precision accessible to everyone — from designers and engineers to everyday users through smart, image-based measurement technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}