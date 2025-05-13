
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-fashion-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              I love pushing boundaries in fashion — whether it’s experimenting with new materials, exploring creative techniques, or finding sustainable ways to bring ideas to life.
              For me, design is all about learning, growing, and creating work that feels honest, fresh, and meaningful.
            </p>
            
            <p className="text-lg">
              I draw inspiration from various cultural influences, architectural elements, and natural forms. 
              My designs aim to tell a story while offering comfort and style to the wearer.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Adobe Illustrator</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Adobe Photoshop</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Textile Innovation</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Embroidery</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Pattern making</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">MS Office</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Canva</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Sustainable Fashion</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-medium mb-4">Education</h3>
            
            <Card className="border-l-4 border-l-fashion-gold">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">2023 - 2025</div>
                <h4 className="font-montserrat text-xl font-medium mt-1">MSc Fashion Design</h4>
                <p className="text-fashion-charcoal mt-2">School of Fashion Technology, Pune</p>
                <p className="mt-2">
                Studied MSc Fashion Designing from School of Fashion Technology, Pune
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-fashion-gold">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">2020 - 2023</div>
                <h4 className="font-montserrat text-xl font-medium mt-1">BSc Fashion Design</h4>
                <p className="text-fashion-charcoal mt-2">INIFD (PU) (Times Trends Academy)</p>
                <p className="mt-2">
                  Studied Bsc Fashion Designing from INIFD (PU) (Times Trends Academy).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
