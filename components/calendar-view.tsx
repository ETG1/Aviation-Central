"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { CalendarIcon, MapPinIcon, Search, AlertCircle, LayoutGrid, Calendar as CalendarIconSVG } from "lucide-react";
import { useEventFilters } from "@/lib/hooks/useEventFilters";
import { Container } from "@/components/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { AirshowEvent } from "@/lib/types";

function EventCard({ event }: { event: AirshowEvent }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-border transition-all flex flex-col h-full">
      <div className="relative h-48 w-full">
        <Image
          src={event.heroImage}
          alt={event.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-sora font-bold text-navy dark:text-cloud mb-2 line-clamp-2">{event.name}</h3>
        
        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 text-sky shrink-0" />
            <span>
              {format(new Date(event.startDate), "MMM d, yyyy")}
              {event.endDate && ` - ${format(new Date(event.endDate), "MMM d, yyyy")}`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPinIcon className="w-4 h-4 text-sky shrink-0" />
            <span className="line-clamp-1">{event.location}, {event.province}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1">
          {event.summary}
        </p>

        <Button asChild variant="default" className="w-full bg-navy text-white hover:bg-navy/90 dark:bg-cloud dark:text-navy dark:hover:bg-cloud/90">
          <Link href={`/calendar/${event.slug}`}>Event Details</Link>
        </Button>
      </div>
    </div>
  );
}

function CalendarContent() {
  const { filters, setFilter, filteredEvents } = useEventFilters();
  const [viewMode, setViewMode] = useState<"list" | "calendar">("list");
  
  // For calendar view, mark days that have events
  const eventDates = filteredEvents.map(e => new Date(e.startDate));

  return (
    <Container className="py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-sora font-bold text-navy dark:text-cloud mb-2">Airshow Calendar</h1>
          <p className="text-muted-foreground font-inter">Find and plan your next aviation adventure.</p>
        </div>
        
        <div className="flex items-center bg-muted rounded-lg p-1">
          <Button 
            variant={viewMode === "list" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "bg-background text-foreground shadow-sm" : ""}
          >
            <LayoutGrid className="w-4 h-4 mr-2" /> List
          </Button>
          <Button 
            variant={viewMode === "calendar" ? "default" : "ghost"} 
            size="sm" 
            onClick={() => setViewMode("calendar")}
            className={viewMode === "calendar" ? "bg-background text-foreground shadow-sm" : ""}
          >
            <CalendarIconSVG className="w-4 h-4 mr-2" /> Month
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="font-sora font-semibold text-lg text-navy dark:text-cloud border-b pb-2">Filters</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Search Keyword</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Event name..." 
                  className="pl-9"
                  value={filters.query}
                  onChange={(e) => setFilter("q", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Province</label>
              <Select value={filters.province} onValueChange={(v) => setFilter("province", v)}>
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
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Month</label>
              <Input 
                type="month" 
                value={filters.month}
                onChange={(e) => setFilter("month", e.target.value)}
              />
            </div>
            
            <Button 
              variant="outline" 
              className="w-full mt-4 text-sky border-sky/30 hover:bg-sky/10"
              onClick={() => {
                setFilter("q", "");
                setFilter("province", "all");
                setFilter("month", "");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Area */}
        <div className="lg:col-span-3">
          <div className="mb-4 text-sm font-medium text-muted-foreground">
            Showing {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'}
          </div>

          {filteredEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed rounded-xl border-border bg-card/50">
              <AlertCircle className="w-12 h-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-sora font-semibold text-navy dark:text-cloud mb-1">No events found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
              <Button 
                variant="link" 
                className="text-sky mt-2"
                onClick={() => {
                  setFilter("q", "");
                  setFilter("province", "all");
                  setFilter("month", "");
                }}
              >
                Clear all filters
              </Button>
            </div>
          ) : viewMode === "list" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col items-center">
              <Calendar
                mode="multiple"
                selected={eventDates}
                className="rounded-md border p-4 shadow-sm"
                modifiers={{
                  hasEvent: eventDates,
                }}
                modifiersStyles={{
                  hasEvent: { 
                    fontWeight: 'bold', 
                    backgroundColor: 'var(--amber)',
                    color: '#fff',
                    borderRadius: '100%'
                  }
                }}
              />
              <p className="text-sm text-muted-foreground mt-6">
                Days highlighted in amber indicate scheduled events based on your filters. 
                Switch to List view to see details.
              </p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export function CalendarView() {
  return (
    <Suspense fallback={<Container className="py-24 text-center">Loading calendar...</Container>}>
      <CalendarContent />
    </Suspense>
  );
}
