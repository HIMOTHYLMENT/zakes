
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, updateQuantity, removeFromCart, total } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-black/50 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/e8d69b3c-12b2-48b7-92dd-7a17abdc3b88.png" 
              alt="Zakes Mobile Kitchen Logo" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-zakes-red transition-colors ${
                  location.pathname === link.path ? 'text-zakes-red' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="button"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button
            className="relative ml-4 text-2xl"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            🛒
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-zakes-red text-white rounded-full px-2 text-xs">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zakes-black">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-zakes-red transition-colors py-2 ${
                  location.pathname === link.path ? 'text-zakes-red' : ''
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="button text-center mt-4"
              onClick={closeMenu}
            >
              Order Now
            </Link>
          </div>
        </div>
      )}

      {/* Cart Sidebar */}
      {cartOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setCartOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-80 bg-zakes-darkgray text-white shadow-lg z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-zakes-red">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <button onClick={() => setCartOpen(false)} aria-label="Close cart" className="text-2xl">×</button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-gray-400">Your cart is empty.</div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center gap-3 border-b border-zakes-red pb-3">
                    <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded" />
                    <div className="flex-1">
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-sm text-gray-400">R{item.price.toFixed(2)}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <button onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} className="px-2 py-1 bg-zakes-red text-white rounded">-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-zakes-red text-white rounded">+</button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-zakes-red ml-2" aria-label="Remove item">✕</button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-zakes-red">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold">R{total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-zakes-red text-white py-2 rounded font-semibold" disabled={cart.length === 0}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
