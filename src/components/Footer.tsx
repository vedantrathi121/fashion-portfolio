
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-fashion-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-montserrat text-xl font-medium mb-4">PORTFOLIO</h3>
            <p className="text-gray-300 max-w-xs">
              Fashion design portfolio showcasing innovative and sustainable collections.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-fashion-gold transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 transition-transform group-hover:translate-x-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat text-xl font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates on new projects and fashion events.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 text-black flex-grow focus:outline-none"
              />
              <button className="bg-fashion-gold hover:bg-fashion-gold/90 text-black px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Fashion Design Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
