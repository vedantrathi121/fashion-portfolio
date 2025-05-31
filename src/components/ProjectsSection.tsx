
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Import local images
import sustainableThumbnail from '../../public/Pastelparadies.png';
import urbanThumbnail from '../../public/Rangtarang.png';
import eveningThumbnail from '../../public/Marsexploration.png';
import textileThumbnail from '../../public/Templeaesthetics.png';
import juteProject from '../../public/juteProject.png';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "The Pastel Pardies",
    thumbnail: sustainableThumbnail,
    tools: ["Adobe Illustrator", "Sustainable Materials", "Hand Sewing"],
    driveLink: "https://drive.google.com/file/d/1SBobdS6DTQXPF2qM77tlvtOBY2BaHhLM/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Rang Tarang",
    thumbnail: urbanThumbnail,
    tools: ["Digital Pattern Making", "Fabric Manipulation", "3D Modeling"],
    driveLink: "https://drive.google.com/file/d/1K2FzmULmigki0Eh5eMjnyyQag77fM24o/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Mars Exploration X Button Masala",
    thumbnail: eveningThumbnail,
    tools: ["Draping", "Embroidery", "Couture Techniques"],
    driveLink: "https://drive.google.com/file/d/1Wu3QCyvPf_oMIGVJQLbjV_bbnDn2d4Ni/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Temple Aesthetics",
    thumbnail: textileThumbnail,
    tools: ["Digital Printing", "Material Innovation", "Textile Manipulation"],
    driveLink: "https://drive.google.com/file/d/1p2Sd92D3YwWWpEpnqIL1EipA48khsQA7/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Jute research work",
    thumbnail: juteProject,
    tools: ["Digital Printing", "Material Innovation", "Textile Manipulation"],
    driveLink: "https://drive.google.com/file/d/1aUErry9B71e1pIus5fmCXkUxkaLmGC75/view?usp=drive_link",
  },
];

const ProjectsSection = () => {

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
                  {/* <span className="text-sm text-white/80 font-montserrat tracking-wider uppercase">
                    {project.category}
                  </span> */}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-montserrat text-xl font-medium mb-3">{project.title}</h3>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="border-fashion-gold text-fashion-charcoal hover:bg-fashion-gold/10 mt-2 rounded-none"
                    onClick={() => window.open(project.driveLink, '_blank')}
                  >
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
