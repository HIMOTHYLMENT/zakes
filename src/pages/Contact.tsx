
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display mb-4">CONTACT US</h1>
          <div className="w-32 h-1 bg-zakes-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to place an order? Get in touch with Zakes Mobile Kitchen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-display mb-6">GET IN TOUCH</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-zakes-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-300">Johannesburg, South Africa</p>
                  <p className="text-gray-300">We're mobile! Check our social media for current locations.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-zakes-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-300">+27 000 000 0000</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-zakes-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-300">info@zakeskitchen.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock size={24} className="text-zakes-red mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Operating Hours</h3>
                  <p className="text-gray-300">Monday - Friday: 10:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Saturday - Sunday: 11:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
            
            {/* Social Media & WhatsApp */}
            <div className="mb-10">
              <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-zakes-darkgray p-3 rounded-full hover:bg-zakes-red transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="bg-zakes-darkgray p-3 rounded-full hover:bg-zakes-red transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="bg-zakes-darkgray p-3 rounded-full hover:bg-zakes-red transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="bg-zakes-darkgray p-3 rounded-full hover:bg-zakes-red transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6 5.48c1.69 0 3.43 1.53 3.43 1.53L17 10.57s-1.42-1.42-2.59-1.42c-1.18 0-1.96.67-1.96 1.53 0 .85.69 1.35 1.82 1.93l.67.35c1.45.75 3.39 1.65 3.39 4.07 0 2.41-1.89 4.07-4.63 4.07-2.75 0-4.63-1.66-5.75-3.77l2.77-1.94c.97 1.16 1.81 1.8 2.98 1.8 1.18 0 2.07-.65 2.07-1.57 0-.93-.65-1.39-2.27-2.21l-.65-.29c-1.92-1.01-3.18-1.87-3.18-3.79 0-2.11 1.86-3.79 4.57-3.79z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <Link to="#" className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white p-3 rounded-md w-fit transition-colors">
                <Smartphone size={20} />
                <span>Contact via WhatsApp</span>
              </Link>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-zakes-darkgray p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
        
        {/* Google Map */}
        <div className="mb-20">
          <h2 className="text-3xl font-display mb-6">FIND US</h2>
          <div className="w-full h-96 bg-zakes-darkgray rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.73428826243!2d27.9699716!3d-26.171627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1649947909548!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
