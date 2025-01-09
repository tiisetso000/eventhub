import { useEffect, useRef } from "react";

const sponsors = [
  {
    id: 1,
    name: "Sponsor 1",
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Sponsor 2",
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Sponsor 3",
    logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Sponsor 4",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop",
  },
  {
    id: 5,
    name: "Sponsor 5",
    logo: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=200&h=100&fit=crop",
  },
  {
    id: 6,
    name: "Sponsor 6",
    logo: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop",
  },
];

const SponsorSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Our Sponsors</h2>
        <div
          ref={scrollRef}
          className="overflow-hidden relative"
        >
          <div className="flex gap-8 items-center whitespace-nowrap hover:pause">
            {/* First set of sponsors */}
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex-shrink-0 w-[200px] h-[100px] transition-transform hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {sponsors.map((sponsor) => (
              <div
                key={`${sponsor.id}-duplicate`}
                className="flex-shrink-0 w-[200px] h-[100px] transition-transform hover:scale-105"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;