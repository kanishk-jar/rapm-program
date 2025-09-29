const BeyondLearning = () => {
  const benefits = [
    {
      icon: "💰",
      title: "Competitive salary",
      description: "Industry-leading compensation package",
      gradient: "from-primary/20 to-primary-glow/20"
    },
    {
      icon: "🎯",
      title: "Career acceleration",
      description: "Fast-track to Senior Product Manager",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: "🎓",
      title: "Alumni network access", 
      description: "Lifetime learning circle and exclusive networking events.",
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: "📚",
      title: "Relocation Support",
      description: "Accommodation support to help you settle in smoothly.",
      gradient: "from-primary-glow/20 to-accent/20"
    },
    {
      icon: "🏆",
      title: "Build Public Reputation",
      description: "Gain visibility with demo day presentations and LinkedIn features.",
      gradient: "from-accent/20 to-primary-glow/20"
    },
    {
      icon: "👕",
      title: "Jar Goodies",
      description: "Exclusive brand tees and merchandise.",
      gradient: "from-primary/20 to-accent/20"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Beyond Just Learning
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We invest in your entire career trajectory, not just your skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card/60 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-primary/10 group hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-3xl">{benefit.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Building careers that last decades, not just quarters</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondLearning;