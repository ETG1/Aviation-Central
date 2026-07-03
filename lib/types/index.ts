export type AirshowEvent = {
  slug: string;
  name: string;
  startDate: string;
  endDate?: string;
  province: "Gauteng" | "Western Cape" | "KwaZulu-Natal" | "Eastern Cape" | "Free State" | "Other";
  location: string;
  summary: string;
  description: string;
  heroImage: string;
  ticketUrl?: string;
  featured?: boolean;
};
