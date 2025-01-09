import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockEvents } from "@/data/mockEvents";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TicketSelection from "@/components/TicketSelection";
import { Users, Facebook, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState("");

  const event = mockEvents.find((event) => event.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

    const handleAddToCart = () => {
      // If no ticket types, this is a free event
      if (event.ticketTypes.length === 0) {
        toast({
          title: "This is a free event",
          description: "No ticket purchase required",
          variant: "default",
        });
        return;
      }
  
      if (!selectedTicketType) {
        toast({
          title: "Please select a ticket type",
          variant: "destructive",
        });
        return;
      }
  
      const selectedTicket = event.ticketTypes.find(
        (ticket) => ticket.name === selectedTicketType
      );
  
      if (!selectedTicket) {
        toast({
          title: "Invalid ticket type",
          variant: "destructive",
        });
        return;
      }
  
      addToCart(event, quantity, selectedTicketType, selectedTicket.price);
      navigate("/cart");
    };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[400px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                />
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] max-h-[90vh] p-0">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain"
                />
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Event Details</h2>
                <p>
                  <span className="font-medium">Date:</span> {event.date}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {event.location}
                </p>
                <p>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Line-up
                </h2>
                <div className="grid grid-cols-1 gap-2">
                  {event.lineup.map((artist) => (
                    <div
                      key={artist.name}
                      className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg flex items-center justify-between"
                    >
                      <span className="font-medium dark:text-gray-200">{artist.name}</span>
                      <div className="flex items-center gap-3">
                        {artist.facebook && (
                          <a
                            href={artist.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            <Facebook className="h-5 w-5" />
                          </a>
                        )}
                        {artist.instagram && (
                          <a
                            href={artist.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300"
                          >
                            <Instagram className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {event.ticketTypes.length > 0 ? (
                <>
                  <TicketSelection
                    tickets={event.ticketTypes}
                    selectedTicketType={selectedTicketType}
                    onTicketSelect={setSelectedTicketType}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-gray-200">
                      Quantity:
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border rounded px-3 py-2 w-20 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                    />
                  </div>

                  <Button
                    onClick={handleAddToCart}
                    disabled={!selectedTicketType}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </>
              ) : (
                <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-200 px-4 py-3 rounded relative" role="alert">
                  <strong className="font-bold">Free Entrance</strong>
                  <span className="block sm:inline"> No tickets required for this event.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;