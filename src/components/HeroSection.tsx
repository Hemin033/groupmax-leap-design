
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-brand-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Award Badge */}
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-8 shadow-sm border animate-fade-in">
            <span className="text-2xl mr-2">🏆</span>
            <span className="text-sm font-medium text-gray-700">
              Trusted by Canada's Leading Insurance Brokers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-bold text-4xl md:text-6xl text-gray-900 mb-6 animate-fade-in">
            Sell <span className="text-brand-primary">3x More</span> Group Insurance<br />
            Without Working Harder
          </h1>

          {/* Supporting Copy */}
          <p className="font-normal text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in">
            The only Digital MGA that actually grows your business - with instant multi-carrier quotes, 
            expert underwriting support, and AI tools that close more deals.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in">
            <Button className="bg-brand-primary hover:bg-blue-700 text-white px-8 py-4 text-lg hover:scale-105 transition-transform">
              Book Your Free Demo
            </Button>
            <Button variant="outline" className="border-brand-primary text-brand-primary px-8 py-4 text-lg hover:bg-brand-primary hover:text-white transition-colors">
              Watch Demo Video
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="text-sm text-gray-500 animate-fade-in">
            <span className="font-medium text-brand-accent">Backed by PolicyAdvisor.com</span> • 25,000+ policies solved
          </div>

          {/* Hero Visual Placeholder */}
          <div className="mt-16 animate-scale-in">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                <p className="text-gray-500 text-lg">Dashboard Mockup Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
