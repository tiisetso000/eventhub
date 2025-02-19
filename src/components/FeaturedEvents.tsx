import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSavedEvents } from "@/contexts/SavedEventsContext";
import { Event } from "@/data/mockEvents";

const featuredEvents = [
  {
    id: "gees-fest-apt-2025",
    title: "Gees Fest",
    description: "Wassup Good People The Boygees Clothing Proudly Presents The Official Gees Fest (Mabhanzin's Birthday Celebration) Hosted By Malume Spura & Umfana WeHubbly .SAVE THE DATE (05 APRIL) We Promise Y'all Good Vibes With Perfect Blend Of Iconic Culture,Music and Streetwear.🎂🥳🥳🥳🥳🥳🥳🥳 More Details Coming Soon",
    date: "April 05, 2025",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923059/WhatsApp_Image_2025-02-18_at_23.53.36_b6d14b52_ltrag4.jpg",
  },
  {
    id: "brandros-mrh-2025",
    title: "Brandros",
    description: "Ladies and gents these are the pilots for the all black everything, the connoisseurs of the days groove! The ones to take centre stage and give us memorable moments to last us a lifetime. Let's rock!!!!🔥",
    date: "March 29, 2025",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923059/WhatsApp_Image_2025-02-18_at_23.53.36_21e69d31_dci6td.jpg",
  },
  {
    id: "two-man-may-2025",
    title: "Two Man",
    description: "🚨🚨🚨 ON 24 MAY FIASCO PRESENTS TWO MAN SHOW 🚨🚨🚨",
    date: "May 24, 2025",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1739923058/WhatsApp_Image_2025-02-18_at_23.53.36_39259c04_ffczd6.jpg",
  }
];

const FeaturedEvents = () => {
  const { saveEvent } = useSavedEvents();

  const handleSaveEvent = (event: Partial<Event>) => {
    const fullEvent: Event = {
      id: event.id || "",
      title: event.title || "",
      description: event.description || "",
      date: event.date || "",
      location: "TBD",
      image: event.image || "",
      price: 0,
      startTime: "TBD",
      endTime: "TBD",
      lineup: [],
      socialMedia: {},
      ticketTypes: event.ticketTypes || []
    };
    saveEvent(fullEvent);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-black font-bold text-center mb-12">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-blue-500 font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex gap-2">
                  <Link to={`/events/${event.id}`} className="flex-1">
                    <Button className="w-full">View Event</Button>
                  </Link>
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={() => handleSaveEvent(event)}
                  >
                    Save Event
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
