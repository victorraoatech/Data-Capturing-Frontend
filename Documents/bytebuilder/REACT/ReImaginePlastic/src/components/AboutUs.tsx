import React from "react";
import { transformationSteps } from "@/reusables/data";

const AboutUs = () => {
  return (
      <section
          id="about"
          className="py-20 bg-gradient-to-br from-muted/50 to-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="slide-in-left">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Transforming
                  <span className="gradient-text"> Communities</span>
                  <br />
                  Through Art
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ReImagine Plastics empowers young people to become environmental
                  changemakers by turning plastic waste into stunning works of
                  art. Our innovative approach combines creativity, education, and
                  community action to address the plastic pollution crisis while
                  fostering the next generation of environmental leaders.
                </p>
              </div>

              <div className="slide-in-left stagger-2">
                <div className="flex flex-wrap gap-9 mt-9">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10K+</div>
                    <div className="text-sm text-muted-foreground">
                      Youth Empowered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">50K+</div>
                    <div className="text-sm text-muted-foreground">
                      Plastics Recycled
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation Process */}
            <div className="space-y-6">
              {transformationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                    <div
                        key={index}
                        className={`glass p-6 rounded-lg card-hover slide-in-right ${step.delay}`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`${step.color} flex-shrink-0`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutUs;
