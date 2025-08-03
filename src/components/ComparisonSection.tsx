import { Card } from "@/components/ui/card";
import { Check, X, TrendingUp } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    {
      category: "Bag Load",
      traditional: { value: "Heavy with textbooks", icon: X, negative: true },
      smart: { value: "One lightweight device", icon: Check, positive: true }
    },
    {
      category: "Attendance",
      traditional: { value: "Manual, prone to errors", icon: X, negative: true },
      smart: { value: "Fingerprint-based, 100% accurate", icon: Check, positive: true }
    },
    {
      category: "Homework",
      traditional: { value: "On paper, easy to lose", icon: X, negative: true },
      smart: { value: "Auto-submitted and tracked digitally", icon: Check, positive: true }
    },
    {
      category: "Learning Tools",
      traditional: { value: "Limited to printed material", icon: X, negative: true },
      smart: { value: "Animations, videos, and quizzes", icon: Check, positive: true }
    },
    {
      category: "Health Impact",
      traditional: { value: "Posture/back pain issues", icon: X, negative: true },
      smart: { value: "Minimal physical strain", icon: Check, positive: true }
    },
    {
      category: "Accessibility",
      traditional: { value: "Dependent on school timings", icon: X, negative: true },
      smart: { value: "Centralized and on-demand", icon: Check, positive: true }
    }
  ];

  const benefits = [
    { metric: "85%", description: "Reduction in bag weight", color: "text-primary" },
    { metric: "100%", description: "Attendance accuracy", color: "text-accent" },
    { metric: "90%", description: "Homework submission rate", color: "text-primary" },
    { metric: "75%", description: "Improvement in engagement", color: "text-accent" }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Traditional vs </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Smart System</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our smart education system revolutionizes every aspect of learning
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 animate-scale-in">
          <Card className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border overflow-hidden">
            <div className="p-8">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-6 mb-8 pb-6 border-b border-border">
                <div className="text-lg font-semibold text-muted-foreground">Category</div>
                <div className="text-lg font-semibold text-destructive flex items-center gap-2">
                  <X className="w-5 h-5" />
                  Traditional System
                </div>
                <div className="text-lg font-semibold text-primary flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  Smart Device System
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-6">
                {comparisons.map((comparison, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-3 gap-6 items-center p-4 rounded-lg hover:bg-background/50 transition-colors animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-medium text-foreground">
                      {comparison.category}
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <comparison.traditional.icon 
                        className={`w-5 h-5 ${comparison.traditional.negative ? 'text-destructive' : 'text-primary'}`} 
                      />
                      <span>{comparison.traditional.value}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <comparison.smart.icon 
                        className={`w-5 h-5 ${comparison.smart.positive ? 'text-primary' : 'text-destructive'}`} 
                      />
                      <span>{comparison.smart.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Metrics */}
        <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Expected Impact
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-[var(--glass-bg)] backdrop-blur-glass border-[var(--glass-border)] border p-6 text-center hover:shadow-elegant transition-all duration-500 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl font-bold mb-2 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.metric}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Health Impact Highlight */}
        <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <Card className="bg-gradient-secondary p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-accent-foreground/10 rounded-full px-6 py-3 mb-6">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
                <span className="text-sm font-medium text-accent-foreground">Health Revolution</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-accent-foreground">
                Zero Bag Weight = Healthier Students
              </h3>
              <p className="text-lg text-accent-foreground/80 mb-8 leading-relaxed">
                Eliminate the 5-8kg daily bag burden that causes back pain, posture problems, 
                and health issues in young students. Our smart system promotes better physical 
                development and reduces long-term health risks.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-accent-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-foreground mb-2">0kg</div>
                  <div className="text-sm text-accent-foreground/70">Daily bag weight</div>
                </div>
                <div className="bg-accent-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-foreground mb-2">100%</div>
                  <div className="text-sm text-accent-foreground/70">Digital content</div>
                </div>
                <div className="bg-accent-foreground/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-accent-foreground mb-2">∞</div>
                  <div className="text-sm text-accent-foreground/70">Learning possibilities</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;