
const FeaturesSection = () => {
  const features = [
    {
      icon: "⚡",
      title: "Multi-Carrier Instant Quotes",
      description: "Compare rates from all major Canadian carriers in minutes, not days. No more phone calls or waiting for quotes."
    },
    {
      icon: "🎯",
      title: "Expert Underwriting On-Demand",
      description: "Get complex medical cases approved with our expert underwriting team. 98% first-submission approval rate."
    },
    {
      icon: "🤖",
      title: "AI-Powered Client Presentations",
      description: "Create compelling proposals instantly with AI that analyzes and presents the best options for each client."
    },
    {
      icon: "📈",
      title: "Automated Admin & Renewals",
      description: "Paperless enrollment, automated billing, and smart renewals. Focus on selling, not paperwork."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Everything You Need to Grow Your Insurance Business
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Stop losing deals to slow processes. Start closing more with better tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-4xl text-brand-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
