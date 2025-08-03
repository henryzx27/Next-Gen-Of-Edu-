import { Card } from "@/components/ui/card";
import { Fingerprint, Shield, Cloud, BookOpen, Users, Zap } from "lucide-react";
import smartLockers from "@/assets/smart-lockers.jpg";

const FeaturesSection = () => {
  const keyFeatures = [
    {
      icon: Fingerprint,
      title: "Biometric Authentication",
      description: "Each device unlocks only with the student's fingerprint, ensuring security and automatic attendance tracking.",
      benefits: ["Eliminates proxy attendance", "Instant login access", "Enhanced security"]
    },
    {
      icon: Shield,
      title: "School-Controlled Environment",
      description: "Devices remain in secure lockers at school with restricted internet access to educational content only.",
      benefits: ["No home misuse risk", "Focused learning", "Centralized management"]
    },
    {
      icon: Cloud,
      title: "Real-Time Synchronization",
      description: "All content, progress, and data automatically syncs with school servers and EMIS database.",
      benefits: ["Always up-to-date content", "Progress tracking", "Data backup"]
    },
    {
      icon: BookOpen,
      title: "Complete Digital Curriculum",
      description: "Pre-loaded with Tamil Nadu board syllabus, textbooks, videos, quizzes, and interactive content.",
      benefits: ["No physical books needed", "Rich multimedia content", "Interactive learning"]
    }
  ];

  const systemWorkflow = [
    { step: "01", action: "Student arrives at classroom", icon: Users },
    { step: "02", action: "Unlocks device with fingerprint", icon: Fingerprint },
    { step: "03", action: "Attendance automatically logged", icon: Shield },
    { step: "04", action: "Access personalized content", icon: BookOpen },
    { step: "05", action: "Submit homework digitally", icon: Cloud },
    { step: "06", action: "Device returns to charging locker", icon: Zap }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Key </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced technology meets practical education needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-8 hover:shadow-elegant transition-all duration-500 group animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-primary rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Smart Locker Showcase */}
        <div className="mb-20 animate-scale-in">
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Smart Locker System
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Each classroom features a state-of-the-art locker system with 30+ individual 
                  compartments. Every slot includes fast charging ports and biometric locks, 
                  ensuring devices are always ready and secure.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">30+</div>
                    <div className="text-sm text-muted-foreground">Slots per classroom</div>
                  </div>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Charging efficiency</div>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={smartLockers} 
                  alt="Smart Locker System" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent"></div>
              </div>
            </div>
          </Card>
        </div>

        {/* System Workflow */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Daily Workflow
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemWorkflow.map((step, index) => (
              <Card 
                key={index}
                className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-6 text-center hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-sm font-bold text-accent mb-2">STEP {step.step}</div>
                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {step.action}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;