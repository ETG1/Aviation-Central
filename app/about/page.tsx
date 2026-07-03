import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, CalendarCheck, Map, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Aviation Central",
  description:
    "Aviation Central is Southern Africa's premier hub for airshow listings, first-timer guides, and the aviation community.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 w-full bg-background min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[360px] md:h-[440px] flex items-end pb-12 overflow-hidden bg-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1583094896792-88ec0c5bc624?q=80&w=2000&auto=format&fit=crop"
            alt="Aviation enthusiasts at an airshow"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/70 to-transparent" />
        </div>
        <Container className="relative z-10">
          <p className="text-amber font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-sora font-bold text-cloud leading-tight max-w-3xl">
            About <span className="text-amber">Aviation Central</span>
          </h1>
          <p className="text-cloud/80 mt-4 text-lg max-w-xl">
            Southern Africa's home for aviation enthusiasts, airshow listings, and the community that keeps it all flying.
          </p>
        </Container>
      </section>

      {/* Brand Story */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-navy dark:text-cloud">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aviation Central was born out of a simple frustration: finding reliable, up-to-date information about airshows in South Africa was surprisingly difficult. Event websites came and went, social media posts got buried, and first-timers had nowhere to turn for practical advice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We set out to fix that. Aviation Central is a community-driven hub that centralises airshow listings, attendance guides, and aviation news for enthusiasts across South Africa and the broader region. Whether you're a seasoned pilot, a photography enthusiast chasing the perfect shot, or a parent bringing your child to their first airshow — this site is for you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We list events from all nine provinces, publish first-timer guides written from real experience, and maintain an active presence on social media where the community shares photos, tips, and memories from every event.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Centralised, verified airshow calendar for Southern Africa",
                  "Practical guides for first-time and seasoned attendees",
                  "Community-sourced photography and event reviews",
                  "Province-wide coverage from Gauteng to the Western Cape",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518133544321-df62c16f2c79?q=80&w=2000&auto=format&fit=crop"
                alt="Biplane in flight at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-navy py-14">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <CalendarCheck className="w-6 h-6 text-amber" />, value: "100+", label: "Events Listed" },
              { icon: <Map className="w-6 h-6 text-amber" />, value: "9", label: "Provinces Covered" },
              { icon: <Users className="w-6 h-6 text-amber" />, value: "50k+", label: "Community Members" },
              { icon: <BookOpen className="w-6 h-6 text-amber" />, value: "15+", label: "Years of Aviation" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cloud/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="text-4xl font-sora font-bold text-cloud">{stat.value}</span>
                <span className="text-cloud/70 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cloud dark:bg-card">
        <Container className="text-center">
          <h2 className="text-2xl md:text-3xl font-sora font-bold text-navy dark:text-cloud mb-4">
            Ready to explore?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Browse the full airshow calendar and find your next aviation adventure across Southern Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90 font-semibold px-8">
              <Link href="/calendar">Find an Airshow</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-sky text-sky hover:bg-sky/10 px-8">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

