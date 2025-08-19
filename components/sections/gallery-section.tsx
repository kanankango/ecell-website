import React from "react";

const images = [
  { src: "IMG_20250404_164342663.jpg", alt: "Gallery 1" },
  { src: "IMG-20250814-WA0007.jpg", alt: "Gallery 2" },
  { src: "IMG-20250805-WA0013.jpg", alt: "Gallery 3" },
  { src: "IMG-20250814-WA0006.jpg", alt: "Gallery 4" },
  { src: "gallery1.jpg", alt: "Gallery 5" },
  { src: "IMG-20250814-WA0004.jpg", alt: "Gallery 6" },
  { src: "IMG-20250814-WA0005.jpg", alt: "Gallery 7" },
  { src: "gallery4.jpg", alt: "Gallery 8" },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-2">Our Gallery</h2>
      <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
      <p className="text-gray-300 mb-12">
        Capturing moments of innovation, collaboration, and entrepreneurial spirit
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="border-4 border-white p-1 bg-gradient-to-r from-yellow-500 to-yellow-600 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            {img.src ? (
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover border-4 border-black rounded transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-48 flex items-center justify-center text-white border-4 border-black">
                Coming Soon
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="/gallery"
          className="inline-flex items-center text-yellow-500 font-semibold hover:underline"
        >
          View All Photos →
        </a>
      </div>
    </section>
  );
};

export default GallerySection;
