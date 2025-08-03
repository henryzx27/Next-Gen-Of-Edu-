import { Card } from "@/components/ui/card";
import { Smartphone, Wifi, Lock, BarChart3, BookOpen, Heart } from "lucide-react";

const OverviewSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Smart Education Device",
      description: "Pre-loaded with Tamil Nadu board syllabus, digital textbooks, and interactive content",
      color: "bg-gradient-primary"
    },
    {
      icon: Lock,
      title: "Smart Lockers",
      description: "Secure charging stations with biometric access, 30+ slots per classroom",
      color: "bg-gradient-secondary"
    },
    {
      icon: Wifi,
      title: "School Wi-Fi Network",
      description: "Private network for content updates, security controls, and real-time sync",
      color: "bg-gradient-primary"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Automatic attendance tracking, progress monitoring, and EMIS integration",
      color: "bg-gradient-secondary"
    },
    {
      icon: BookOpen,
      title: "100% Digital Learning",
      description: "Eliminate heavy textbooks, enable paperless education, reduce physical strain",
      color: "bg-gradient-primary"
    },
    {
      icon: Heart,
      title: "Student Health Focus",
      description: "Zero bag weight, improved posture, reduced back pain and health issues",
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Revolutionary Concept
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A next-generation digital education ecosystem that replaces traditional learning methods 
            with smart technology, designed specifically for Tamil Nadu government schools.
          </p>
        </div>

        {/* Core Concept Card */}
        <div className="mb-16 animate-scale-in">
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  One Device. Endless Possibilities.
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Every student receives a personalized smart device containing their complete 
                  learning ecosystem. The devices stay securely at school, eliminating the burden 
                  of heavy bags while ensuring 24/7 access to educational content.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Biometric Access
                  </span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                    EMIS Integrated
                  </span>
                  <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Real-time Sync
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-primary/20 rounded-2xl p-8 text-center">
                  <Smartphone className="w-24 h-24 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold text-foreground mb-2">Tamil Nadu EduTab</div>
                  <div className="text-muted-foreground">The Future of Learning</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-6 hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Transform Education?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the digital revolution in Tamil Nadu schools and create a healthier, 
              more efficient learning environment for every student.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-sm text-primary font-medium">Zero Physical Books</span>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
                <span className="text-sm text-accent font-medium">100% Digital Content</span>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="text-sm text-primary font-medium">Automated Attendance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;