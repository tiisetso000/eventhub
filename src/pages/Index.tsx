import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroSlider from "@/components/HeroSlider";
import FeaturedEvents from "@/components/FeaturedEvents";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SponsorSection from "@/components/SponsorSection";
import { mockEvents } from "@/data/mockEvents";
import { Link } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
                Discover Amazing Events
              </h1>
              <div className="relative">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Search events by name or location..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="flex-grow bg-white"
                  />
                  <Button type="submit" className="bg-accent hover:bg-accent/90">
                    Search
                  </Button>
                </form>
                
                {showResults && searchQuery && (
                  <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                    {filteredEvents.length > 0 ? (
                      <div className="p-2">
                        {filteredEvents.map((event) => (
                          <Link
                            key={event.id}
                            to={`/events/${event.id}`}
                            className="block hover:bg-gray-100 rounded-lg p-3"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                  {new Date(event.date).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-600">
                                  ${event.price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No events found matching your search
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <FeaturedEvents />
        <SponsorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;