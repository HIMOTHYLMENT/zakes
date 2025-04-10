
import { useState } from "react";
import MenuCard, { MenuItemProps } from "@/components/MenuCard";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "classic", name: "Classic Kotas" },
    { id: "special", name: "Special Kotas" },
    { id: "sides", name: "Sides & Extras" },
    { id: "drinks", name: "Drinks" }
  ];

  const menuItems: MenuItemProps[] = [
    {
      id: 1,
      name: "Original Kota",
      description: "The classic kota with Russian sausage, chips, cheese, and our special sauce.",
      price: 45.99,
      image: "/lovable-uploads/03760056-dbc9-4257-85c4-e9a97536871c.png",
      category: "classic"
    },
    {
      id: 2,
      name: "Zakes Special",
      description: "Our signature kota with double Russian, cheese, egg, polony, and chips.",
      price: 69.99,
      image: "/lovable-uploads/321daa51-f53e-4394-a469-b037dc62e049.png",
      category: "special"
    },
    {
      id: 3,
      name: "Chicken Kota",
      description: "Tender chicken, lettuce, tomato, cheese, and chips with our signature sauce.",
      price: 55.99,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "classic"
    },
    {
      id: 4,
      name: "Beef Kota",
      description: "Premium beef patty, lettuce, tomato, cheese, and chips.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "classic"
    },
    {
      id: 5,
      name: "Veggie Kota",
      description: "For vegetarians - with fresh vegetables, cheese, and our special sauce.",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "classic"
    },
    {
      id: 6,
      name: "Zakes Supreme",
      description: "The ultimate kota experience with all our premium toppings.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "special"
    },
    {
      id: 7,
      name: "Extra Chips",
      description: "Crispy, golden chips on the side.",
      price: 25.99,
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "sides"
    },
    {
      id: 8,
      name: "Soft Drink",
      description: "330ml can of your favorite soft drink.",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "drinks"
    }
  ];

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Menu Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display mb-4">OUR MENU</h1>
          <div className="w-32 h-1 bg-zakes-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our selection of delicious kotas and sides. All made with fresh ingredients and our special recipes.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? "bg-zakes-red text-white" 
                  : "bg-zakes-darkgray text-white hover:bg-zakes-red/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
