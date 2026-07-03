"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6 text-navy dark:text-cloud" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left font-sora font-bold text-navy dark:text-cloud">
            Navigation
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-sky transition-colors"
          >
            Home
          </Link>
          <Link
            href="/calendar"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-sky transition-colors"
          >
            Calendar
          </Link>
          <Link
            href="/attending-an-airshow"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-sky transition-colors"
          >
            Attending Guide
          </Link>
          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-sky transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-lg font-medium hover:text-sky transition-colors"
          >
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
