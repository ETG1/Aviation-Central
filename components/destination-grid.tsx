import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { events } from "@/lib/data/events";
import { ArrowRight } from "lucide-react";

export function DestinationGrid() {
  const topEvents = events.slice(0, 4); // Take 4 for the grid

  return (
    <section className="py-16 bg-cloud dark:bg-card">
      <Container>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">Top Airshows in Southern Africa</h2>
            <p className="text-muted-foreground font-inter">Explore the most anticipated aviation events of the year.</p>
          </div>
          <Link href="/calendar" className="hidden md:flex items-center gap-2 text-sky font-semibold hover:text-sky/80 transition-colors">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topEvents.map((event) => (
            <Link key={event.slug} href={`/calendar/${event.slug}`} className="group relative rounded-xl overflow-hidden aspect-4/5 shadow-md hover:shadow-xl transition-all duration-300 block">
              <Image
                src={event.heroImage}
                alt={event.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-sora font-bold text-cloud mb-1">{event.name}</h3>
                <p className="text-cloud/80 text-sm font-medium">{event.province}</p>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <Link href="/calendar" className="flex items-center justify-center gap-2 text-sky font-semibold hover:text-sky/80 transition-colors">
            See all events <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
