
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="font-bold text-xl mb-4">GroupMAX</div>
            <p className="text-gray-400 mb-4">
              The Digital MGA transforming how Canadian insurance brokers grow their business.
            </p>
            <div className="text-gray-400 text-sm">
              <div>Email: hello@groupmax.ca</div>
              <div>Phone: 1-800-GROUPMAX</div>
              <div>Toronto, ON, Canada</div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © 2025 GroupMAX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
