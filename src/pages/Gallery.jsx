import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import NavBar from "../components/NavBar";

const categories = ["All", "Food", "Inside Office", "Fun", "Tourism"];

const images = [
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Inside Office" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Tourism" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Tourism" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Fun" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Food" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Fun" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Food" },
  { src: "https://cdn.pixabay.com/photo/2017/12/31/09/21/furniture-3051843_1280.jpg", category: "Tourism" },
  { src: "https://cdn.pixabay.com/photo/2021/12/16/17/24/man-6874910_1280.jpg", category: "Inside Office" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));

  return (
    <>
    <NavBar transparent />
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Image Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded font-medium text-white transition-all duration-300 ${
              activeCategory === cat
                ? "bg-red-500 scale-105"
                : "bg-red-400 hover:bg-red-500 hover:scale-105"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            onClick={() => openModal(i)}
            className="cursor-pointer w-full h-60 object-cover shadow-lg hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-fadeIn">
          <div className="relative mt-10 max-w-[90%] max-h-[85%] flex items-center justify-center">
            {/* Close icon */}
            <button
              className="absolute top-4 right-4 text-red-500 text-3xl z-50 hover:scale-110 transition-transform duration-200"
              onClick={closeModal}
            >
              <FaTimes />
            </button>

            <button
              className="absolute left-2 sm:left-5 text-red-600 text-4xl z-50 hover:scale-110 transition-transform duration-200"
              onClick={showPrev}
            >
              <FaChevronLeft />
            </button>

            <img
              src={filteredImages[currentIndex].src}
              alt=""
              className="rounded-lg max-h-[85vh] object-contain shadow-2xl transition-transform duration-300 scale-100 animate-zoomIn"
            />

            <button
              className="absolute right-2 sm:right-5 text-red-600 text-4xl z-50 hover:scale-110 transition-transform duration-200"
              onClick={showNext}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
    
  );
}
