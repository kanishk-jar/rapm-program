const WhyAPMsChooseJar = () => {
  return (
    <section className="pt-4 pb-8 px-6" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-6xl mx-auto rounded-2xl p-6 md:p-8 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
        {/* Compact banner header */}
        <div className="rounded-xl p-5 md:p-6 mb-4 md:mb-6 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
          <h3 className="text-2xl font-bold mb-3">Why APMs Choose Jar</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our program combines the rigor of global tech giants with the speed and impact of India's fastest-growing fintech startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">100%</span>
              </div>
              <div>
                <p className="font-semibold leading-snug">Conversion Rate</p>
                <p className="text-xs text-muted-foreground">APMs to full-time PM roles</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">2x</span>
              </div>
              <div>
                <p className="font-semibold leading-snug">Faster Growth</p>
                <p className="text-xs text-muted-foreground">Compared to traditional PM paths</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tight three-column testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Sameer */}
          <div className="bg-card rounded-xl p-5 border" style={{borderColor:'#FDECB2'}}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/sameer.jpeg" alt="Md Sameer Mahboob" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground italic mb-3 text-gray-500 leading-relaxed">"My time as a PM at Jar was a transformative experience. It gave me early ownership, exposed me to different product challenges, and improved my decision-making. The role helped me handle uncertainty, understand users better, and grow in confidence and clarity as a product Manager."</p>
                <p className="font-semibold text-sm">Md Sameer Mahboob</p>
                <p className="text-xs text-muted-foreground">PM - Activation, Jar</p>
              </div>
            </div>
          </div>

          {/* Pragya */}
          <div className="bg-card rounded-xl p-5 border" style={{borderColor:'#FDECB2'}}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/pragya.jpeg" alt="Pragya Nagpal" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground italic mb-3 text-gray-500 leading-relaxed">"As Product Owners at Jar, nothing excites us more than seeing our product lift the real financial burdens that Indian people face. What has stood out for me is the data-driven, rapid experimentation & high ownership environment where every team member is empowered to bring bold ideas to life. At Jar, you're expected to fail fast, learn quicker & drive real business outcomes."</p>
                <p className="font-semibold text-sm">Pragya Nagpal</p>
                <p className="text-xs text-muted-foreground">SPM - Retention, Jar</p>
              </div>
            </div>
          </div>

          {/* Gaurav */}
          <div className="bg-card rounded-xl p-5 border" style={{borderColor:'#FDECB2'}}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src="/gaurav.jpeg" alt="Gaurav Mampally" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground italic mb-3 text-gray-500 leading-relaxed">"Jar's problem-first mindset and exceptional team has created an environment where every project, no matter how challenging, yields invaluable learnings that far outweigh the effort invested. Definitely the place you'd want to be at if you're keen on building and scaling products that enables mass India to make better financial decisions."</p>
                <p className="font-semibold text-sm">Gaurav Mampally</p>
                <p className="text-xs text-muted-foreground">PM - Activation, Jar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAPMsChooseJar;


