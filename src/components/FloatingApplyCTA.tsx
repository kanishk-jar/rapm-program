import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { APPLY_URL } from "@/lib/constants";

const FloatingApplyCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ctas = Array.from(document.querySelectorAll('[data-apply-cta="true"]')) as HTMLElement[];
    if (ctas.length === 0) {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // If any CTA is visible, hide floating. Otherwise show.
        const anyVisible = entries.some((e) => e.isIntersecting && e.intersectionRatio > 0);
        setShow(!anyVisible);
      },
      { threshold: [0, 0.01, 0.1] }
    );
    ctas.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-full px-3 py-2 flex items-center gap-3 border" style={{background:'#FFF7DD', borderColor:'#FDECB2', color:'#43197B'}}>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full" style={{background:'#FDECB2'}}>
          <span className="w-1.5 h-1.5 rounded-full" style={{background:'#16A34A'}} />
          <span className="text-xs" style={{ color: '#43197B' }}>Applications Open</span>
        </div>
        <Button 
          variant="cta" 
          size="lg" 
          className="px-6" style={{background:'#43197B', color:'#FFF7DD'}}
          asChild
        >
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" data-apply-cta="true">Apply Now</a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingApplyCTA;


