import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-lg">
          <CheckCircle2 className="mx-auto h-24 w-24 text-green-500 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your tickets have been confirmed.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/events">
              <Button variant="outline">Browse More Events</Button>
            </Link>
            <Link to="/saved-events">
              <Button>View My Tickets</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Success;
