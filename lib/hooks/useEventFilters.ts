"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { events } from "../data/events";
import { AirshowEvent } from "../types";

export function useEventFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentProvince = searchParams.get("province") || "all";
  const currentQuery = searchParams.get("q") || "";
  const currentMonth = searchParams.get("month") || "";

  const setFilter = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "all") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, router]
  );

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      // Province match
      const matchProvince = 
        currentProvince === "all" || 
        event.province.toLowerCase().replace(" ", "-") === currentProvince;
      
      // Text query match
      const matchQuery = 
        currentQuery === "" || 
        event.name.toLowerCase().includes(currentQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(currentQuery.toLowerCase());

      // Month match (startDate formatted as YYYY-MM)
      const eventMonth = event.startDate.substring(0, 7);
      const matchMonth = currentMonth === "" || eventMonth === currentMonth;

      return matchProvince && matchQuery && matchMonth;
    }).sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  }, [currentProvince, currentQuery, currentMonth]);

  return {
    filters: {
      province: currentProvince,
      query: currentQuery,
      month: currentMonth
    },
    setFilter,
    filteredEvents,
  };
}
