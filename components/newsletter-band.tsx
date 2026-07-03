"use client";

import { Container } from "./container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

export function NewsletterBand() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Stub submit handler
    alert("Newsletter signup coming soon!");
  };

  return (
    <section className="bg-sky/10 dark:bg-sky/5 py-16">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-sora font-bold text-navy dark:text-cloud mb-4">
            Get Airshow Alerts in Your Inbox
          </h2>
          <p className="text-muted-foreground mb-8">
            Don't miss an event. Sign up to receive the latest updates, calendar additions, and exclusive community news.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email address..." 
              required
              className="flex-1 h-12 bg-background"
            />
            <Button type="submit" className="h-12 bg-amber text-navy hover:bg-amber/90 font-semibold px-6">
              Subscribe <Send className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
