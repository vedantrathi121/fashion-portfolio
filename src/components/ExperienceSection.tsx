
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Fashion Design Intern",
      company: "Leafage, Pune",
      period: "Winter 2021",
      description: "I had learnt to make the product handcrafted with Nature and also Botanical/Eco printing.",
      skills: ["Adobe Illustrator", "Pattern Making", "Fashion Illustration"]
    },
    {
      title: "Fashion Design Intern",
      company: "Rang, Pune",
      period: "Spring 2022",
      description: "I had learnt following skills- Boutique Management, Team Work, Client Handling, Stitching, Wraping.",
      skills: ["Visual Merchandising", "Trend Forecasting", "Wardrobe Styling"]
    },
    {
      title: "Design Assistant",
      company: "Eco Fashion Lab",
      period: "2021-2022",
      description: "Supported the development of sustainable capsule collections. Researched eco-friendly materials and production methods. Created technical documentation for manufacturing.",
      skills: ["Sustainable Materials", "Technical Design", "Production Coordination"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="md:col-span-3 bg-fashion-gold/10 p-6 flex flex-col justify-center items-center md:items-start">
                    <Briefcase className="h-8 w-8 text-fashion-gold mb-3" />
                    <span className="text-sm font-semibold">{exp.period}</span>
                    <h4 className="font-montserrat text-xl font-medium mt-2">{exp.company}</h4>
                  </div>
                  
                  <div className="md:col-span-9 p-6">
                    <h3 className="font-montserrat text-xl font-medium">{exp.title}</h3>
                    <p className="mt-3 text-gray-700">{exp.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
