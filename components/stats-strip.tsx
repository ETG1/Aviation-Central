import { Container } from "./container";

export function StatsStrip() {
  const stats = [
    { value: "15+", label: "Years Running" },
    { value: "100+", label: "Airshows Listed" },
    { value: "9", label: "Provinces Covered" },
    { value: "50k+", label: "Community Members" },
  ];

  return (
    <section className="bg-navy py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-cloud/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center px-4">
              <span className="text-3xl md:text-5xl font-sora font-bold text-amber mb-2">{stat.value}</span>
              <span className="text-cloud/80 text-sm md:text-base font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
