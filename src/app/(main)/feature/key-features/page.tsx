


import Image from "next/image";

const KeyFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Image Upload Recognition",
      description:
        "Upload a single photo — our AI automatically detects shapes, edges, and proportions to deliver accurate measurements in seconds.",
      iconSrc: "/assets/Frame 248.png",
    },
    {
      id: 2,
      title: "Smart Dimension Mapping",
      description:
        "Break down dimensions precisely across multiple points. From body measurements to room layouts, every angle counts.",
      iconSrc: "/assets/Frame 248 (1).png",
    },
    {
      id: 3,
      title: "Auto Data Storage",
      description:
        "Keep track of your measurements effortlessly. Save, export, or revisit past captures with a single click.",
      iconSrc: "/assets/Frame 248 (2).png",
    },
    {
      id: 4,
      title: "AI Precision Engine",
      description:
        "Powered by advanced machine learning algorithms. Built to refine scan — improving accuracy and adaptability over time.",
      iconSrc: "/assets/Frame 248 (3).png",
    },
    {
      id: 5,
      title: "Multi-Use Capability",
      description:
        "From fashion to fitness, and from furniture to engineering — one tool fits all industries that rely on accuracy.",
      iconSrc: "/assets/Frame 248 (4).png",
    },
    {
      id: 6,
      title: "Privacy-First Design",
      description:
        "Your data stays yours. Images are processed securely, and we never store or share them without your permission.",
      iconSrc: "/assets/Frame 248 (5).png",
    },
  ];

  return (
    <div className="relative py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-monument font-normal text-[36px] leading-[100%] text-gray-900 mb-5">
            Key features
          </h2>
          <p className="font-manrope font-normal text-[20px] leading-[100%] text-gray-500 max-w-2xl mx-auto">
            Smart tools that handle the hard work, so you can focus on what matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image src={feature.iconSrc} alt="" width={48} height={48} />
              </div>

              {/* Title */}
              <h3 className="font-manrope font-semibold text-[22px] text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-manrope font-light text-[18px] leading-[150%] text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
