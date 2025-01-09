import { useEffect, useState } from "react";
import { getAllUsers } from "@/services/userService";
import { UserInfo } from "@/types/user";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const Admin = () => {
  const [users, setUsers] = useState<UserInfo[]>([]);

  useEffect(() => {
    const loadUsers = () => {
      const allUsers = getAllUsers();
      setUsers(allUsers);
    };

    loadUsers();
    // Refresh data every 30 seconds
    const interval = setInterval(loadUsers, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">User Information</h1>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Purchase Date</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Ticket Type</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    {new Date(user.purchaseDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {user.ticketDetails ? (
                      user.ticketDetails.eventTitle
                    ) : (
                      <Badge variant="secondary">No ticket</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.ticketDetails?.ticketType || (
                      <Badge variant="secondary">-</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.ticketDetails?.quantity || (
                      <Badge variant="secondary">-</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {user.ticketDetails ? (
                      `$${user.ticketDetails.totalPrice.toFixed(2)}`
                    ) : (
                      <Badge variant="secondary">-</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;