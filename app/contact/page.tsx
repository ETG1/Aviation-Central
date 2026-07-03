import { ContactForm, ContactSidebar } from "@/components/contact-form";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Aviation Central",
  description:
    "Get in touch with Aviation Central. List your event, report a correction, or ask a general question about airshows in Southern Africa.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 w-full bg-background min-h-screen">
      {/* Page header */}
      <section className="bg-navy py-16 md:py-20">
        <Container>
          <p className="text-amber font-semibold uppercase tracking-widest text-sm mb-3">
            Say Hello
          </p>
          <h1 className="text-4xl md:text-5xl font-sora font-bold text-cloud leading-tight max-w-2xl">
            Contact <span className="text-amber">Aviation Central</span>
          </h1>
          <p className="text-cloud/80 mt-4 text-lg max-w-xl">
            Questions, event listings, corrections, or partnerships — we're always happy to hear from the community.
          </p>
        </Container>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 bg-card border border-border rounded-2xl shadow-sm p-8">
              <h2 className="text-xl font-sora font-bold text-navy dark:text-cloud mb-6 border-b pb-4">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

