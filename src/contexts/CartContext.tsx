import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Event } from '@/data/mockEvents';
import { toast } from '@/hooks/use-toast';

export type CartItem = Event & {
  quantity: number;
  selectedTicketType: string;
  ticketPrice: number;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (event: Event, quantity: number, selectedTicketType: string, ticketPrice: number) => void;
  removeFromCart: (eventId: string) => void;
  updateQuantity: (eventId: string, quantity: number) => void;
  clearCart: () => void;
}

const CART_STORAGE_KEY = 'eventTicketsCart';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((event: Event, quantity: number, selectedTicketType: string, ticketPrice: number) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => 
        item.id === event.id && item.selectedTicketType === selectedTicketType
      );
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === event.id && item.selectedTicketType === selectedTicketType
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...currentItems, { ...event, quantity, selectedTicketType, ticketPrice }];
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} ${selectedTicketType} ticket(s) for ${event.title} added to cart`,
    });
  }, []);

  const removeFromCart = useCallback((eventId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== eventId));
    toast({
      title: "Removed from cart",
      description: "Item removed from cart",
    });
  }, []);

  const updateQuantity = useCallback((eventId: string, quantity: number) => {
    if (quantity < 1) return;
    
    setItems(currentItems =>
      currentItems.map(item =>
        item.id === eventId ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  }, []);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};