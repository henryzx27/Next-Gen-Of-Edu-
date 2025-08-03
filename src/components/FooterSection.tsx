import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Heart, Code, Zap } from "lucide-react";

const FooterSection = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "ragavan.dev@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
    { icon: MapPin, label: "Location", value: "Tamil Nadu, India" }
  ];

  const quickLinks = [
    "Overview", "Features", "Technology", "Comparison", "Creator"
  ];

  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-primary rounded-xl p-3">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Smart Education</h3>
                <p className="text-sm text-muted-foreground">Tamil Nadu Revolution</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Transforming education through innovative technology. Created by a passionate 
              17-year-old student who believes in the power of digital learning to create 
              a healthier, more efficient future for Tamil Nadu schools.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-destructive" />
              <span>Made with passion for education</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gradient-primary rounded-lg p-2">
                    <contact.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{contact.label}</div>
                    <div className="text-sm text-foreground">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16 animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <Card className="bg-gradient-primary p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">Ready to Transform Education?</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                Join the Digital Revolution
              </h3>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Help bring this vision to Tamil Nadu schools and create a healthier, 
                more efficient learning environment for every student.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="xl">
                  Support the Vision
                </Button>
                <Button variant="glass" size="xl" className="border-white/20 text-white hover:bg-white/10">
                  Get Updates
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Smart Education Tamil Nadu. Created by Ragavan.
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default FooterSection;