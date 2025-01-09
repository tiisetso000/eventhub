import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Plus, Minus, Trash2, ExternalLink } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import UserInfoForm from "@/components/cart/UserInfoForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const [showUserForm, setShowUserForm] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const total = items.reduce((sum, item) => sum + item.ticketPrice * item.quantity, 0);

  const simulatePayment = () => {
    toast({
      title: "Processing payment",
      description: "Please wait while we process your payment",
    });

    // Simulate payment processing delay
    setTimeout(() => {
      setShowPaymentDialog(false);
      setShowUserForm(true);
      toast({
        title: "Payment successful!",
        description: "Please enter your details to receive your tickets",
      });
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
            <Link to="/events">
              <Button>Browse Events</Button>
            </Link>
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
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-gray-600">R{item.ticketPrice}</p>
                        <span className="text-sm text-gray-500">
                          ({item.selectedTicketType})
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 mt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-xl">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <Link to={`/events/${item.id}`}>
                      <Button variant="ghost" className="text-blue-500">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        See More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.title} ({item.selectedTicketType})
                    </span>
                    <span>R{(item.ticketPrice * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>R{total.toFixed(2)}</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6" 
                size="lg" 
                onClick={() => setShowPaymentDialog(true)}
              >
                Buy Tickets
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Simulation</DialogTitle>
            <DialogDescription>
              You are about to simulate a payment of R{total.toFixed(2)} for your tickets.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 text-center">
            <p>Payment gateway functionality has been removed.</p>
            <Button onClick={simulatePayment} className="mt-4">
              Simulate Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <UserInfoForm
        open={showUserForm}
        onOpenChange={setShowUserForm}
        onSuccess={clearCart}
      />
    </div>
  );
};

export default Cart;