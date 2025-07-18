
import { useState } from 'react';
import { useCart } from "@/context/CartContext";

export interface MenuItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string; // Added category property as optional
}

const MenuCard = ({ item }: { item: MenuItemProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="bg-zakes-darkgray rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 right-4 bg-zakes-red text-white px-3 py-1 rounded-full font-normal">
          R{item.price.toFixed(2)}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-normal mb-2">{item.name}</h3>
        <p className="text-gray-400 mb-4">{item.description}</p>
        <button
          className="w-full bg-zakes-red hover:bg-opacity-90 text-white py-2 rounded-md font-semibold transition-colors"
          onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
        >
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
