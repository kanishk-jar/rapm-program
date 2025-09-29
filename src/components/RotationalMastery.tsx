import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef } from "react";

const RotationalMastery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    if (cardsRef.current) {
      observeElement(cardsRef.current, 'fade-in-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards');
    }

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const rotations = [
    {
      title: "User Activation & Growth",
      subtitle: "Take charge of the entire acquisition funnel.",
      description: "Refine onboarding that already converts 70%+ of signups.",
      icon: "🚀",
      gradient: "from-primary to-accent",
      skills: ["Growth Strategy", "Behavioral Design", "A/B Testing", "Funnel Optimization"]
    },
    {
      title: "Retention & Engagement",
      subtitle: "Make saving & investing a habit for millions.",
      description: "Design engagement loops that keep users coming back daily.",
      icon: "💡",
      gradient: "from-accent to-primary",
      skills: ["Engagement Loops", "Gamification", "Data Science", "Cohort Analysis"]
    },
    {
      title: "Nek Jewellery Commerce",
      subtitle: "Build fintech-powered lifestyle commerce.",
      description: "Shape pricing, merchandising, and customer experience for millions.",
      icon: "💎",
      gradient: "from-primary-glow to-accent",
      skills: ["Product-Market Fit", "Unit Economics", "Brand Strategy", "Supply Chain"]
    },
    {
      title: "Platform Infrastructure",
      subtitle: "Scale Jar’s core fintech engine + partner integrations (PhonePe & more).",
      description: "Power millions of secure daily gold transactions.",
      icon: "⚙️",
      gradient: "from-accent to-primary-glow",
      skills: ["System Design", "Application Programming Interface Strategy", "Compliance", "Partner Management"]
    }
  ];

  return (
    <section data-section="rotational" className="py-12 px-6 relative overflow-hidden" style={{background:'#FFF7DD', color:'#160829'}}>
      {/* Background Effects */}
      <div className="absolute inset-0" style={{background:'#FFF7DD'}} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="text-center mb-12 animate-fade-in-up">
          <Badge variant="outline" className="mb-6 text-sm px-4 py-2" style={{background:'#FDECB2', color:'#160829', borderColor:'#FDECB2'}}>
            🎯 360° Product Leadership
          </Badge>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="hover:text-primary transition-colors duration-500">Rotational Experience That Builds</span>
            <span className="block">World-Class PMs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master product ecosystems across 4 high-impact domains. Don’t just learn product management, own products that 25M+ Indians use daily with real revenue responsibility.
          </p>
        </div>

        {/* Rotations Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12 animate-fade-in-scale">
          {rotations.map((rotation, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border transition-all duration-500 hover:scale-[1.02]"
              style={{background:'#FFF7DD', borderColor:'#FDECB2'}}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${rotation.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
              
              <CardContent className="p-8 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl group-hover:animate-float transition-transform duration-300 group-hover:scale-110">{rotation.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300 tracking-tight">{rotation.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{rotation.subtitle}</p>
                    </div>
                  </div>
                  <Badge 
                    variant="outline" 
                    className="opacity-90 transition-opacity duration-300 whitespace-nowrap px-3 py-1 text-xs rounded-full"
                    style={{background:'#FDECB2', color:'#160829', borderColor:'#FDECB2'}}
                  >
                    3 months
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                  {rotation.description}
                </p>

                {/* Removed metrics pills per requirements */}

                {/* Skills */}
                <div className="flex flex-wrap gap-3 stagger-children">
                  {rotation.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1.5 bg-muted/40 rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-scale whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RotationalMastery;