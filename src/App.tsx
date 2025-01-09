import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/contexts/CartContext";
import { SavedEventsProvider } from "@/contexts/SavedEventsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "@/pages/Home";
import Events from "@/pages/Events";
import EventDetails from "@/pages/EventDetails";
import Cart from "@/pages/Cart";
import Admin from "@/pages/Admin";
import SavedEvents from "@/pages/SavedEvents";
import Contact from "@/pages/Contact";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <SavedEventsProvider>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:id" element={<EventDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/saved-events" element={<SavedEvents />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Toaster />
            </Router>
          </SavedEventsProvider>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;