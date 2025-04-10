
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Clock, ChefHat } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Star className="text-zakes-red" size={24} />,
      title: "Premium Quality",
      description: "We use only the finest ingredients for our signature kotas."
    },
    {
      icon: <MapPin className="text-zakes-red" size={24} />,
      title: "Mobile Service",
      description: "We bring the kitchen to you. Perfect for events and special occasions."
    },
    {
      icon: <Clock className="text-zakes-red" size={24} />,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality or taste."
    },
    {
      icon: <ChefHat className="text-zakes-red" size={24} />,
      title: "Master Chefs",
      description: "Our experienced chefs prepare every kota with skill and passion."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="section-padding bg-black">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">ABOUT ZAKES</h2>
            <div className="w-24 h-1 bg-zakes-red mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                Zakes Mobile Kitchen brings you the authentic taste of South African street food with our signature kotas. 
                Each kota is carefully crafted with fresh ingredients and our special sauce that will leave you craving for more.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Whether you're looking for a quick lunch or catering for an event, our mobile kitchen is ready to serve you the most delicious kotas in town.
              </p>
              <Link to="/about" className="button flex items-center gap-2 w-fit">
                Learn More <ArrowRight size={18} />
              </Link>
            </div>
            <div>
              <img 
                src="/lovable-uploads/321daa51-f53e-4394-a469-b037dc62e049.png" 
                alt="Zakes Kota" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-zakes-darkgray">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zakes-red/30 to-transparent z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-4">READY TO ORDER?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the delicious taste of our signature kotas today. Order now or visit our mobile kitchen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="button text-lg">
              View Our Menu
            </Link>
            <Link to="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-6 rounded-md font-semibold inline-block transition-all duration-300 text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
