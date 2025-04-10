
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/03760056-dbc9-4257-85c4-e9a97536871c.png"
          alt="Zakes Signature Kota"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display text-white mb-6 animate-pulse-slow">
          ZAKES <span className="text-zakes-red">KOTA</span> KRAVINGS
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
          Authentic South African street food experience with the most delicious kotas in town
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu" className="button text-lg">
            View Our Menu
          </Link>
          <Link to="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white py-3 px-6 rounded-md font-semibold inline-block transition-all duration-300 text-lg">
            Order Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 border-l-2 border-b-2 border-white rotate-[-45deg]"></div>
      </div>
    </div>
  );
};

export default Hero;
