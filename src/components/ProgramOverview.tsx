import { Badge } from "@/components/ui/badge";

const ProgramOverview = () => {
  return (
    <section className="py-12 px-6 relative overflow-hidden" style={{background:'#FFF7DD', color:'#160829'}}>
      {/* Background Effects */}
      <div className="absolute inset-0" style={{background:'#FFF7DD'}} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Narrative Design Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6" style={{background:'#FDECB2', borderColor:'#FDECB2', color:'#160829'}}>🎨 Learn Beyond Product Management</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            Products That Move
            <span className="block">
              Culture & Behavior
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Learn how product decisions turn into narratives that shape India's financial behavior. 
            <span className="text-foreground font-medium">Jar isn't just an app — it's a savings movement.</span>
          </p>
        </div>

        {/* Story-driven features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          <div className="text-center p-8 rounded-2xl border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">Autopay Psychology</h3>
            <p className="text-muted-foreground text-sm">
              How micro-savings became a habit for millions
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-4">🇮🇳</div>
            <h3 className="text-xl font-bold mb-3">Building for Bharat</h3>
            <p className="text-muted-foreground text-sm">
              Products designed for India's unique financial culture
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Community Growth</h3>
            <p className="text-muted-foreground text-sm">
              Building India's largest savings community
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramOverview;