import { Calendar, MapPin } from "lucide-react";
import { events } from "@/lib/data";
import InkDivider from "./InkDivider";

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

export default function Events() {
  return (
    <section id="events" className="bg-parchment py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-5xl lg:text-6xl font-bold text-ink tracking-tight">
            Events
          </h2>
          <span className="hidden md:block text-stone text-sm italic">
            Readings, signings &amp; festivals
          </span>
        </div>

        {events.length === 0 ? (
          <p className="text-stone text-base italic">
            No upcoming events. Check back soon.
          </p>
        ) : (
          <ol className="flex flex-col divide-y divide-stone/15">
            {events.map((event) => {
              const date = formatDate(event.date);
              return (
                <li
                  key={event.id}
                  className="grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-6 lg:gap-12 py-8 items-start"
                >
                  {/* Date column */}
                  <div className="flex flex-col items-start">
                    <span className="font-display text-3xl lg:text-4xl font-bold text-forest leading-none">
                      {date.day}
                    </span>
                    <span className="text-stone text-xs tracking-widest uppercase mt-1">
                      {date.month} {date.year}
                    </span>
                  </div>

                  {/* Details column */}
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-forest/70 shrink-0" />
                        {event.venue}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-forest/70 shrink-0" />
                        {event.city}
                      </span>
                    </div>
                    <time
                      dateTime={event.date}
                      className="sr-only"
                    >
                      {date.full}
                    </time>
                  </div>
                </li>
              );
            })}
          </ol>
        )}
      </div>

      <InkDivider />
    </section>
  );
}
