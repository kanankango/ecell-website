"use client"

import React, { useRef, useEffect, useState } from "react";
import Navbar from "@/components/navbar";

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/IMG_20250404_164342663.jpg",
  "/IMG-20250814-WA0007.jpg",
  "/IMG-20250805-WA0013.jpg",
  "/IMG-20250814-WA0004.jpg",
  "/IMG-20250814-WA0005.jpg",
];

const GalleryPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState<number | undefined>(undefined);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalIdx, setModalIdx] = useState<number>(0);

  useEffect(() => {
    if (headingRef.current) {
      setUnderlineWidth(headingRef.current.offsetWidth);
    }
  }, []);

  const openModal = (img: string, idx: number) => {
    setModalImg(img);
    setModalIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (modalIdx - 1 + galleryImages.length) % galleryImages.length;
    setModalIdx(prevIdx);
    setModalImg(galleryImages[prevIdx]);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (modalIdx + 1) % galleryImages.length;
    setModalIdx(nextIdx);
    setModalImg(galleryImages[nextIdx]);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black flex flex-col items-center justify-start py-20">
        <h1
          ref={headingRef}
          className="text-5xl font-bold text-white mb-4"
        >
          Gallery
        </h1>
        <div
          className="h-1 bg-yellow-400 rounded-full mb-6"
          style={{ width: underlineWidth }}
        ></div>
        <p className="text-gray-300 text-lg mb-12 max-w-2xl text-center">
          Explore the memorable moments from the various events organized, where aspiring entrepreneurs, industry experts come together to inspire and learn
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 w-full max-w-6xl">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center"
              onClick={() => openModal(src, idx)}
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-[420px] h-[320px] object-cover rounded-xl border-4 border-black shadow-lg shadow-white/40 transition-transform duration-300 cursor-pointer hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal for full image with navigation */}
        {modalOpen && modalImg && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            {/* Backward Button */}
            <button
              onClick={showPrev}
              className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white text-3xl font-bold transition"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <img
              src={modalImg}
              alt="Full"
              className="max-h-[90vh] max-w-[90vw] rounded-xl border-4 border-yellow-400 shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            {/* Forward Button */}
            <button
              onClick={showNext}
              className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white text-3xl font-bold transition"
              aria-label="Next"
            >
              &#8594;
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default GalleryPage;
