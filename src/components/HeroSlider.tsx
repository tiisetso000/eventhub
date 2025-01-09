import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926050/sgidi_love_zjvtfa.jpg",
    title: "Summer Music Festival",
    date: "July 15-17, 2024",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926130/pensdown_bttpcl.jpg",
    title: "Tech Conference 2024",
    date: "August 5-7, 2024",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926170/event1_ywebwu.jpg",
    title: "Food & Wine Expo",
    date: "September 1-3, 2024",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
