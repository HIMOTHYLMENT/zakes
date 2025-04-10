
import { useState } from "react";
import GalleryImage, { GalleryImageProps } from "@/components/GalleryImage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImageProps | null>(null);

  const galleryImages: GalleryImageProps[] = [
    {
      id: 1,
      image: "/lovable-uploads/03760056-dbc9-4257-85c4-e9a97536871c.png",
      title: "Original Kota"
    },
    {
      id: 2,
      image: "/lovable-uploads/321daa51-f53e-4394-a469-b037dc62e049.png",
      title: "Zakes Special"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Chicken Kota"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Beef Kota"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Fresh Ingredients"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Deluxe Kota"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Fresh Vegetables"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Mobile Kitchen"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Happy Customers"
    }
  ];

  const openLightbox = (image: GalleryImageProps) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Gallery Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-display mb-4">GALLERY</h1>
          <div className="w-32 h-1 bg-zakes-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a look at our delicious creations and happy customers enjoying Zakes Mobile Kitchen.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map(image => (
            <div key={image.id} onClick={() => openLightbox(image)} className="cursor-pointer">
              <GalleryImage image={image} />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => closeLightbox()}>
        <DialogContent className="sm:max-w-4xl bg-zakes-black border-zakes-darkgray p-0 overflow-hidden">
          <button 
            onClick={closeLightbox} 
            className="absolute right-4 top-4 text-white z-10 bg-zakes-red p-2 rounded-full"
          >
            <X size={20} />
          </button>
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="p-4 bg-zakes-black">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
