
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Sustainable Summer Collection",
    category: "Apparel Design",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "A collection of summer pieces created using organic cotton, recycled polyester and low-impact dyes. This project explored the balance between eco-friendly production and contemporary aesthetics.",
    tools: ["Adobe Illustrator", "Sustainable Materials", "Hand Sewing"]
  },
  {
    id: 2,
    title: "Urban Minimalism",
    category: "Streetwear",
    thumbnail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "A minimalist streetwear collection focusing on clean lines, monochromatic palettes, and functional design. This project aimed to create versatile everyday pieces with architectural influences.",
    tools: ["Digital Pattern Making", "Fabric Manipulation", "3D Modeling"]
  },
  {
    id: 3,
    title: "Evening Elegance",
    category: "Formal Wear",
    thumbnail: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80"
    ],
    description: "A collection of evening gowns inspired by Art Deco architecture and 1920s glamour. Features intricate beadwork, luxurious fabrics, and dramatic silhouettes for special occasions.",
    tools: ["Draping", "Embroidery", "Couture Techniques"]
  },
  {
    id: 4,
    title: "Avant-Garde Textiles",
    category: "Textile Design",
    thumbnail: "https://images.unsplash.com/photo-1531937662531-c8adfdd80be9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    images: [
      "https://images.unsplash.com/photo-1531937662531-c8adfdd80be9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ],
    description: "An experimental textile project exploring innovative fabric treatments, including heat-reactive dyes, 3D printed embellishments, and modular construction techniques.",
    tools: ["Digital Printing", "Material Innovation", "Textile Manipulation"]
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-fashion-offwhite">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden project-card">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="text-sm text-white/80 font-montserrat tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-montserrat text-xl font-medium mb-3">{project.title}</h3>
                <p className="text-gray-600 line-clamp-2 mb-5">{project.description}</p>
                
                <Button 
                  variant="outline" 
                  className="border-fashion-gold text-fashion-charcoal hover:bg-fashion-gold/10 mt-2 rounded-none"
                  onClick={() => openProject(project)}
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => closeProject()}>
          {selectedProject && (
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-montserrat mb-2">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-sm font-medium text-fashion-gold">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-md mb-5">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-montserrat font-medium mb-2">Tools & Techniques</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span key={index} className="px-3 py-1 bg-fashion-gold/10 text-sm rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default ProjectsSection;
