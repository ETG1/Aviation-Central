import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { Button } from "./ui/button";

export function CtaBanner() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta.jpg"
          alt="Vintage plane against sky"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <Container className="relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-sora font-bold text-cloud mb-6 max-w-2xl mx-auto leading-tight">
          Ready for Takeoff? Find your next airshow today.
        </h2>
        <p className="text-lg text-cloud/80 mb-8 max-w-xl mx-auto">
          Join thousands of enthusiasts exploring the best aviation events across Southern Africa.
        </p>
        <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90 font-semibold text-lg px-10 h-14">
          <Link href="/calendar">View Calendar</Link>
        </Button>
      </Container>
    </section>
  );
}
