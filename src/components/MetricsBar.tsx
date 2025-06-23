
const MetricsBar = () => {
  const metrics = [
    { value: "47%", label: "Average Revenue Increase" },
    { value: "300+", label: "Brokers Growing Fast" },
    { value: "15 Min", label: "Average Quote Time" },
    { value: "98%", label: "First-Submission Approval Rate" }
  ];

  return (
    <section className="py-12 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="font-bold text-2xl md:text-3xl text-brand-accent mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
