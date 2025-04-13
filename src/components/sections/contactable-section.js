"use client";

import { useState } from "react";
import { FloatingElement } from "@/components/ui/floating-element";
import { Card3D } from "@/components/ui/card-3d";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactableSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Handle form submission success
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office",
      value: "123 Innovation Drive, Tech City, TC 12345",
      link: "https://maps.google.com/?q=123+Innovation+Drive+Tech+City",
    },
  ];

  return (
    <section className="py-20 px-4 overflow-hidden relative bg-gradient-to-b from-background to-muted/50">
      <div className="absolute inset-0 -z-10 opacity-30">
        <FloatingElement amplitude={15} period={8} delay={0}>
          <div className="absolute top-20 left-[15%] w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={20} period={12} delay={2}>
          <div className="absolute bottom-40 right-[20%] w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to learn more? We&apos;re here to help. Reach out through any of our channels 
            or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Form - Takes 2/3 width on large screens */}
          <Card3D className="lg:col-span-2 bg-card p-6 rounded-xl shadow-lg">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-medium mb-4">Send us a message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </Card3D>

          {/* Contact Info - Takes 1/3 width on large screens */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <FloatingElement 
                key={index} 
                amplitude={5} 
                period={Math.random() * 3 + 8} 
                delay={index * 0.5}
              >
                <Card3D
                  className="p-6 bg-card hover:bg-card/90 rounded-lg shadow-md transition-colors"
                  tiltFactor={3}
                >
                  <a 
                    href={item.link} 
                    className="flex items-start space-x-4 group"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card3D>
              </FloatingElement>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 