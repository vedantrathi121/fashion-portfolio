
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <p className="text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-fashion-gold mt-1" />
                <div>
                  <h3 className="font-montserrat font-medium">Email</h3>
                  <p className="text-gray-700">ishwari.saboo@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-fashion-gold mt-1" />
                <div>
                  <h3 className="font-montserrat font-medium">Phone</h3>
                  <p className="text-gray-700">+91 7219152666</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <ExternalLink className="h-5 w-5 mr-3 text-fashion-gold mt-1" />
                <div>
                  <h3 className="font-montserrat font-medium">Social Media</h3>
                  <div className="mt-2 space-x-4">
                    <a href="https://www.linkedin.com/in/ishwari-saboo-266582245/" target="_blank" className="text-gray-700 hover:text-fashion-gold transition-colors">LinkedIn</a>
                    <a href="#" target="_blank" className="text-gray-700 hover:text-fashion-gold transition-colors">Behance</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-montserrat">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-fashion-charcoal/20 focus-visible:ring-fashion-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-montserrat">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-fashion-charcoal/20 focus-visible:ring-fashion-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-montserrat">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="border-fashion-charcoal/20 focus-visible:ring-fashion-gold resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-fashion-gold hover:bg-fashion-gold/90 text-black rounded-none w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
