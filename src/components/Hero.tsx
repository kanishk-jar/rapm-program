import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useRef, useState } from "react";
import { APPLY_URL } from "@/lib/constants";

const Hero = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Parallax scroll effect
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    // Animate elements on scroll
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

    window.addEventListener('scroll', handleScroll);

    if (logoRef.current) {
      observeElement(logoRef.current, 'slide-in-left 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards');
    }
    if (contentRef.current) {
      observeElement(contentRef.current, 'fade-in-up 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards');
    }
    if (metricsRef.current) {
      observeElement(metricsRef.current, 'fade-in-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FFF7DD] text-[#160829]" style={{ paddingTop: 'calc(env(safe-area-inset-top, 0px) + 16px)' }}>
      {/* Logo */}
      <div ref={logoRef} className="absolute top-4 left-4 md:top-8 md:left-8 z-20 animate-slide-in-left">
        <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group cursor-pointer">
          {!logoError ? (
            <img src="/jar-logo.png?v=1" alt="Jar" className="h-10 md:h-12 w-auto mix-blend-multiply" onError={() => setLogoError(true)} />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Jar</span>
            </div>
          )}
        </a>
      </div>
      
      {/* Background removed per guidelines */}
      <div className="absolute inset-0 z-0 bg-[#FFF7DD]" />
      
      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-[#FDECB2] border border-[#FDECB2] rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#16A34A' }} />
          <span className="text-sm font-medium" style={{color:'#43197B'}}>Applications Open</span>
        </div>
        
        <div className="mb-2">
          <span className="block text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold whitespace-normal md:whitespace-nowrap">Build Greate Products. Lead the Impact.</span>
        </div>
        <div className="mb-8">
          <span className="block text-5xl md:text-7xl font-extrabold" style={{fontFamily: 'Frank Ruhl Libre, serif', fontWeight: 700}}>Jar Associate Product Management Rotational Program</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{background:'#160829'}} />
            <span className="text-base sm:text-lg font-medium text-center">Contribute to ₹200+ crore revenue impact</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{background:'#160829'}} />
            <span className="text-base sm:text-lg font-medium text-center">Learn directly from top fintech leaders</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="xl" 
            className="w-full sm:w-auto group relative overflow-hidden bg-[#43197B] text-[#FFF7DD] hover:opacity-90"
            asChild
          >
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-apply-cta="true"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">Apply Now →</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-white/10" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="w-full sm:w-auto group border-[#43197B] text-[#43197B] hover:bg-[#FDECB2]"
            onClick={() => {
              const rotationalSection = document.querySelector('[data-section="rotational"]');
              rotationalSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="group-hover:mr-2 transition-all duration-300">Learn More</span>
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">↓</span>
          </Button>
        </div>
        
        {/* Impact Metrics - What Smart PMs Care About */}
        <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl p-6 border text-center" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-2 group-hover:animate-float">🤖</div>
            <div className="text-2xl font-bold mb-1">AI-First</div>
            <div className="text-xs">Work on next-gen, innovation-driven fintech products</div>
          </div>
          <div className="rounded-2xl p-6 border text-center" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-2">👥</div>
            <div className="text-2xl font-bold mb-1">25M+ Users</div>
            <div className="text-xs">Impact lives of Indians across the country</div>
          </div>
          
          <div className="rounded-2xl p-6 border text-center" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-2 group-hover:animate-float">👥</div>
            <div className="text-2xl font-bold mb-1">12-Month Program</div>
            <div className="text-xs">Build breadth & depth in product management</div>
          </div>
          
          <div className="rounded-2xl p-6 border text-center" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-2 group-hover:animate-float">⭐</div>
            <div className="text-2xl font-bold mb-1">Batch of 4</div>
            <div className="text-xs">Deadline to submit: 31st October</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;