export interface UserInfo {
  id: string;
  name: string;
  email: string;
  phone: string;
  purchaseDate: string;
  ticketDetails?: {
    eventId: string;
    eventTitle: string;
    ticketType: string;
    quantity: number;
    totalPrice: number;
  };
}