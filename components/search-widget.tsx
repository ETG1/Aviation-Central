"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/motion";
import { Container } from "./container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchWidget() {
  const router = useRouter();
  const [province, setProvince] = useState("all");
  const [month, setMonth] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (province && province !== "all") params.set("province", province);
    if (month) params.set("month", month);
    if (query) params.set("q", query);
    
    router.push(`/calendar?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-20 px-4">
      <Container>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="bg-card text-card-foreground rounded-xl shadow-xl p-6 border border-border"
        >
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 items-end">
            <div className="w-full md:flex-1 space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky" /> Province
              </label>
              <Select value={province} onValueChange={setProvince}>
                <SelectTrigger>
                  <SelectValue placeholder="All Provinces" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Provinces</SelectItem>
                  <SelectItem value="gauteng">Gauteng</SelectItem>
                  <SelectItem value="western-cape">Western Cape</SelectItem>
                  <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                  <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                  <SelectItem value="free-state">Free State</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:flex-1 space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-sky" /> Month
              </label>
              <Input 
                type="month" 
                className="w-full"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </div>

            <div className="w-full md:flex-1 space-y-2">
              <label className="text-sm font-semibold flex items-center gap-2">
                <Search className="w-4 h-4 text-sky" /> Keyword
              </label>
              <Input 
                placeholder="Airshow name..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full md:w-auto bg-amber text-navy hover:bg-amber/90 font-semibold px-8 h-10">
              Find Events
            </Button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
