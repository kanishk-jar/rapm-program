import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhatYoullGet = () => {
  const benefits = [
    {
      title: "Hands-on Ownership",
      description: "Lead projects that touch millions of users from day one",
      icon: "🎯",
      details: [
        "Own product features end-to-end",
        "Work directly with engineering & design",
        "Drive metrics that matter to the business",
        "See your impact on user behavior"
      ]
    },
    {
      title: "Mentorship & Learning",
      description: "Weekly check-ins, workshops, and access to founder circles",
      icon: "🧠",
      details: [
        "Personalized coaching from senior PMs",
        "Fintech leadership access",
        "Product strategy workshops",
        "Access to industry expert network"
      ]
    },
    {
      title: "Cross-functional Exposure",
      description: "Work with engineering, design, growth, compliance, and analytics",
      icon: "🤝",
      details: [
        "Embed with different functional teams",
        "Learn compliance & regulatory aspects",
        "Deep dive into growth and analytics",
        "Understand full product lifecycle"
      ]
    },
    {
      title: "Career Acceleration",
      description: "Transition into PM roles faster than industry peers",
      icon: "🚀",
      details: [
        "Fast-track to senior PM level",
        "Build strong internal network",
        "Gain founder & leadership endorsement",
        "Access to exclusive opportunities"
      ]
    },
    {
      title: "Real Impact",
      description: "Build financial products that drive change in India",
      icon: "🌟",
      details: [
        "Shape saving habits for millions",
        "Work on financial inclusion",
        "Launch products used by millions",
        "Contribute to India's fintech evolution"
      ]
    }
  ];

  return (
    <section className="py-12 px-6" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="secondary" className="mb-4">📚 What You'll Get</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Accelerate Your Product Career
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just another internship. You'll get hands-on experience, world-class mentorship, and the opportunity to build products that millions of Indians use every day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transition-all duration-300 h-full" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="mb-6 leading-relaxed">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI-PM Edge Section */}
        <div className="rounded-2xl p-8 md:p-12 mb-10 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4" style={{background:'#FDECB2', borderColor:'#FDECB2', color:'#160829'}}>🤖 The AI-PM Edge</Badge>
          <h3 className="text-xl md:text-3xl font-bold mb-4">Be among the first product managers trained to think, build, and lead with AI at the core, not just as a tool.</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto"></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-xl p-8 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-semibold mb-3 text-lg">AI-First Problem Solving & Strategy</h4>
              <p className="text-sm text-muted-foreground mb-4">Redefine product challenges with AI/ML for efficiency, personalisation, and automation at scale. Master prompt engineering + no-code AI tools to prototype faster than anyone else.</p>
              <div className="space-y-2">
                <p className="text-xs italic text-gray-500">• Think: "How can AI help activate the next 10M users?"</p>
                <p className="text-xs italic text-gray-500">• Fluent with LangChain, Zapier, and AI-powered research tools</p>
              </div>
            </div>

            <div className="rounded-xl p-8 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
              <div className="text-3xl mb-4">📊</div>
              <h4 className="font-semibold mb-3 text-lg">Data-Driven AI Implementation</h4>
              <p className="text-sm text-muted-foreground mb-4">Turn data into smart decisions. Use SQL/Python + AI for sharper experiments, churn prediction, and behavioural insights, while understanding the ethics of AI in fintech.</p>
              <div className="space-y-2">
                <p className="text-xs italic text-gray-500">• AI-powered cohort analysis & churn prediction</p>
                <p className="text-xs italic text-gray-500">• Rapid user research with AI summarization tools</p>
              </div>
            </div>

            <div className="rounded-xl p-8 border" style={{background:'#FFF7DD', borderColor:'#FDECB2'}}>
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="font-semibold mb-3 text-lg">AI-Native Builder Mindset</h4>
              <p className="text-sm text-muted-foreground mb-4">Build faster with AI as your co-pilot. Use generative AI for mocks, docs, and wireframes, then ship with engineers on AI-first roadmaps like fraud detection & recommendations.</p>
              <div className="space-y-2">
                <p className="text-xs italic text-gray-500">• 10x faster iteration with AI-generated assets</p>
                <p className="text-xs italic text-gray-500">• Master the AI + product strategy intersection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories moved to its own component above Beyond Learning */}
      </div>
    </section>
  );
};

export default WhatYoullGet;