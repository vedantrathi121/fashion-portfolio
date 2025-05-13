
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-fashion-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-lg">
              As a passionate fashion design student, I am dedicated to creating innovative and sustainable 
              designs that blend contemporary aesthetics with timeless elegance. My approach to fashion combines 
              creative vision with technical precision to produce pieces that are both beautiful and functional.
            </p>
            
            <p className="text-lg">
              I draw inspiration from various cultural influences, architectural elements, and natural forms. 
              My designs aim to tell a story while offering comfort and style to the wearer.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Sustainable Fashion</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Digital Design</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Pattern Making</span>
              <span className="px-3 py-1 bg-white border border-fashion-gold text-sm rounded-full">Textile Innovation</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-montserrat text-2xl font-medium mb-4">Education</h3>
            
            <Card className="border-l-4 border-l-fashion-gold">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">2020 - Present</div>
                <h4 className="font-montserrat text-xl font-medium mt-1">Bachelor of Fashion Design</h4>
                <p className="text-fashion-charcoal mt-2">Fashion Institute of Design</p>
                <p className="mt-2">
                  Specializing in sustainable fashion design with focus on innovative pattern cutting and digital design technology.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-fashion-gold">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground">2018 - 2020</div>
                <h4 className="font-montserrat text-xl font-medium mt-1">Associate Degree in Textile Design</h4>
                <p className="text-fashion-charcoal mt-2">Art & Design Academy</p>
                <p className="mt-2">
                  Studied textile manipulation, fabric dyeing techniques, and sustainable material development.
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
