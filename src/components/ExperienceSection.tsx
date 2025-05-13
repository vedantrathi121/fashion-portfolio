
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Design Assistant",
      company: "Gro Globally, Pune",
      period: "Aug 2024 – Nov 2024",
      description: "Created visual content for branding, social media, website design, and digital ads.
Learned to maintain brand consistency and adapt design skills across digital platforms.",
      skills: ["Social Media Handling", "Digital Marketing", "Technical Design", "Production Coordination"]
    },
    {
      title: "Design Assistant",
      company: "Craft Village, Pune",
      period: "May 2024 – July 2024",
      description: "Managed studio setup, social media, quality checks, catalog creation, and designed men’s apparel.
Learned end-to-end product handling, visual communication, and apparel design for real-world projects.",
      skills: ["Sustainable Materials", "Technical Design", "Production Coordination"]
    },
    {
      title: "Fashion Design Intern",
      company: "Leafage Studio, Pune",
      period: "Dec 2022",
      description: "Worked with eco-printing, natural dyeing, and assisted in creating a sustainable home décor collection.
Learned sustainable design techniques and collaborative project development.",
      skills: ["Adobe Illustrator", "Pattern Making", "Fashion Illustration"]
    },
    {
      title: "Fashion Design Intern",
      company: "Rang Couture, Pune",
      period: "Jan 2023 – Mar 2023",
      description: "Assisted in studio operations, order dispatch, product checks, client-based design tasks, photography, and social media reel creation.
Learned studio management, content creation, and visual storytelling for brand engagement.",
      skills: ["Visual Merchandising", "Trend Forecasting", "Wardrobe Styling"]
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
