
import { useState } from 'react';

export interface GalleryImageProps {
  id: number;
  image: string;
  title: string;
}

const GalleryImage = ({ image }: { image: GalleryImageProps }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image.image}
        alt={image.title}
        className={`w-full h-64 object-cover transition-transform duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <h3 className="text-white font-semibold">{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryImage;
