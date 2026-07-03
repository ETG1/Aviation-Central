import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { events } from "@/lib/data/events";
import { Button } from "./ui/button";
import { CalendarIcon, MapPinIcon } from "lucide-react";
import { format } from "date-fns";

export function FeaturedAirshows() {
  const featured = events.filter((e) => e.featured).slice(0, 3);

  return (
    <section className="py-16 bg-cloud dark:bg-card border-t border-border/50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">Featured Airshows</h2>
          <p className="text-muted-foreground font-inter">Don't miss these highlight events across the country.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((event) => (
            <div key={event.slug} className="bg-background rounded-xl overflow-hidden shadow-md flex flex-col border border-border">
              <div className="relative h-56 w-full">
                <Image
                  src={event.heroImage}
                  alt={event.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-sora font-bold text-navy dark:text-cloud mb-3 line-clamp-2">{event.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 text-sky" />
                    <span>
                      {format(new Date(event.startDate), "MMM d, yyyy")}
                      {event.endDate && ` - ${format(new Date(event.endDate), "MMM d, yyyy")}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPinIcon className="w-4 h-4 text-sky" />
                    <span>{event.location}, {event.province}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {event.summary}
                </p>

                <Button asChild variant="outline" className="w-full border-sky text-sky hover:bg-sky hover:text-white">
                  <Link href={`/calendar/${event.slug}`}>View Details</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
