import {
  Heart,
  Recycle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { footerSections, socialLinks } from "../reusables/data";

const Footer = () => {
  return (
      <footer className="relative bg-gradient-to-br from-primary via-secondary to-primary text-white overflow-hidden">
        {/* Wave Animation at Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg
              className="relative block w-full h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
          >
            <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className="fill-background"
            />
          </svg>
        </div>

        <div className="relative z-10 pt-20 pb-8">
          <div className="container mx-auto px-4">
            {/* Newsletter Section */}
            <div className="text-center mb-16">
              <div className="slide-in-up">
                <h3 className="text-3xl font-bold mb-4">
                  🌱 Join Our Growing Community
                </h3>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Get updates on workshops, cleanups, and art that’s transforming
                  plastic waste into something powerful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                      placeholder="Enter your email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                  />
                  <Button className="bg-white text-primary hover:bg-white/90 font-semibold btn-hover-lift">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Footer Content */}
            <div className="grid lg:grid-cols-6 gap-8 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2 slide-in-left">
                <div className="flex items-center space-x-2 mb-4">
                  <Recycle className="w-8 h-8 text-accent-yellow" />
                  <h3 className="text-2xl font-bold">ReImagine Plastics</h3>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Turning plastic waste into art while tackling climate change.
                  Together, we’re sparking creativity and action.
                </p>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, index) => (
                  <div key={index} className={`slide-in-up stagger-${index + 1}`}>
                    <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                                href="#"
                                className="text-white/70 hover:text-white transition-colors text-sm hover:underline"
                            >
                              {link}
                            </a>
                          </li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>

            {/* Social Media & Bottom Bar */}
            <div className="border-t border-white/20 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="slide-in-left">
                  <p className="text-white/70 text-sm">
                    © 2024 ReImagine Plastics. Made with{" "}
                    <Heart className="w-4 h-4 inline text-accent-coral" /> for the
                    planet.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="slide-in-right">
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon; // ✅ instantiate component
                      return (
                          <a
                              key={index}
                              href={social.href}
                              aria-label={social.label}
                              className={`p-2 bg-white/10 rounded-full ${social.color} transition-all duration-300 hover:bg-white/20 hover:scale-110`}
                          >
                            <Icon className="w-5 h-5" />
                          </a>
                      );
                    })}
                  </div>
                </div>

                {/* Legal Links */}
                <div className="slide-in-right stagger-2">
                  <div className="flex space-x-4 text-sm text-white/70">
                    <a href="#" className="hover:text-white transition-colors">
                      Privacy
                    </a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition-colors">
                      Terms
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Statement */}
            <div className="text-center mt-8 pt-8 border-t border-white/10">
              <div className="slide-in-up stagger-3">
                <p className="text-white/60 text-xs">
                  🌍 Together we’ve diverted 50,000+ pieces of plastic from
                  landfills & oceans • Empowered 10,000+ youth • Created 500+
                  works of art •
                  <span className="text-accent-yellow font-semibold">
                  {" "}
                    And we’re just getting started!
                </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
