import Link from "next/link";
import Image from "next/image";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-cloud py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image
                src="/logo/AC.png"
                alt="Aviation Central logo"
                width={48}
                height={48}
                className="shrink-0 "
              />
              <h3 className="font-sora font-bold text-xl">Aviation Central</h3>
            </Link>
            <p className="text-cloud/80 max-w-sm text-sm">
              Southern Africa's premier airshow community and event guide. Discover the best aviation events, tips for attending, and join our growing community.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://web.facebook.com/AviationSA/" target="_blank" rel="noreferrer" className="text-cloud/80 hover:text-amber transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-sora font-semibold text-amber">Navigation</h4>
            <ul className="space-y-2 text-sm text-cloud/80">
              <li><Link href="/" className="hover:text-amber transition-colors">Home</Link></li>
              <li><Link href="/calendar" className="hover:text-amber transition-colors">Airshow Calendar</Link></li>
              <li><Link href="/attending-an-airshow" className="hover:text-amber transition-colors">Attending Guide</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-sora font-semibold text-amber">Company</h4>
            <ul className="space-y-2 text-sm text-cloud/80">
              <li><Link href="/about" className="hover:text-amber transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cloud/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cloud/60">
          <p>&copy; {new Date().getFullYear()} Aviation Central. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
