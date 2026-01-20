import type { EventType, Session } from "@/types/event";
import Event from "./event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { Button } from "./ui/button";

const UPCOMING_POSTS_QUERY = `*[
  _type == "event" &&
  defined(slug.current) &&
  endDate >= now()
]|order(startDate asc)[0...10]{
  _id,
  title,
  slug,
  excerpt,
  startDate,
  endDate,
  sessions[]{
    date,
    startTime,
    endTime,
    venue->{
      name,
      address
    }
  }
}`;

const PAST_POSTS_QUERY = `*[
  _type == "event" &&
  defined(slug.current) &&
  endDate < now()
]|order(endDate desc)[0...10]{
  _id,
  title,
  slug,
  excerpt,
  startDate,
  endDate,
  sessions[]{
    date,
    startTime,
    endTime,
    venue->{
      name,
      address
    }
  }
}`;

function getNextSession(sessions: Session[]): Session {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    sorted.find((s) => new Date(s.date) >= today) || sorted[sorted.length - 1]
  );
}

function getLastSession(sessions: Session[]): Session {
  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return sorted[sorted.length - 1];
}

const options = { next: { revalidate: 30 } };

export default async function Events() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    client.fetch<EventType[]>(UPCOMING_POSTS_QUERY, {}, options),
    client.fetch<EventType[]>(PAST_POSTS_QUERY, {}, options),
  ]);

  return (
    <div>
      <Tabs defaultValue="upcoming" className="w-full pt-5">
        <TabsList className="mx-auto">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="previous">Previous Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          <div className="flex flex-col lg:flex-row gap-3 mt-5 mb-3">
            {upcomingEvents.map((event) => {
              if (!event.sessions?.length) return null;

              const session = getNextSession(event.sessions);
              const sessionDate = new Date(session.date);

              const day = sessionDate.getDate();
              const month = sessionDate.toLocaleString("en-US", {
                month: "short",
              });

              const time =
                session.startTime && session.endTime
                  ? `${session.startTime} – ${session.endTime}`
                  : "";

              const location = session.venue?.address ?? "Location TBA";

              return (
                <Event
                  key={event._id}
                  name={event.title}
                  description={event.excerpt}
                  month={month}
                  day={day}
                  time={time}
                  location={location}
                  slug={event.slug.current}
                />
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="previous">
          <div>
            {pastEvents.map((event) => {
              if (!event.sessions?.length) return null;

              const session = getLastSession(event.sessions);
              const sessionDate = new Date(session.date);

              const day = sessionDate.getDate();
              const month = sessionDate.toLocaleString("en-US", {
                month: "short",
              });

              const time =
                session.startTime && session.endTime
                  ? `${session.startTime} – ${session.endTime}`
                  : "";

              const location = session.venue?.address ?? "Location TBA";

              return (
                <Event
                  key={event._id}
                  name={event.title}
                  description={event.excerpt}
                  month={month}
                  day={day}
                  time={time}
                  location={location}
                  slug={event.slug.current}
                />
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
      <div>
        <Link href="/events"><Button className="w-[160px] lg:w-[200px] py-6 mt-5" size="lg" variant="secondary">View All Events</Button></Link>
      </div>
    </div>
  );
}
