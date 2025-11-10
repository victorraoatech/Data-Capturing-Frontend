"use client";

import { memo } from 'react';

const Audience = () => {
  const targetAudience = [
    { 
      id: 1, 
      image: '/lucas-favre-v8JtKauvvDk-unsplash 1.png', 
      title: 'Fashion\nDesigner', 
      bgColor: '#D78686',
      tall: true
    },
    { 
      id: 2, 
      image: '/thisisengineering-CUA-_IGpXXo-unsplash 1.png', 
      title: 'Engineer/\nTechnician',
      bgColor: '#86C5D7',
      tall: false
    },
    { 
      id: 3, 
      image: '/roberto-cortese-ejhjSZKTeeg-unsplash 1.png', 
      title: 'Online\nRetailer',
      bgColor: '#D7C586',
      tall: false
    },
    { 
      id: 4, 
      image: '/collov-home-design-js8AQlw71HA-unsplash 1.png', 
      title: 'Interior\nDesigners',
      bgColor: '#A586D7',
      tall: false
    },
    { 
      id: 5, 
      image: '/image 7.png', 
      title: 'Fitness\nCoaches',
      bgColor: '#86D7A5',
      tall: false
    },
    { 
      id: 6, 
      image: '/image 8.png', 
      title: 'Individuals-\nYou',
      bgColor: '#D786C5',
      tall: true
    },
  ];

  return (
    <section className="py-20 bg-white" style={{ marginBottom: "200px" }}>
      <div 
        className="mx-auto"
        style={{
          width: "1282px",
          height: "846px",
        }}
      >
        {/* Header */}
        <div 
          className="text-center mx-auto mb-16"
          style={{
            width: "532px",
            height: "113px",
            gap: "16px",
          }}
        >
          <h2
            className="text-[#1A1A1A]"
            style={{
              fontFamily: "Monument Extended",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              width: "532px",
              height: "43px",
              marginBottom: "16px",
            }}
          >
            Who is it for
          </h2>
          <p
            className="text-[#6E6E6EB2]"
            style={{
              fontFamily: "Manrope",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              width: "532px",
              height: "54px",
            }}
          >
            Whether you design, build, or create, we help you measure smarter.
          </p>
        </div>

        {/* Images Container */}
        <div 
          className="flex relative"
          style={{
            width: "1282px",
            height: "619px",
          }}
        >
          {targetAudience.map((person, index) => (
            <div
              key={person.id}
              className="relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 ease-out"
              style={{
                width: "197px",
                height: "619px",
                backgroundColor: person.bgColor,
                marginRight: index < targetAudience.length - 1 ? "8px" : "0",
                zIndex: 1,
                boxShadow: "none",
              }}
              onMouseEnter={(e) => {
                // Reset all other images first
                const container = e.currentTarget.parentElement;
                if (container) {
                  Array.from(container.children).forEach((child, childIndex) => {
                    const element = child as HTMLElement;
                    if (childIndex !== index) {
                      element.style.transform = "scaleX(1)";
                      element.style.zIndex = "1";
                    }
                  });
                }
                
                // Expand current image
                e.currentTarget.style.transform = "scaleX(2.03)"; // 400/197 ≈ 2.03
                e.currentTarget.style.transformOrigin = "left center";
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scaleX(1)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              {/* Image */}
              <img 
                src={person.image} 
                alt={person.title}
                className="w-full h-full object-cover"
                style={{
                  objectFit: "cover",
                }}
              />

              {/* Title Overlay */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex items-center justify-center"
                style={{
                  height: "102px",
                  // background: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <p
                  className="text-center whitespace-pre-line"
                  style={{
                    fontFamily: "Manrope",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "24px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "center",
                    color: "#FFFFFFB2",
                    width: "100px",
                    height: "66px",
                    position: "relative",
                    top: "18px",
                    margin: "0 auto",
                  }}
                >
                  {person.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Audience);