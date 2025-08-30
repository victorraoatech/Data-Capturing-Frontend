import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, RecycleIcon, Palette } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  // Scroll function
  const handleScrollToArt = () => {
    const artSection = document.getElementById("art-section");
    if (artSection) {
      artSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/70 to-primary/80"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="floating absolute top-20 left-10 text-accent-yellow opacity-60">
            <RecycleIcon size={40} className="stagger-1" />
          </div>
          <div className="floating absolute top-40 right-20 text-accent-coral opacity-60">
            <Palette size={35} className="stagger-2" />
          </div>
          <div className="floating absolute bottom-40 left-20 text-accent-purple opacity-60">
            <Sparkles size={30} className="stagger-3" />
          </div>
          <div className="floating absolute bottom-20 right-10 text-accent-yellow opacity-60">
            <RecycleIcon size={45} className="stagger-4" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="slide-in-up stagger-1">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
              🌍 Turn Plastic Into
              <span className="block gradient-text">Art, Not Trash!</span>
            </h1>
          </div>

          <div className="slide-in-up stagger-2">
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering youth. Cleaning communities. Sparking climate action.
            </p>
          </div>

          {/*<div className="slide-in-up stagger-3 flex flex-col sm:flex-row gap-6 justify-center items-center">*/}
          {/*  <Button*/}
          {/*      size="lg"*/}
          {/*      className="bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-8 py-4 text-lg btn-hover-lift btn-pulse shadow-glow"*/}
          {/*  >*/}
          {/*    Join the Movement*/}
          {/*  </Button>*/}

          {/*  /!* Fixed "See the Art" button *!/*/}
          {/*  <Button*/}
          {/*      variant="outline"*/}
          {/*      size="lg"*/}
          {/*      onClick={handleScrollToArt}*/}
          {/*      className="bg-gradient-primary hover:bg-gradient-secondary text-white font-semibold px-8 py-4 text-lg btn-hover-lift btn-pulse shadow-glow"*/}
          {/*  >*/}
          {/*    See the Art*/}
          {/*  </Button>*/}
          {/*</div>*/}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle">
          <ChevronDown className="text-white w-8 h-8" />
        </div>
      </section>
  );
};

export default Hero;
