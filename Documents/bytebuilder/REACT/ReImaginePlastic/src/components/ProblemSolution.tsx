import { AlertTriangle, Lightbulb, Trash2, Palette, Globe, Users } from "lucide-react";

const ProblemSolution = () => {
  return (
    <div className="py-20">
      {/* Problem Section */}
      <section className="relative bg-gradient-to-br from-destructive/20 via-accent-coral/20 to-destructive/10 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="slide-in-up">
              <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-destructive">
                The Plastic Crisis
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Every minute, a garbage truck worth of plastic enters our oceans. 
                Young people inherit a planet drowning in waste.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-lg text-center slide-in-left stagger-1">
              <Trash2 className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">8 Billion Tons</h3>
              <p className="text-muted-foreground">
                Of plastic waste polluting our planet, with only 9% ever recycled
              </p>
            </div>

            <div className="glass p-8 rounded-lg text-center slide-in-up stagger-2">
              <Globe className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">100+ Years</h3>
              <p className="text-muted-foreground">
                For plastic bottles to decompose, harming wildlife for generations
              </p>
            </div>

            <div className="glass p-8 rounded-lg text-center slide-in-right stagger-3">
              <Users className="w-12 h-12 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Limited Action</h3>
              <p className="text-muted-foreground">
                Youth feel powerless to create meaningful environmental change
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative bg-gradient-primary py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="slide-in-up">
              <Lightbulb className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Our Creative Solution
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                We transform the problem into possibility by empowering youth to turn 
                plastic waste into powerful art that sparks conversation and change.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover slide-in-left stagger-1">
              <Palette className="w-12 h-12 text-accent-yellow mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Art Creation</h3>
              <p className="text-white/80">
                Teaching youth to transform plastic waste into stunning sculptures, 
                functional items, and inspiring installations
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover slide-in-up stagger-2">
              <Users className="w-12 h-12 text-accent-coral mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Community Building</h3>
              <p className="text-white/80">
                Organizing cleanup events and workshops that bring communities 
                together around environmental action
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center card-hover slide-in-right stagger-3">
              <Globe className="w-12 h-12 text-accent-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Global Impact</h3>
              <p className="text-white/80">
                Creating a movement of young environmental leaders who inspire 
                change in their communities and beyond
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;