import { Button } from "@/components/ui/button";
import { useSavedEvents } from "@/contexts/SavedEventsContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

const SavedEvents = () => {
  const { savedEvents, removeEvent } = useSavedEvents();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Saved Events</h1>
        {savedEvents.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">
            <p>No saved events yet.</p>
            <Link to="/events">
              <Button className="mt-4">Browse Events</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedEvents.map((event) => (
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
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Link to={`/events/${event.id}`}>
                        <Button>View Event</Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SavedEvents;
