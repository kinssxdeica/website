'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const galleryImages = [
  'deica-04.jpg', 'deica-05.jpg', 'deica-06.jpg', 'deica-07.jpg',
  'deica-08.jpg', 'deica-10.jpg', 'deica-17.jpg', 'deica-18.jpg',
  'deica-24.jpg', 'deica-35.jpg', 'deica-36.jpg', 'deica-40.jpg'
];

export default function Home() {
  const [isMerchOpen, setIsMerchOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState<{[key: string]: boolean}>({});

  // Precargar imágenes cuando se abre la galería
  useEffect(() => {
    if (isGalleryOpen) {
      galleryImages.forEach((image) => {
        const img = document.createElement('img');
        img.src = `/images/gallery/${image}`;
        img.onload = () => {
          setImagesLoaded(prev => ({...prev, [image]: true}));
        };
      });
    }
  }, [isGalleryOpen]);

  const handleMerchClick = () => {
    setIsMerchOpen(!isMerchOpen);
    setIsGalleryOpen(false);
  };

  const handleGalleryClick = () => {
    setIsGalleryOpen(!isGalleryOpen);
    setIsMerchOpen(false);
  };

  return (
    <div className="min-h-screen w-full bg-brutal-pink relative overflow-hidden">
      {/* Main Content */}
      <div className="min-h-screen w-full px-32">
        {/* Contact and Links text */}
        <div className="absolute top-5 left-10 z-50 flex gap-6">
          <div className={`transition-opacity duration-300 ${isContactOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <button 
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="hover:border-b-2 hover:border-brutal-blue"
            >
              <span className="text-brutal-blue text-base">
                contacto
              </span>
            </button>
          </div>
          <div className={`transition-opacity duration-300 ${isContactOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <a 
              href="https://linktr.ee/kinssxdeica"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-b-2 hover:border-brutal-blue"
            >
              <span className="text-brutal-blue text-base">
                links
              </span>
            </a>
          </div>
        </div>

        {/* Contact Modal */}
        <div 
          className={`fixed inset-0 transition-all duration-300 ${
            isContactOpen 
              ? 'opacity-100 pointer-events-auto z-40' 
              : 'opacity-0 pointer-events-none -z-10'
          }`}
        >
          {/* Background overlay with fade */}
          <div 
            className={`absolute inset-0 bg-brutal-pink transition-opacity duration-300 ${
              isContactOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsContactOpen(false)}
          />
          
          {/* Modal content with scale and fade */}
          <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isContactOpen 
              ? 'scale-100 opacity-100 translate-y-0' 
              : 'scale-95 opacity-0 translate-y-4'
          }`}>
            <div className="bg-brutal-blue p-8 w-[600px] transform transition-all duration-300">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-brutal-pink text-4xl font-bold">CONTACTO</h2>
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="text-brutal-pink text-4xl font-bold hover:scale-110 transition-transform"
                >
                  ×
                </button>
              </div>
              <div className="space-y-6 text-brutal-pink font-mono text-xl tracking-wider">
                <p>EMAIL: <span className="select-all cursor-text">kinssxdeicamgmt@gmail.com</span></p>
                <p>INSTAGRAM: <span className="select-all cursor-text">@kinssxdeica</span></p>
                <p>TIKTOK: <span className="select-all cursor-text">@kinssxdeica</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* KINSS X DEICA text */}
        <div className="absolute top-20 left-10">
          <h1 className="text-[8rem] md:text-[15rem] leading-none font-bold" style={{
            color: 'transparent',
            WebkitTextStroke: '3px #0066FF',
            fontFamily: 'Arial Black, Helvetica, Impact, "Helvetica Neue", sans-serif'
          }}>
            KINSS
          </h1>
          <h1 className="text-[8rem] md:text-[15rem] leading-none font-bold md:ml-[5rem] ml-[2rem]" style={{
            color: 'transparent',
            WebkitTextStroke: '3px #0066FF',
            fontFamily: 'Arial Black, Helvetica, Impact, "Helvetica Neue", sans-serif'
          }}>
            X
          </h1>
          <h1 className="text-[8rem] md:text-[15rem] leading-none font-bold" style={{
            color: 'transparent',
            WebkitTextStroke: '3px #0066FF',
            fontFamily: 'Arial Black, Helvetica, Impact, "Helvetica Neue", sans-serif'
          }}>
            DEICA
          </h1>
        </div>

        {/* Logo RUTA CASE SENSITIVE */}
        <div className="absolute right-[25%] md:top-1/2 top-[65%] -translate-y-1/2">
          <div className="w-[300px] h-[300px] bg-brutal-blue md:flex items-center justify-center hidden">
            <div className="w-[250px] h-[250px] relative">
              <Image
                src="/mapache.png" 
                alt="KINSS X DEICA Mapache"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Mobile version without blue square */}
          <div className="w-[250px] h-[250px] relative md:hidden mobile-raccoon-animation">
            <Image
              src="/mapacheazul.png" 
              alt="KINSS X DEICA Mapache"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Vertical Bars */}
      <div className="fixed md:right-0 right-0 md:top-0 bottom-0 w-full md:w-auto h-auto md:h-screen">
        <div className="flex flex-col md:flex-row h-auto md:h-full">
          {/* Merch Bar */}
          <div className={`flex flex-col md:flex-row transition-all duration-500 ease-in-out 
            ${isMerchOpen 
              ? 'h-[600px] md:h-screen md:w-[600px]' 
              : 'h-20 md:h-screen md:w-20'
            } 
            bg-brutal-blue relative`}
          >
            <button 
              onClick={handleMerchClick}
              className="w-full md:w-20 h-20 md:h-full flex items-center justify-center hover:bg-opacity-90 transition-colors group"
            >
              <span className="md:transform md:-rotate-90 whitespace-nowrap text-brutal-pink uppercase tracking-[0.3em] text-xl font-mono group-hover:scale-105 transition-transform inline-block">
                merchandising {isMerchOpen ? '×' : '+'}
              </span>
            </button>
            
            {/* Merch Content */}
            <div className={`absolute md:left-20 md:top-0 left-0 top-20 w-full md:w-[580px] h-[calc(100%-5rem)] md:h-full p-10 overflow-y-auto transition-opacity duration-300 merch-scroll
              ${isMerchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <h2 className="text-brutal-pink text-4xl font-bold mb-10">MERCH</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Merchandise items commented for future use */}
                <div className="col-span-2 flex items-center justify-center">
                  <p className="text-brutal-pink text-3xl font-mono tracking-wider">próximamente...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Bar */}
          <div className={`flex flex-col md:flex-row transition-all duration-500 ease-in-out 
            ${isGalleryOpen 
              ? 'h-[600px] md:h-screen md:w-[600px]' 
              : 'h-20 md:h-screen md:w-20'
            } 
            bg-brutal-pink border-t-2 md:border-t-0 md:border-l-2 border-brutal-blue relative z-10`}
          >
            <button 
              onClick={handleGalleryClick}
              className="w-full md:w-20 h-20 md:h-full flex items-center justify-center hover:bg-opacity-90 transition-colors group"
            >
              <span className="md:transform md:-rotate-90 whitespace-nowrap text-brutal-blue uppercase tracking-[0.3em] text-xl font-mono group-hover:scale-105 transition-transform inline-block">
                galería {isGalleryOpen ? '×' : '+'}
              </span>
            </button>
            
            {/* Gallery Content */}
            <div className={`absolute md:left-20 md:top-0 left-0 top-20 w-full md:w-[580px] h-[calc(100%-5rem)] md:h-full p-10 overflow-y-auto transition-opacity duration-300 gallery-scroll 
              ${isGalleryOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <h2 className="text-brutal-blue text-4xl font-bold mb-10">GALERÍA</h2>
              <div className="grid grid-cols-2 gap-6 pb-10 pe-6">
                {galleryImages.map((image, index) => (
                  <div 
                    key={image} 
                    className="aspect-square relative group cursor-pointer bg-brutal-blue"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image 
                      src={`/images/gallery/${image}`}
                      alt={`Concierto KINSS X DEICA ${index + 1}`}
                      fill
                      sizes="(max-width: 600px) 50vw, 300px"
                      className={`object-cover transition-transform duration-300 group-hover:scale-105
                                ${imagesLoaded[image] ? 'opacity-100' : 'opacity-0'}`}
                      priority={index < 4}
                      loading={index < 4 ? 'eager' : 'lazy'}
                      quality={75}
                      onLoad={() => {
                        setImagesLoaded(prev => ({...prev, [image]: true}));
                      }}
                    />
                    <div className="absolute inset-0 bg-brutal-blue opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={`/images/gallery/${selectedImage}`}
                alt="Concierto KINSS X DEICA"
                fill
                className="object-contain"
                priority
                loading="eager"
                sizes="(max-width: 1200px) 100vw, 1200px"
                quality={90}
                onLoad={() => {
                  setImagesLoaded(prev => ({...prev, [selectedImage]: true}));
                }}
              />
            </div>
            <button 
              className="absolute top-4 right-4 text-brutal-pink text-4xl font-bold hover:scale-110 transition-transform z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 