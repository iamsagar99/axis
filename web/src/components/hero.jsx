import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Hero = ({ companyName }) => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Innovative Technology Solutions for the Digital Era
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              {companyName} helps businesses transform and thrive through
              cutting-edge technology solutions in AI, cloud, data engineering,
              digital marketing, and web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/services">
                <Button size="lg" className="gap-2">
                  Explore Our Services <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/success-stories">
                <Button size="lg" variant="outline">
                  View Success Stories
                </Button>
              </Link>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold">18+</p>
                <p className="text-sm text-muted-foreground">
                  Expert Team Members
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-muted-foreground">
                  Successful Projects
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">95%</p>
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

         <div className="flex-1 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
  <div className="relative">
    {/* Glow Background */}
    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary/50 rounded-lg blur-lg opacity-75 z-0"></div>

    {/* Image Container */}
    <div className="relative bg-background rounded-lg shadow-xl overflow-hidden z-10">
      <img
        src="/src/assets/dashboard.webp"
        alt="Technology Dashboard"
        className="w-full h-auto object-cover"
      />

      {/* Typing Animation Text */}
      <div className="absolute left-1/2 -translate-x-1/2"
           style={{ top: '75%' }}>
        <p className="text-white font-[cursive] tracking-wide typing-loop text-stroke-xl">
  Collaborate and Win
</p>


      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
