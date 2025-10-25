import { memo } from 'react';
import Image from 'next/image';

const Features = () => {
  const features = [
    {
      title: "Multi-object measurement",
      description: "Measure people or objects from a single image upload.",
      icon: "/Ruler Streamline Tabler Line.png"
    },
    {
      title: "Create questionnaire for clients",
      description: "Collect data from clients",
      icon: "/Vector.png"
    },
    {
      title: "Privacy-first system",
      description: "Your data stays yours",
      icon: "/Vector (1).png"
    },
    {
      title: "Cross-platform support",
      description: "Simple, fast, and intuitive. No setup needed on any device.",
      icon: "/Electric Bolt Streamline Rounded Line - Material Pro Free.png"
    }
  ];

  return (
    <section className="py-20 bg-[#F4EFFA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our core tools built with intelligent features that make precision effortless.
          </p>
        </div>

        {/* Features Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#5D2A8B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Features);