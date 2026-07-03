import { Container } from "./container";
import Link from "next/link";
import { Plane, Zap, Camera, Sun, Building2 } from "lucide-react";

export function CategoryRow() {
  const categories = [
    { name: "Airshows", icon: <Plane className="w-8 h-8 mb-3 text-sky" />, query: "airshow" },
    { name: "Fly-Ins", icon: <Sun className="w-8 h-8 mb-3 text-sky" />, query: "flyin" },
    { name: "Static Displays", icon: <Camera className="w-8 h-8 mb-3 text-sky" />, query: "static" },
    { name: "Aerobatics", icon: <Zap className="w-8 h-8 mb-3 text-sky" />, query: "aerobatics" },
    { name: "Museum Events", icon: <Building2 className="w-8 h-8 mb-3 text-sky" />, query: "museum" },
  ];

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">Browse By Experience</h2>
          <p className="text-muted-foreground font-inter">Find the perfect event for your aviation interests.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((cat, idx) => (
            <Link 
              href={`/calendar?type=${cat.query}`} 
              key={idx}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-shadow hover:border-sky/50 w-36 md:w-44 text-center"
            >
              {cat.icon}
              <span className="font-semibold text-sm md:text-base">{cat.name}</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
