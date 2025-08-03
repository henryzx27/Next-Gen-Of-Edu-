import { Card } from "@/components/ui/card";
import { Smartphone, Wifi, Database, Shield, Fingerprint, Cloud } from "lucide-react";

const TechSection = () => {
  const techSpecs = [
    {
      icon: Smartphone,
      title: "Custom Android OS",
      description: "Locked-down operating system designed specifically for educational use",
      specs: ["Educational app ecosystem", "Restricted internet access", "Centralized updates", "Performance optimized"]
    },
    {
      icon: Fingerprint,
      title: "Biometric Module",
      description: "Integrated fingerprint scanner for secure authentication and attendance",
      specs: ["Instant recognition", "Attendance automation", "Security enforcement", "User verification"]
    },
    {
      icon: Database,
      title: "Local Storage",
      description: "Encrypted offline storage for educational content and student data",
      specs: ["128GB+ capacity", "AES encryption", "Offline accessibility", "Data protection"]
    },
    {
      icon: Wifi,
      title: "Wi-Fi Connectivity",
      description: "Seamless connection to school network for content sync and updates",
      specs: ["Auto-sync capability", "Content filtering", "Real-time updates", "Network security"]
    },
    {
      icon: Cloud,
      title: "EMIS Integration",
      description: "Direct integration with Educational Management Information System",
      specs: ["Student ID linking", "Progress tracking", "Administrative reports", "Data analytics"]
    },
    {
      icon: Shield,
      title: "Security Features",
      description: "Multi-layer security to protect devices and educational content",
      specs: ["Device encryption", "Access control", "Remote monitoring", "Anti-theft protection"]
    }
  ];

  const deviceSpecs = [
    { label: "Display", value: "10.1\" HD IPS Screen" },
    { label: "Processor", value: "Octa-core ARM Cortex" },
    { label: "RAM", value: "4GB LPDDR4" },
    { label: "Storage", value: "128GB eMMC" },
    { label: "Battery", value: "8000mAh Li-Po" },
    { label: "Connectivity", value: "Wi-Fi 6, Bluetooth 5.0" },
    { label: "Sensors", value: "Fingerprint, Accelerometer" },
    { label: "OS", value: "Custom Android 12+" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Technology </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge technology designed for education
          </p>
        </div>

        {/* Device Conceptual Design */}
        <div className="mb-16 animate-scale-in">
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Tamil Nadu EduTab
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  A purpose-built educational device combining the best of tablet technology 
                  with school-specific security and learning features.
                </p>
                
                {/* Device Specs */}
                <div className="grid grid-cols-2 gap-4">
                  {deviceSpecs.map((spec, index) => (
                    <div 
                      key={index}
                      className="bg-background/50 rounded-lg p-3 border border-border/50"
                    >
                      <div className="text-xs text-muted-foreground mb-1">{spec.label}</div>
                      <div className="text-sm font-medium text-foreground">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Device Mockup */}
              <div className="relative">
                <div className="bg-gradient-primary/20 rounded-2xl p-8 text-center">
                  {/* Device Frame */}
                  <div className="bg-gradient-subtle border-2 border-primary/30 rounded-xl p-6 mx-auto max-w-sm relative">
                    <div className="bg-background rounded-lg p-4 mb-4">
                      <div className="text-primary font-bold text-lg mb-2">📘 Tamil Nadu EduTab</div>
                      <div className="h-2 bg-primary/20 rounded mb-2"></div>
                      <div className="h-2 bg-primary/20 rounded w-3/4 mb-2"></div>
                      <div className="h-2 bg-primary/20 rounded w-1/2"></div>
                    </div>
                    
                    {/* Fingerprint Scanner */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Fingerprint className="w-4 h-4 text-white" />
                    </div>
                    
                    {/* Status Bar */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-center text-xs text-muted-foreground">
                      <span>🔋 85%</span>
                      <span>📶 Wi-Fi</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute -top-4 -left-4 bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-lg p-3 animate-float">
                  <div className="text-xs text-muted-foreground mb-1">Authentication</div>
                  <div className="text-sm font-semibold text-primary">👆 Fingerprint</div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-[var(--glass-bg)] backdrop-blur-glass border border-[var(--glass-border)] rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-muted-foreground mb-1">Connectivity</div>
                  <div className="text-sm font-semibold text-accent">📡 School Wi-Fi</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Technology Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techSpecs.map((tech, index) => (
            <Card 
              key={index}
              className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-6 hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary rounded-xl p-3 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {tech.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {tech.description}
              </p>
              <div className="space-y-2">
                {tech.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-xs text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* System Architecture Diagram */}
        <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              System Architecture
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Student Device */}
              <div className="text-center">
                <div className="bg-gradient-primary rounded-2xl p-6 mb-4 mx-auto w-fit">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">Student Device</h4>
                <p className="text-sm text-muted-foreground">Biometric access, offline content, real-time sync</p>
              </div>

              {/* Connection Lines */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-full h-0.5 bg-gradient-primary mb-2"></div>
                <Wifi className="w-6 h-6 text-primary" />
                <div className="w-full h-0.5 bg-gradient-primary mt-2"></div>
              </div>

              {/* School Server */}
              <div className="text-center">
                <div className="bg-gradient-secondary rounded-2xl p-6 mb-4 mx-auto w-fit">
                  <Database className="w-12 h-12 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">School Server</h4>
                <p className="text-sm text-muted-foreground">Content management, data analytics, EMIS integration</p>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-primary mb-1">Real-time</div>
                <div className="text-xs text-muted-foreground">Data synchronization</div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-accent mb-1">Secure</div>
                <div className="text-xs text-muted-foreground">Encrypted communication</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-primary mb-1">Scalable</div>
                <div className="text-xs text-muted-foreground">Supports 1000+ devices</div>
              </div>
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
                <div className="text-lg font-bold text-accent mb-1">Reliable</div>
                <div className="text-xs text-muted-foreground">99.9% uptime</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechSection;