import { Button } from "@/components/ui/button";
import { ChevronDown, Smartphone, Zap, Users } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-primary/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Creator Badge */}
            <div className="inline-flex items-center gap-3 bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-gradient-primary rounded-full animate-glow-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Created by <span className="text-primary font-semibold">Ragavan, Age 17</span>
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Education
              </span>
              <br />
              <span className="text-foreground">Revolution</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Transforming Tamil Nadu schools with cutting-edge digital devices. 
              No more heavy bags, manual attendance, or outdated learning methods.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 mx-auto">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Digital</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-secondary rounded-lg mb-3 mx-auto">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold text-accent">0kg</div>
                <div className="text-sm text-muted-foreground">Bag Weight</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Per Class</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={() => scrollToSection('overview')}
                className="group"
              >
                Explore the Vision
                <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection('creator')}
              >
                Meet Ragavan
              </Button>
            </div>
          </div>

          {/* Right Content - Device Showcase */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              {/* Glow effect behind device */}
              <div className="absolute inset-0 bg-gradient-primary/30 blur-3xl rounded-full transform scale-150"></div>
              
              {/* Device image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={heroDevice} 
                  alt="Smart Education Device" 
                  className="w-full h-auto rounded-2xl shadow-elegant"
                />
                
                {/* Floating UI elements */}
                <div className="absolute -top-4 -left-4 bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-lg p-3 animate-float">
                  <div className="text-xs text-muted-foreground mb-1">Attendance</div>
                  <div className="text-sm font-semibold text-primary">✓ Biometric Login</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-muted-foreground mb-1">Content</div>
                  <div className="text-sm font-semibold text-accent">Tamil Nadu Board</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;