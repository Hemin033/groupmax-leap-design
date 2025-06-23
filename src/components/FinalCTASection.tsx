
import { Button } from '@/components/ui/button';

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-bold text-3xl md:text-4xl mb-6">
          Ready to Sell 3x More Group Insurance?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Join 300+ brokers who've transformed their business with GroupMAX
        </p>
        
        <Button className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform">
          Book Your Free Demo
        </Button>
        
        <div className="mt-6 text-sm opacity-80">
          See results in 30 days • No commitment required
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
