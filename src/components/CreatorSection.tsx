import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Heart, Lightbulb, Target, Github, Mail } from "lucide-react";
import ragavanPortrait from "@/assets/ragavan-portrait.jpg";

const CreatorSection = () => {
  const achievements = [
    { icon: Code, title: "Programming Enthusiast", description: "Self-taught developer passionate about creating solutions" },
    { icon: Lightbulb, title: "Innovation Mindset", description: "Always thinking of ways to improve systems and processes" },
    { icon: Heart, title: "Education Advocate", description: "Believes technology can transform learning for everyone" },
    { icon: Target, title: "Impact Focused", description: "Committed to creating meaningful change in society" }
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "Python", "Flutter", "Firebase", "MongoDB", "AWS"
  ];

  return (
    <section id="creator" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet the </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Visionary</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The story behind the innovation
          </p>
        </div>

        {/* Main Creator Card */}
        <div className="mb-16 animate-scale-in">
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Creator Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={ragavanPortrait} 
                  alt="Ragavan - Creator" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Age</div>
                    <div className="text-2xl font-bold text-primary">17</div>
                  </div>
                </div>
              </div>

              {/* Creator Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-4 py-2 mb-6 self-start">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Student Innovator</span>
                </div>

                <h3 className="text-4xl font-bold mb-4 text-foreground">
                  Ragavan
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A passionate 17-year-old student with a vision to revolutionize education in Tamil Nadu. 
                  Combining technical expertise with deep understanding of student challenges, Ragavan 
                  designed this system to create a healthier, more efficient learning environment.
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" className="group">
                    <Github className="w-4 h-4" />
                    View Projects
                  </Button>
                  <Button variant="glass">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Drives the Innovation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-6 text-center hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-primary rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <Card className="bg-gradient-primary p-8 lg:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                "Technology should serve humanity, especially education."
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Growing up seeing classmates struggle with heavy bags and outdated learning methods, 
                I realized that technology could solve these fundamental problems. This smart education 
                system isn't just about gadgets—it's about creating a healthier, more engaging future 
                for every student in Tamil Nadu.
              </p>
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="w-5 h-5 text-white" />
                <span className="text-white font-medium">Built with passion for education</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join the Education Revolution
            </h3>
            <p className="text-muted-foreground mb-6">
              Help bring this vision to life and transform learning for millions of students across Tamil Nadu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero">
                Support the Vision
              </Button>
              <Button variant="glass">
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;