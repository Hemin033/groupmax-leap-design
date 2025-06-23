
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      title: "Independent Broker, Toronto",
      quote: "GroupMAX helped me go from struggling to get quotes to closing 3x more deals. The multi-carrier platform saves me 10 hours a week.",
      metric: "240% Revenue Increase",
      photo: "👩‍💼"
    },
    {
      name: "Mike Rodriguez", 
      title: "Group Benefits Specialist, Vancouver",
      quote: "The expert underwriting support changed everything. Cases I used to avoid are now my best commissions.",
      metric: "98% Approval Rate",
      photo: "👨‍💼"
    }
  ];

  return (
    <section className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Real Results from Real Brokers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">
                  {testimonial.photo}
                </div>
                <div>
                  <div className="font-semibold text-lg text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600">
                    {testimonial.title}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="font-bold text-xl text-brand-accent">
                {testimonial.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
