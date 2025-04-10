
import { Users, Award, Clock, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Users className="text-zakes-red" size={24} />,
      value: "1000+",
      label: "Happy Customers"
    },
    {
      icon: <Award className="text-zakes-red" size={24} />,
      value: "50+",
      label: "Kota Varieties"
    },
    {
      icon: <Clock className="text-zakes-red" size={24} />,
      value: "5+",
      label: "Years Experience"
    },
    {
      icon: <MapPin className="text-zakes-red" size={24} />,
      value: "10+",
      label: "Event Locations"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* About Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display mb-4">ABOUT US</h1>
          <div className="w-32 h-1 bg-zakes-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn more about Zakes Mobile Kitchen and our passion for authentic South African street food.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-display mb-4">OUR STORY</h2>
            <div className="w-20 h-1 bg-zakes-red mb-6"></div>
            <p className="text-gray-300 mb-4">
              Zakes Mobile Kitchen started with a simple dream - to bring authentic South African kota flavors to the streets. 
              What began as a small family business has grown into a beloved mobile kitchen known for its delicious, quality food.
            </p>
            <p className="text-gray-300 mb-4">
              Founded in 2018, we've been serving the community with our unique kota recipes passed down through generations. 
              Our founder, Zakes, learned the art of kota-making from his grandmother and added his own modern twist to create 
              the signature flavors we're known for today.
            </p>
            <p className="text-gray-300">
              Today, we pride ourselves on using only the freshest ingredients, supporting local suppliers, and delivering 
              an unforgettable street food experience that keeps our customers coming back for more.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-zakes-red opacity-25 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-zakes-red opacity-25 rounded-full blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Zakes Mobile Kitchen" 
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-zakes-darkgray rounded-xl p-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display mb-4">OUR MISSION</h2>
            <div className="w-20 h-1 bg-zakes-red mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Quality Food</h3>
              <p className="text-gray-400">
                We are committed to using only the freshest ingredients and maintaining the highest standards of quality in every kota we serve.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Community Service</h3>
              <p className="text-gray-400">
                We aim to be an integral part of the community, creating jobs and supporting local suppliers and businesses.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
              <p className="text-gray-400">
                We strive to exceed expectations with every order, ensuring our customers leave satisfied and eager to return.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-black p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-display mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-display mb-4">MEET OUR TEAM</h2>
          <div className="w-20 h-1 bg-zakes-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            The passionate people behind Zakes Mobile Kitchen
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zakes-darkgray rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Zakes - Founder" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Zakes</h3>
                <p className="text-zakes-red mb-4">Founder & Head Chef</p>
                <p className="text-gray-400">
                  Zakes brings his passion for authentic South African flavors to every kota he creates.
                </p>
              </div>
            </div>
            
            <div className="bg-zakes-darkgray rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Thabo - Master Chef" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Thabo</h3>
                <p className="text-zakes-red mb-4">Master Chef</p>
                <p className="text-gray-400">
                  Thabo's culinary creativity has helped develop our unique kota recipes.
                </p>
              </div>
            </div>
            
            <div className="bg-zakes-darkgray rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Lerato - Customer Relations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Lerato</h3>
                <p className="text-zakes-red mb-4">Customer Relations</p>
                <p className="text-gray-400">
                  Lerato ensures every customer has an amazing experience with Zakes Mobile Kitchen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
