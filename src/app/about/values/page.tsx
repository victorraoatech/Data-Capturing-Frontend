import Image from "next/image"

export function ValueSection() {
  const goals = [
    { icon: "/Frame 1707479188.png", title: "Innovation", description: "We explore new ways to blend AI and usability for smarter results." },
    { icon: "/Frame 1707479188 (1).png", title: "Accuracy", description: "Precision isn't an option; it's our foundation." },
    { icon: "/Frame 1707479188 (2).png", title: "Accessibility", description: "Everyone deserves access to tools that make their work easier." },
    { icon: "/Frame 1707479188 (3).png", title: "Integrity", description: "We build with honesty, transparency, and purpose." },
  ]

  return (
    <section className="w-full">
      <div className="hidden md:block" style={{ width: "1279px", margin: "0 auto", position: "relative" }}>
       
       
       
        <div style={{ width: "566px", height: "86px", position: "absolute", left: "428px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "Monument Extended, sans-serif", fontWeight: 400, fontSize: "36px", lineHeight: "100%", textAlign: "center", color: "#1A1A1A", width: "566px", height: "43px", margin: 0 }}>Our Values</h2>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "100%", textAlign: "center", color: "#6E6E6EB2", width: "566px", height: "27px", margin: 0 }}>
            Technology is only as powerful as the impact it creates.
          </p>
        </div>
        <div style={{ width: "1279px", display: "flex", flexWrap: "wrap", gap: "31px", paddingTop: "110px" }}>
          {goals.map((goal, index) => (
            <div key={index} style={{ width: "624px", height: "450px", borderRadius: "10px", border: "1px solid #E4D8F3", boxShadow: "0px 4px 8px 0px rgba(26, 26, 26, 0.25)", overflow: "hidden", background: "#FFFFFF" }}>
              <div className="relative" style={{ width: "624px", height: "277px" }}>
                <Image src={goal.icon} alt={goal.title} fill className="object-cover" sizes="624px" />
              </div>
              <div style={{ height: "173px", padding: "20px 34px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: "28px", lineHeight: "100%", color: "#1A1A1A", margin: 0 }}>{goal.title}</h3>
                <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: "130%", color: "#6E6E6EB2", margin: 0 }}>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden w-full py-12 px-4">
        <div className="text-center mb-8">
          <h2 style={{ fontFamily: "Monument Extended, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "110%", color: "#1A1A1A", margin: 0 }}>Our Values</h2>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "130%", color: "#6E6E6EB2", marginTop: "10px" }}>Technology is only as powerful as the impact it creates.</p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {goals.map((goal, index) => (
            <div key={index} className="rounded-xl border overflow-hidden" style={{ borderColor: "#E4D8F3", boxShadow: "0px 4px 8px 0px rgba(26, 26, 26, 0.15)" }}>
              <div className="relative w-full" style={{ height: "220px" }}>
                <Image src={goal.icon} alt={goal.title} fill className="object-cover" sizes="100vw" />
              </div>
              <div className="p-4">
                <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: "18px", lineHeight: "110%", color: "#1A1A1A", margin: 0 }}>{goal.title}</h3>
                <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: "130%", color: "#6E6E6EB2", marginTop: "8px" }}>{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueSection