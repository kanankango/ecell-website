"use client"

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, X } from "lucide-react";
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
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-start py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="h-8 w-8 text-golden-300 mr-4 animate-pulse" />
            <h1
              ref={headingRef}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-golden-300 to-golden-200 bg-clip-text text-transparent glow-golden-text"
            >
              Gallery
            </h1>
            <Star className="h-8 w-8 text-golden-300 ml-4 animate-pulse" />
          </div>
          <div
            className="h-1 bg-gradient-to-r from-golden-300 to-golden-200 rounded-full mb-6 glow-golden"
            style={{ width: underlineWidth }}
          ></div>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl text-center">
            Explore the memorable moments from the various events organized, where aspiring entrepreneurs, industry experts come together to inspire and learn
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-6xl">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center cursor-pointer group"
              onClick={() => openModal(src, idx)}
            >
              <div className="relative w-full max-w-[420px]">
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-[320px] object-cover rounded-xl border-2 border-golden-300 shadow-2xl shadow-golden-300/20 transition-all duration-300 group-hover:shadow-golden-300/40 glow-golden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                  <p className="text-white font-semibold text-center px-4">Gallery {idx + 1}</p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-golden-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Star className="h-4 w-4 text-black" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Modal for full image with navigation */}
        {modalOpen && modalImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-golden-300 hover:bg-golden-200 text-black rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Backward Button */}
            <button
              onClick={showPrev}
              className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 bg-golden-300 hover:bg-golden-200 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={modalImg}
              alt="Full"
              className="max-h-[90vh] max-w-[90vw] rounded-xl border-4 border-golden-300 shadow-2xl glow-golden"
              onClick={e => e.stopPropagation()}
            />

            {/* Forward Button */}
            <button
              onClick={showNext}
              className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 bg-golden-300 hover:bg-golden-200 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full border border-golden-300">
              {modalIdx + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </main>
    </>
  );
};

export default GalleryPage;

