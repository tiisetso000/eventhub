import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import FeaturedEvents from "@/components/FeaturedEvents";
import SponsorSection from "@/components/SponsorSection";
import { mockEvents } from "@/data/mockEvents";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Botpress Chatbot Scripts
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2024/12/03/00/20241203000706-LYZAC87H.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup
    return () => {
      if (script1.parentNode) script1.parentNode.removeChild(script1);
      if (script2.parentNode) script2.parentNode.removeChild(script2);
    };
  }, []);

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.lineup.some((artist) => artist.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowResults(value.trim().length > 0);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const searchContainer = document.getElementById('search-container');
      if (searchContainer && !searchContainer.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="relative">
          <HeroSlider />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
                WeOn Amazing Events!!
              </h1>
              <div id="search-container" className="relative">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Search events by name, location, or artist..."
                    value={searchQuery}
                    onChange={handleInputChange}
                    className="flex-grow bg-white dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400"
                  />
                  <Button 
                    type="submit" 
                    className="bg-accent hover:bg-accent/90 text-gray-900 dark:text-gray-200"
                  >
                    Search
                  </Button>
                </form>
                
                {showResults && (
                  <div className="absolute w-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                    {filteredEvents.length > 0 ? (
                      <div className="p-2">
                        {filteredEvents.map((event) => (
                          <Link
                            key={event.id}
                            to={`/events/${event.id}`}
                            className="block hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-3"
                            onClick={() => setShowResults(false)}
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-gray-200">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {new Date(event.date).toLocaleDateString()}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  R{event.price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                        No events found matching your search
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white dark:bg-gray-900">
          <FeaturedEvents />
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800">
          <SponsorSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
