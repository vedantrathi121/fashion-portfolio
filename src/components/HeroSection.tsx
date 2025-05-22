
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import bgImage from '../../../public/background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background Image - Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: `url(${bgImage})`
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Ishwari Saboo <br/>
            <span className="text-fashion-gold">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
            Fashion designer - Desiging what doesn't exists yet...
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-fashion-gold hover:bg-fashion-gold/90 text-black rounded-none px-8 py-6" 
              size="lg"
              asChild
            >
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 rounded-none px-8 py-6"
              size="lg"
              asChild
            >
              <a href="#contact" className='contact-me-color'>Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
