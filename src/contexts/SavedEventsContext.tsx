import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Event } from '@/data/mockEvents';
import { toast } from '@/hooks/use-toast';

interface SavedEventsContextType {
  savedEvents: Event[];
  saveEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
}

const SAVED_EVENTS_STORAGE_KEY = 'savedEvents';

const SavedEventsContext = createContext<SavedEventsContextType | undefined>(undefined);

export const SavedEventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedEvents, setSavedEvents] = useState<Event[]>(() => {
    const saved = localStorage.getItem(SAVED_EVENTS_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(SAVED_EVENTS_STORAGE_KEY, JSON.stringify(savedEvents));
  }, [savedEvents]);

  const saveEvent = useCallback((event: Event) => {
    setSavedEvents(current => {
      if (current.some(e => e.id === event.id)) {
        toast({
          description: "Event already saved",
        });
        return current;
      }
      toast({
        description: "Event saved successfully",
      });
      return [...current, event];
    });
  }, []);

  const removeEvent = useCallback((eventId: string) => {
    setSavedEvents(current => current.filter(event => event.id !== eventId));
    toast({
      description: "Event removed from saved events",
    });
  }, []);

  return (
    <SavedEventsContext.Provider value={{ savedEvents, saveEvent, removeEvent }}>
      {children}
    </SavedEventsContext.Provider>
  );
};

export const useSavedEvents = () => {
  const context = useContext(SavedEventsContext);
  if (!context) {
    throw new Error('useSavedEvents must be used within a SavedEventsProvider');
  }
  return context;
};