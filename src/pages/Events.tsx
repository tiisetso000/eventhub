import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarDays, MapPin, Search, Bookmark } from "lucide-react";
import { mockEvents } from "@/data/mockEvents";
import { useState, useEffect } from "react";
import { useSavedEvents } from "@/contexts/SavedEventsContext";

const Events = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { saveEvent } = useSavedEvents();

  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      return mockEvents;
    },
  });

  const filteredEvents = events?.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.lineup.some((artist) => artist.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Debounce search input to prevent rapid re-renders
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // 300ms delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-full">
            Loading...
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-8">
          <h1 className="text-4xl font-bold">Upcoming Events</h1>
          
          <div className="relative w-full max-w-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search events by name, description, location, or artist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full bg-white dark:bg-gray-800 dark:text-gray-200 dark:placeholder-gray-400"
              />
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[400px]">
            {filteredEvents?.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2 dark:text-gray-200">{event.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <Link to={`/events/${event.id}`}>
                        <Button>View Event</Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => saveEvent(event)}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      {event.price === 0 && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          Free Event
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredEvents?.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
              No events found matching your search criteria.
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;