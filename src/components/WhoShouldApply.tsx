import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhoShouldApply = () => {
  const requirements = [
    {
      category: "Educational Background",
      items: [
        "Bachelor's degree (Engineering, Computer Science, Design, Business, or related)",
        "Master's/MBA is a plus but not required",
        "Open to bootcamp/fellowship grads (NextLeap, Product School, etc.)"
      ],
      icon: "🎓"
    },
    {
      category: "Experience Level",
      items: [
        "0–3 years of work experience",
        "Prior internships/projects in tech startups preferred",
        "Software development, design, or analytics experience valued",
        "No prior PM experience required (we'll train you)"
      ],
      icon: "💼"
    },
    {
      category: "Skills & Qualities",
      items: [
        "Strong analytical and problem-solving skills",
        "SQL/Python familiarity is a bonus",
        "Excellent communication & collaboration abilities",
        "Product sense: curiosity to understand users",
        "Entrepreneurial mindset: proactive and resourceful"
      ],
      icon: "⚡"
    }
  ];

  const passions = [
    "Consumer fintech & financial inclusion",
    "Habit formation & behavior design",
    "Building for India's internet users",
    "Scaling products for millions"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">🧩 Who Should Apply</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Are You Ready to Shape India's Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We welcome early-career builders who are excited about creating financial products that drive real change for millions of Indians.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((req, index) => (
            <Card key={index} className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{req.icon}</span>
                  <CardTitle className="text-lg">{req.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Requirements - Inline */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10">
            <span className="text-primary text-sm">📍</span>
            <span className="text-sm text-muted-foreground">Based in or willing to relocate to Bangalore</span>
          </div>
          
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10">
            <span className="text-primary text-sm">⏰</span>
            <span className="text-sm text-muted-foreground">Full-time commitment for 12 months</span>
          </div>
          
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10">
            <span className="text-primary text-sm">👥</span>
            <span className="text-sm text-muted-foreground">Batch of 4</span>
          </div>
          <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10">
            <span className="text-primary text-sm">📅</span>
            <span className="text-sm text-muted-foreground">Starting 15 Nov 2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldApply;
