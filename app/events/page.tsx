import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events — Eleanor Marsh",
  description:
    "Upcoming readings, signings, and festival appearances by Eleanor Marsh.",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return {
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    year: d.getFullYear(),
    full: d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  };
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-parchment pt-16">
        {/* Page header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="flex items-end justify-between">
            <h1 className="font-display text-5xl lg:text-7xl font-bold text-ink tracking-tight">
              Events
            </h1>
            <span className="hidden md:block text-stone text-sm italic">
              Readings, signings &amp; festivals
            </span>
          </div>
        </div>

        {/* Events list */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-32">
          {events.length === 0 ? (
            <p className="text-stone text-base italic py-16">
              No upcoming events. Check back soon.
            </p>
          ) : (
            <ol className="flex flex-col divide-y divide-stone/15">
              {events.map((event) => {
                const date = formatDate(event.date);
                return (
                  <li
                    key={event.id}
                    className="grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-10 items-start"
                  >
                    <div className="flex flex-col items-start">
                      <span className="font-display text-4xl lg:text-5xl font-bold text-forest leading-none">
                        {date.day}
                      </span>
                      <span className="text-stone text-xs tracking-widest uppercase mt-1">
                        {date.month} {date.year}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold text-ink mb-3">
                        {event.title}
                      </h2>
                      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-stone">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} className="text-forest/70 shrink-0" />
                          {event.venue}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-forest/70 shrink-0" />
                          {event.city}
                        </span>
                      </div>
                      <time dateTime={event.date} className="sr-only">
                        {date.full}
                      </time>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
