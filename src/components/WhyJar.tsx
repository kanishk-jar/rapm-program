const WhyJar = () => {
  return (
    <section className="py-8" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Jar?</h2>
          <p className="text-xl max-w-3xl mx-auto">
            India’s fastest-growing daily savings and investment app, empowering 25M+ Indians to build wealth effortlessly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background:'#FDECB2'}}>
              <div className="text-3xl">💰</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">₹200+ Crores</h3>
            <p className="text-muted-foreground text-sm">Annual Revenue</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background:'#FDECB2'}}>
              <div className="text-3xl">📱</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">1M+ Daily</h3>
            <p className="text-muted-foreground text-sm">UPI Autopay Transactions</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background:'#FDECB2'}}>
              <div className="text-3xl">💎</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Profitable</h3>
            <p className="text-muted-foreground text-sm">Since Jan 2025</p>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{background:'#FDECB2'}}>
              <div className="text-3xl">🏠</div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Making Bharat Financially fit</h3>
            <p className="text-muted-foreground text-sm">Our Vision</p>
          </div>
        </div>
        
        <div className="mt-8 rounded-3xl p-8 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Built for Bharat</h3>
              <p className="text-muted-foreground mb-4">
                From spare change investments in 24K Digital Gold to Nek's luxury-meets-affordability D2C jewelry brand, we're making wealth creation accessible to every Indian household.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Tiger Global Backed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Founded 2021</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚀</div>
              <div className="text-3xl font-bold mb-2">25M+</div>
              <div>Indians Building Wealth Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJar;