

import Image from "next/image"

export function GoalsSection() {
  const goals = [
    { iconSrc: "/assets/pin.png", title: "To Make Work Seamless", description: "We eliminate complexity by tackling friction and inefficiencies — bringing clarity and ease to your workflows" },
    { iconSrc: "/assets/arror.png", title: "To Make Empowering Work", description: "We cultivate purpose by fueling trust, confidence, and performance through meaningful engagement" },
    { iconSrc: "/assets/h.png", title: "To Match Client Success With Ours", description: "We're invested in your growth — because your achievements fuel ours" },
  ]

  return (
    <section className="w-full">
      {/* Desktop precise layout */}
      <div className="relative hidden md:block" style={{ width: "1283px", height: "543px", margin: "0 auto" }}>
        {/* Header */}
        <div className="absolute" style={{ width: "566px", height: "113px", left: "359px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", justifyContent: "center" }}>
          <h2
            style={{
              fontFamily: "Monument Extended, sans-serif",
              fontWeight: 400,
              fontSize: "36px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#1A1A1A",
              width: "566px",
              height: "43px",
              margin: 0,
            }}
          >
            Our Goals
          </h2>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "100%",
              textAlign: "center",
              color: "#6E6E6EB2",
              width: "566px",
              height: "54px",
              margin: 0,
            }}
          >
            We &apos;re driven by simplicity, empowerment, and shared success.
          </p>
        </div>

        {/* Cards Row */}
        <div className="absolute" style={{ width: "1283px", height: "330px", top: "213px", display: "flex", gap: "22px" }}>
          {goals.map((goal, index) => (
            <div key={index} style={{ width: "413px", height: "330px", borderRadius: "10px", border: "1px solid #E4D8F3", boxShadow: "0px 4px 16px 0px rgba(26, 26, 26, 0.25)", position: "relative", padding: "30px" }}>
            
              <div style={{ 
                width: "80px", 
                height: "80px", 
                borderRadius: "40px", 
                position: "absolute", 
                top: "30px", 
                left: "30px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
               
              }}>
                <Image 
                  src={goal.iconSrc} 
                  alt={goal.title} 
                  width={60} 
                  height={60} 
                  style={{ objectFit: "contain" }} 
                />
              </div>
              <div style={{ marginTop: "122px" }}> {/* Increased margin to account for larger icon */}
                <h3
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 500,
                    fontSize: "28px",
                    lineHeight: "100%",
                    color: "#1A1A1A",
                    width: "312px",
                    height: "76px",
                    margin: 0,
                  }}
                >
                  {goal.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#6E6E6EB2",
                    marginTop: "10px",
                  }}
                >
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full px-4 py-10">
        <div className="text-center mb-8">
          <h2 style={{ fontFamily: "Monument Extended, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "110%", color: "#1A1A1A", margin: 0 }}>Our Goals</h2>
          <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "130%", color: "#6E6E6EB2", marginTop: "12px" }}>
            We&apos;re driven by simplicity, empowerment, and shared success.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {goals.map((goal, index) => (
            <div key={index} className="rounded-[10px] border" style={{ borderColor: "#E4D8F3", padding: "20px", boxShadow: "0px 4px 16px 0px rgba(26, 26, 26, 0.1)" }}>
              <div className="flex items-start gap-3">
                {/* Increased mobile icon size */}
                <div style={{ 
                  width: "60px", 
                  height: "60px", 
                  borderRadius: "30px", 
                  background: "rgba(93, 42, 139, 0.06)", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <Image 
                    src={goal.iconSrc} 
                    alt={goal.title} 
                    width={40} 
                    height={40} 
                    style={{ objectFit: "contain" }} 
                  />
                </div>
                <div>
                  <h3 style={{ fontFamily: "Manrope, sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: "110%", color: "#1A1A1A", margin: 0 }}>{goal.title}</h3>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: "130%", color: "#6E6E6EB2", marginTop: "6px" }}>{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GoalsSection