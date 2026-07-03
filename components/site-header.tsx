import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-sora font-bold text-xl tracking-tight text-navy dark:text-cloud">
            <Image
              src="/logo/AC.png"
              alt="Aviation Central logo"
              width={42}
              height={42}
              className="shrink-0"
            />
            Aviation Central
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-sky transition-colors">
            Home
          </Link>
          <Link href="/calendar" className="text-sm font-medium hover:text-sky transition-colors">
            Calendar
          </Link>
          <Link href="/attending-an-airshow" className="text-sm font-medium hover:text-sky transition-colors">
            Attending Guide
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-sky transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-sky transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex bg-amber text-navy hover:bg-amber/90 font-semibold">
            <Link href="/calendar">Find an Airshow</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
