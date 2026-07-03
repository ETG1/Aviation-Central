import Image from "next/image";
import Link from "next/link";
import { Container } from "./container";
import { ArrowRight } from "lucide-react";

export function ArticlesRow() {
  const articles = [
    {
      title: "The First-Timer's Guide to Airshows",
      image: "https://images.unsplash.com/photo-1544257121-827fc79ec2f8?q=80&w=2000&auto=format&fit=crop",
      link: "/attending-an-airshow",
    },
    {
      title: "What to Bring in Your Gear Bag",
      image: "https://images.unsplash.com/photo-1522204538344-922f76ecc041?q=80&w=2000&auto=format&fit=crop",
      link: "/attending-an-airshow",
    },
    {
      title: "Photography Tips for High-Speed Jets",
      image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&w=2000&auto=format&fit=crop",
      link: "/attending-an-airshow",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <Container>
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-sora font-bold text-navy dark:text-cloud mb-2">From the Runway</h2>
            <p className="text-muted-foreground font-inter">Guides and inspiration for your next aviation adventure.</p>
          </div>
          <Link href="/attending-an-airshow" className="hidden md:flex items-center gap-2 text-sky font-semibold hover:text-sky/80 transition-colors">
            Read all guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <Link key={idx} href={article.link} className="group block">
              <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4 shadow-sm">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-sora font-bold text-lg text-navy dark:text-cloud group-hover:text-sky transition-colors">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
