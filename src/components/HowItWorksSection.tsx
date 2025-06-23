
const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Submit Client Details",
      description: "Enter basic group information and get instant multi-carrier quotes"
    },
    {
      number: "2", 
      title: "Get Expert Support",
      description: "Our underwriting team handles complex cases and ensures approvals"
    },
    {
      number: "3",
      title: "Close More Deals", 
      description: "Present professional proposals and automate the enrollment process"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            From Quote to Close in 3 Simple Steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-brand-primary"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-6 relative z-10">
                {step.number}
              </div>
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
