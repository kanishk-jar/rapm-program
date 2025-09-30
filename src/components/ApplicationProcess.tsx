import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const ApplicationProcess = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observeElement = (element: HTMLElement, animation: string) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.style.animation = animation;
            observer.unobserve(element);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(element);
      observers.push(observer);
    };

    if (sectionRef.current) {
      observeElement(sectionRef.current, 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards');
    }
    if (stepsRef.current) {
      observeElement(stepsRef.current, 'fade-in-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards');
    }
    if (ctaRef.current) {
      observeElement(ctaRef.current, 'fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards');
    }

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const steps = [
    {
      step: 1,
      title: "Prototype Exercise",
      description: "Share your background, resume, and a prototype exercise",
      details: "Build a simple prototype: 'Design an AI-powered savings feature for young Indians'",
      duration: "1 hr",
      icon: "📝"
    },
    {
      step: 2,
      title: "Case Interview",
      description: "Solve a product problem with Jar PMs",
      details: "Collaborative problem-solving session focused on user empathy and product thinking",
      duration: "45 mins",
      icon: "🧩"
    },
    {
      step: 3,
      title: "Final Round",
      description: "Conversational interviews with Product leaders",
      details: "Discussion about your motivation, career goals, and cultural fit with Jar",
      duration: "30 mins",
      icon: "💬"
    },
    {
      step: 4,
      title: "Offer & Onboarding",
      description: "Join the founding APM cohort!",
      details: "Get ready to start your journey building the future of savings for India",
      duration: "Welcome!",
      icon: "🎉"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={sectionRef} className="text-center mb-16 animate-fade-in-up">
          <Badge variant="secondary" className="mb-4 hover-scale">📝 Application Process</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hover:text-primary transition-colors duration-500">
            Ready to Apply?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our application process is designed to understand your product thinking, passion for fintech, and potential to grow as a product leader.
          </p>
        </div>

        {/* Application Steps */}
        <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-fade-in-scale">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-500 border-primary/10 hover:border-primary/30 h-full hover-lift hover-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-3 group-hover:animate-glow-pulse transition-all duration-300">
                    <span className="text-primary-foreground font-bold group-hover:scale-110 transition-transform duration-300">{step.step}</span>
                  </div>
                  <div className="text-2xl mb-2 group-hover:animate-float">{step.icon}</div>
                </div>
                
                <h3 className="font-semibold text-center mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm text-muted-foreground text-center mb-4">{step.description}</p>
                
                <div className="bg-secondary/50 rounded-lg p-3 mb-3 flex-1 min-h-[80px] flex items-center group-hover:bg-secondary/70 transition-colors duration-300">
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.details}</p>
                </div>
                
                <div className="text-center">
                  <Badge variant="outline" className="text-xs hover-scale">{step.duration}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips for Success - Compact */}
        <div className="mb-16 text-center animate-fade-in">
          <div className="flex flex-wrap justify-center gap-4 text-sm italic text-muted-foreground stagger-children">
            <span className="hover:text-primary transition-colors duration-300">💡 Show product thinking over perfect solutions</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors duration-300">🎯 Demonstrate fintech passion with examples</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors duration-300">🚀 Be authentic and curious to learn</span>
          </div>
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="bg-gradient-to-r from-card to-secondary/50 rounded-2xl p-8 md:p-12 border border-primary/10 hover:border-primary/20 transition-all duration-500 hover-lift animate-fade-in-up">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors duration-500">Start your Journey</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join us in shaping the future of savings in India at the country’s fastest-growing fintech.
            </p>
            
            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full sm:w-auto hover-lift hover-glow magnetic group relative overflow-hidden"
                data-apply-cta="true"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScPTBWIAsiNP8B_Q0KIeSMrPuwouPex0KKAWakJiUJv9E76mw/viewform?usp=sharing&ouid=107277259200087864957', '_blank')}
              >
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Apply Now →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6 animate-fade-in">
              Deadline to submit: 31st October • Applications reviewed on a rolling basis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;