
const TrustedBySection = () => {
  const carriers = [
    "Sun Life", "Manulife", "Great-West Life", 
    "Industrial Alliance", "Canada Life", "Desjardins"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-semibold text-xl md:text-2xl text-gray-900 mb-4">
          Trusted by Leading Canadian Insurance Carriers
        </h2>
        <p className="text-base md:text-lg text-gray-600 mb-12">
          Get instant quotes from every major carrier in one platform
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {carriers.map((carrier, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 hover:bg-gray-50 transition-colors">
              <div className="text-gray-400 font-medium text-sm">
                {carrier}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
