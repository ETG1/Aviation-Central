import { Container } from "./container";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Johan van der Merwe",
      role: "Aviation Enthusiast",
      quote: "Aviation Central is my go-to source every year. Their calendar is always up-to-date and the community tips have saved me a lot of hassle at the gates.",
    },
    {
      name: "Sarah Ndlovu",
      role: "First-time Attendee",
      quote: "I used the attending guide for my very first airshow at Waterkloof. It was incredibly helpful to know what to bring and where to park. Brilliant site!",
    },
    {
      name: "Mark O'Connell",
      role: "Aerobatic Pilot",
      quote: "It's great to see a platform that unites the South African aviation community so well. Proud to have our fly-ins listed here.",
    }
  ];

  return (
    <section className="py-16 bg-cloud dark:bg-card border-y border-border/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">Trusted by Thousands</h2>
          <p className="text-muted-foreground font-inter">Hear from our community of aviation lovers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-background rounded-xl p-8 shadow-sm border border-border">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber text-amber" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6">"{test.quote}"</p>
              <div>
                <h4 className="font-sora font-bold text-navy dark:text-cloud">{test.name}</h4>
                <span className="text-sm text-muted-foreground">{test.role}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
