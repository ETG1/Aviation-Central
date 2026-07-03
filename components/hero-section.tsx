"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Container } from "./container";
import { Button } from "./ui/button";
import { fadeInUp } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-navy overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop"
          alt="Aerobatic aircraft in flight"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/80 to-transparent" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-3xl"
        >
          <h1 className="font-sora font-bold text-4xl md:text-6xl text-cloud leading-tight mb-6">
            Discover Southern Africa's <br />
            <span className="text-amber">Airshows</span>
          </h1>
          <p className="text-lg md:text-xl text-cloud/90 mb-8 max-w-2xl font-inter">
            Your definitive guide to aviation events, fly-ins, and breathtaking aerial displays across the region.
          </p>
          <Button asChild size="lg" className="bg-amber text-navy hover:bg-amber/90 font-semibold text-lg px-8">
            <Link href="/calendar">View Full Calendar</Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
