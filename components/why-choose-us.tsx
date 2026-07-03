import Image from "next/image";
import { Container } from "./container";
import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    "Southern Africa's most comprehensive airshow calendar.",
    "First-timer's guide to ensure you have the best experience.",
    "Community-sourced photography and event reviews.",
    "Stay updated with the latest event changes and ticketing info."
  ];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-navy dark:text-cloud mb-6">
              Why Aviation Central?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We make it easy and memorable to discover, plan, and attend the best aviation events across Southern Africa. Whether you're a seasoned aviator or a first-time attendee, we have everything you need.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-sky shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1579738101416-56be2e8bd5f9?q=80&w=2000&auto=format&fit=crop"
              alt="Airshow crowds looking at the sky"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
