import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Backpack,
  Car,
  ShieldCheck,
  Baby,
  CheckCircle2,
  CalendarDays,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attending an Airshow | Aviation Central",
  description:
    "Your complete guide to attending an airshow in Southern Africa. What to bring, parking tips, etiquette, and family advice.",
};

const sections = [
  {
    value: "what-to-bring",
    icon: <Backpack className="w-5 h-5 text-amber shrink-0" />,
    title: "What to Bring",
    items: [
      "Sunscreen (SPF 30+) and a hat — airfields offer little shade",
      "Ear protection (earplugs or noise-cancelling muffs), especially for children",
      "Comfortable, closed-toe shoes — grass and tarmac can be rough",
      "Cash for food stalls and merchandise (card machines are not always reliable)",
      "A light jacket — morning temperatures can be cool even in summer",
      "Binoculars for a better view of the flying displays",
      "A portable phone charger / power bank",
      "Water bottle to stay hydrated throughout the day",
      "Camera or phone with plenty of storage for photos",
      "A picnic blanket or fold-up chair if you plan to stay all day",
    ],
  },
  {
    value: "parking-arrival",
    icon: <Car className="w-5 h-5 text-amber shrink-0" />,
    title: "Parking & Arrival",
    items: [
      "Arrive early — gates typically open 1–2 hours before the first display",
      "Follow directional signage from the main road; parking marshals will guide you",
      "Park on the designated airfield-side grass — avoid blocking taxiways or aprons",
      "Rideshare drop-offs are often available at a separate entrance; check the event website",
      "Leave enough buffer for security screening at the main gate (bags may be searched)",
      "Disabled/accessible parking bays are available at most major events — call ahead to confirm",
      "Do not park on verges or in residential streets; this causes friction with local communities",
    ],
  },
  {
    value: "etiquette-safety",
    icon: <ShieldCheck className="w-5 h-5 text-amber shrink-0" />,
    title: "Etiquette & Safety",
    items: [
      "Never cross the display line or step onto the active runway without explicit permission",
      "Follow all instructions from marshals, security staff, and PA announcements immediately",
      "Keep children within arm's reach at all times, especially near static aircraft",
      "Do not touch aircraft without the crew's invitation — oils from hands can damage paintwork",
      "Drones and remote-controlled aircraft are strictly prohibited at all airshows",
      "Photography is welcome but never use flash near cockpits or during low-level displays",
      "Keep dogs on a lead and check the event's pet policy in advance — many events are dog-friendly",
      "Smoking is permitted only in designated areas away from aircraft, fuel trucks, and crowds",
    ],
  },
  {
    value: "family-tips",
    icon: <Baby className="w-5 h-5 text-amber shrink-0" />,
    title: "Family Tips",
    items: [
      "Prepare children for loud jet noise before you go — show them videos at home so it's not a shock",
      "Pack snacks and activities for queuing between displays; excitement fades quickly when hungry",
      "Identify a meeting point at the entrance in case anyone gets separated",
      "Apply sunscreen liberally and re-apply every 90 minutes — reflected heat from tarmac intensifies UV",
      "Most major shows have a kids' area with hands-on activities and simulator rides",
      "Consider attending trade days (if available) for smaller crowds and a more relaxed experience",
      "Pushchairs and prams work on hard aprons but struggle on grass — a carrier/sling can be easier",
    ],
  },
];

export default function AttendingAirshowPage() {
  return (
    <main className="flex-1 w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[360px] md:h-[440px] flex items-end pb-12 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1544257121-827fc79ec2f8?q=80&w=2000&auto=format&fit=crop"
            alt="Crowds watching an airshow"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-transparent" />
        </div>
        <Container className="relative z-10">
          <p className="text-amber font-semibold uppercase tracking-widest text-sm mb-3">
            The Essential Guide
          </p>
          <h1 className="text-4xl md:text-6xl font-sora font-bold text-cloud leading-tight max-w-3xl">
            Attending an <span className="text-amber">Airshow</span>
          </h1>
          <p className="text-cloud/80 mt-4 text-lg max-w-xl">
            Everything you need to know to have an incredible day at any aviation event across Southern Africa.
          </p>
        </Container>
      </section>

      {/* Intro strip */}
      <section className="bg-cloud dark:bg-card border-b border-border py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Sections Covered", value: "4" },
              { label: "Tips Inside", value: "30+" },
              { label: "Minutes to Read", value: "5" },
              { label: "Experience Required", value: "None" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="text-3xl font-sora font-bold text-navy dark:text-cloud">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Accordion Sections */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">
              Your Airshow Checklist
            </h2>
            <p className="text-muted-foreground mb-10">
              Tap any section to expand it. Bookmark this page before you head out.
            </p>

            <Accordion type="multiple" defaultValue={["what-to-bring"]} className="space-y-4">
              {sections.map((section) => (
                <AccordionItem
                  key={section.value}
                  value={section.value}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:border-sky/40 transition-colors"
                >
                  <AccordionTrigger className="py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      {section.icon}
                      <span className="font-sora font-bold text-lg text-navy dark:text-cloud text-left">
                        {section.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                          <span className="text-foreground/80 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative py-20 overflow-hidden bg-navy">
        <Container className="relative z-10 text-center">
          <CalendarDays className="w-12 h-12 text-amber mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-sora font-bold text-cloud mb-4 max-w-2xl mx-auto">
            Ready to find your next event?
          </h2>
          <p className="text-cloud/80 text-lg mb-8 max-w-xl mx-auto">
            Browse the full Southern Africa airshow calendar and plan your perfect aviation day out.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-amber text-navy hover:bg-amber/90 font-semibold text-lg px-10 h-14"
          >
            <Link href="/calendar">View the Calendar</Link>
          </Button>
        </Container>
      </section>
    </main>
  );
}

