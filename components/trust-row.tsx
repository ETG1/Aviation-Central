import { Container } from "./container";
import { BookOpen, Users, CalendarCheck, Map } from "lucide-react";

export function TrustRow() {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-amber" />,
      title: "Free Event Guide",
    },
    {
      icon: <Users className="w-6 h-6 text-amber" />,
      title: "Community Driven",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-amber" />,
      title: "Verified Dates",
    },
    {
      icon: <Map className="w-6 h-6 text-amber" />,
      title: "Province-wide Coverage",
    },
  ];

  return (
    <section className="py-12 bg-background">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-sm md:text-base text-navy dark:text-cloud">{feature.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
