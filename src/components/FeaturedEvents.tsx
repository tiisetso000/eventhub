import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSavedEvents } from "@/contexts/SavedEventsContext";
import { Event } from "@/data/mockEvents";

const featuredEvents = [
  {
    id: "sgidi-fridays-nov-2024",
    title: "Sigidi Pretty Girls Friday",
    date: "Nov 29, 2024",
    description: "We bring Sigidi Pretty Girls Friday",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926050/sgidi_love_zjvtfa.jpg",
    ticketTypes: [
      {
        name: "Early Bird",
        price: 79.99,
        description: "Limited early access tickets at a special price",
        available: 100
      },
      {
        name: "General Admission",
        price: 99.99,
        description: "Standard festival access",
        available: 500
      },
      {
        name: "VIP",
        price: 199.99,
        description: "VIP area access with complimentary drinks",
        available: 50
      }
    ]
  },
  {
    id: "pens-down-nov-2024",
    title: "Pens Down",
    date: "Nov 30, 2024",
    description: "We bring pens down chilliars",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926130/pensdown_bttpcl.jpg",
    ticketTypes: [
      {
        name: "Early Bird",
        price: 249.99,
        description: "Limited early registration discount",
        available: 50
      },
      {
        name: "Standard",
        price: 299.99,
        description: "Full conference access",
        available: 200
      },
      {
        name: "Premium",
        price: 499.99,
        description: "Includes workshop access and networking dinner",
        available: 75
      }
    ]
  },
  {
    id: "amapiano-world-sept-2024",
    title: "Amapiano To The World",
    date: "September 30, 2024",
    description: "We bring the best Amapiano Event",
    image: "https://res.cloudinary.com/ddhdpvywz/image/upload/v1732926170/event1_ywebwu.jpg",
    ticketTypes: [
      {
        name: "General Admission",
        price: 149.99,
        description: "Access to all food and wine tastings",
        available: 300
      },
      {
        name: "VIP Experience",
        price: 299.99,
        description: "Includes chef meet & greet and exclusive tastings",
        available: 100
      },
      {
        name: "Master Class",
        price: 399.99,
        description: "All VIP benefits plus cooking masterclass",
        available: 30
      }
    ]
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
