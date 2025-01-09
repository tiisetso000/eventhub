import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { saveUserInfo } from "@/services/userService";

const userSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

interface UserInfoFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

const UserInfoForm = ({ open, onOpenChange, onSuccess }: UserInfoFormProps) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      userSchema.parse(userInfo);
      saveUserInfo(userInfo);
      
      toast({
        title: "Tickets sent!",
        description: "Check your email for your tickets",
      });
      
      onSuccess();
      onOpenChange(false);
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid information",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Your Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={userInfo.phone}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, phone: e.target.value }))
              }
              placeholder="123-456-7890"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Tickets
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoForm;