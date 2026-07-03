import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, CalendarIcon, MapPinIcon, Ticket, Share2 } from "lucide-react";
import { events } from "@/lib/data/events";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = events.find((e) => e.slug === resolvedParams.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="flex-1 w-full bg-background min-h-screen pb-20">
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={event.heroImage}
          alt={event.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <Container className="absolute inset-0 flex flex-col justify-end pb-12 z-10">
          <Link href="/calendar" className="inline-flex items-center text-cloud/80 hover:text-white transition-colors mb-6 font-medium text-sm w-fit bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-sm">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Calendar
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-amber text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {event.province}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-cloud leading-tight max-w-4xl">
            {event.name}
          </h1>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-sora font-bold text-navy dark:text-cloud mb-4">About the Event</h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <p className="text-xl text-foreground mb-6 font-medium">{event.summary}</p>
                <p>{event.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold text-navy dark:text-cloud mb-4">Venue & Location</h2>
              <div className="bg-card border border-border rounded-xl p-1 overflow-hidden h-[300px] relative">
                {/* Map Placeholder */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center flex-col text-muted-foreground p-6 text-center">
                  <MapPinIcon className="w-8 h-8 mb-2 opacity-50" />
                  <p>Interactive Map Embed Placeholder</p>
                  <p className="text-sm opacity-70 mt-1">{event.location}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="font-sora font-semibold text-lg text-navy dark:text-cloud border-b pb-4 mb-4">Event Details</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
                    <CalendarIcon className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Date</p>
                    <p className="font-semibold text-foreground">
                      {format(new Date(event.startDate), "MMMM d, yyyy")}
                      {event.endDate && ` - ${format(new Date(event.endDate), "MMMM d, yyyy")}`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-sky/10 flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-5 h-5 text-sky" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="font-semibold text-foreground">{event.location}</p>
                    <p className="text-sm text-muted-foreground mt-0.5">{event.province}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                {event.ticketUrl ? (
                  <Button asChild className="w-full bg-amber text-navy hover:bg-amber/90 font-semibold h-12 text-base">
                    <a href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                      <Ticket className="w-5 h-5 mr-2" /> Get Tickets
                    </a>
                  </Button>
                ) : (
                  <Button disabled className="w-full h-12 text-base bg-muted text-muted-foreground">
                    Tickets Not Available
                  </Button>
                )}
                
                <Button variant="outline" className="w-full h-12 text-base border-sky/30 text-sky hover:bg-sky/10">
                  <Share2 className="w-5 h-5 mr-2" /> Share Event
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

