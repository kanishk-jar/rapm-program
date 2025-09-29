const WhyAPMsChooseJar = () => {
  return (
    <section className="py-8 px-6" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-6xl mx-auto rounded-2xl p-8 md:p-12 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why APMs Choose Jar</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our program combines the rigor of global tech giants with the speed and impact of India's fastest-growing fintech startups.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">100%</span>
                </div>
                <div>
                  <p className="font-semibold">Conversion Rate</p>
                  <p className="text-sm text-muted-foreground">APMs to full-time PM roles</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">2x</span>
                </div>
                <div>
                  <p className="font-semibold">Faster Growth</p>
                  <p className="text-sm text-muted-foreground">Compared to traditional PM paths</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-bold">A</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic mb-3 text-gray-500">"The Jar APM program gave me ownership of features touching 10M+ users within my first rotation. The mentorship from founders and senior PMs accelerated my growth by years."</p>
                  <p className="font-semibold text-sm">Arjun Sharma</p>
                  <p className="text-xs text-muted-foreground">Alumni, PM - Growth</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-primary-glow flex items-center justify-center text-primary-foreground font-bold">P</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic mb-3 text-gray-500">"From day one, I was building features for millions of users. The exposure to fintech, AI, and product strategy was unmatched. This program fast-tracked my career by 3+ years."</p>
                  <p className="font-semibold text-sm">Priya Patel</p>
                  <p className="text-xs text-muted-foreground">Alumni, Senior PM - AI/ML</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 border border-primary/20 lg:col-span-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-primary-glow to-accent flex items-center justify-center text-primary-foreground font-bold">R</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic mb-3 text-gray-500">"The rotational structure gave me deep exposure to everything - from compliance and growth to AI and user research. I learned more in 12 months than most PMs learn in 3 years. The founders' direct mentorship was incredible."</p>
                  <p className="font-semibold text-sm">Rahul Gupta</p>
                  <p className="text-xs text-muted-foreground">Alumni, VP Product - Fintech Startup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAPMsChooseJar;


