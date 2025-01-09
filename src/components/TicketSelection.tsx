import { TicketType } from "@/data/mockEvents";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface TicketSelectionProps {
  tickets: TicketType[];
  selectedTicketType: string;
  onTicketSelect: (value: string) => void;
}

const TicketSelection = ({
  tickets,
  selectedTicketType,
  onTicketSelect,
}: TicketSelectionProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Select Ticket Type</h2>
      <RadioGroup
        value={selectedTicketType}
        onValueChange={onTicketSelect}
        className="space-y-4"
      >
        {tickets.map((ticket) => (
          <div
            key={ticket.name}
            className={`flex items-start space-x-3 p-4 border rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 ${
              ticket.available === 0 ? "opacity-50" : ""
            }`}
          >
            <RadioGroupItem
              value={ticket.name}
              id={ticket.name}
              className="mt-1"
              disabled={ticket.available === 0}
            />
            <Label 
              htmlFor={ticket.name} 
              className="flex-grow cursor-pointer"
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-blue-500 dark:text-blue-400">{ticket.name}</span>
                  {ticket.available === 0 ? (
                    <Badge variant="destructive">Sold Out</Badge>
                  ) : (
                    <Badge variant="secondary">
                      {ticket.available} tickets left
                    </Badge>
                  )}
                </div>
                <span className="text-lg font-bold text-blue-500 dark:text-blue-400">R{ticket.price}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{ticket.description}</p>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default TicketSelection;
