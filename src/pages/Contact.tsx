import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  React.useEffect(() => {
    emailjs.init('14Yj6L7wWjciA_8X0');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Phone number validation
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        'service_0l2gzs7', 
        'template_hw0cuww',
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }
      );

      console.log('Email sent successfully', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Failed to send email', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h1 className="text-3xl font-bold mb-6 dark:text-gray-200">Contact Us</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              
              {submitStatus === 'success' && (
                <div className="text-green-600 mt-2">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 mt-2">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <span className="dark:text-gray-200">support@ticketrush.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <span className="dark:text-gray-200">+27 (0)11 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-primary" />
                <span className="dark:text-gray-200">123 Event Street, Johannesburg, South Africa</span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Business Hours</h3>
              <p className="dark:text-gray-300">Monday - Friday: 9am - 5pm</p>
              <p className="dark:text-gray-300">Saturday: 10am - 2pm</p>
              <p className="dark:text-gray-300">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
