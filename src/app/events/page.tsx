import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const metadata: Metadata = {
  title: "Events | AHSTI",
  description:
    "Stay updated on AHSTI events, meetings, and community gatherings shaping growth and investment in South Texas.",
};

const EVENTS_QUERY = `*[
  _type == "event" &&
  defined(slug.current)
]|order(startDate desc)[0...24]{
  _id,
  title,
  slug,
  excerpt,
  startDate,
  endDate,
  image{
    asset->{
      _id,
      url
    }
  },
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

type Venue = {
  name?: string;
  address?: string;
};

type Session = {
  date: string;
  startTime?: string;
  endTime?: string;
  venue?: Venue;
};

type EventType = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  startDate: string;
  endDate: string;
  image?: { asset?: { url?: string } } | null;
  sessions?: Session[];
};

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

function formatShortDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatSessionTime(startTime?: string, endTime?: string) {
  if (startTime && endTime) return `${startTime} – ${endTime}`;
  if (startTime) return startTime;
  return "";
}

function getNextSession(sessions: Session[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    sorted.find((s) => new Date(s.date) >= today) || sorted[sorted.length - 1]
  );
}

function getLastSession(sessions: Session[]) {
  const sorted = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
  return sorted[sorted.length - 1];
}

const options = { next: { revalidate: 30 } };

function renderEventCard(event: EventType, isUpcoming: boolean) {
  const sessions = event.sessions ?? [];
  const hasSessions = sessions.length > 0;

  const session = hasSessions
    ? isUpcoming
      ? getNextSession(sessions)
      : getLastSession(sessions)
    : null;

  const dateLabel = session?.date
    ? formatShortDate(session.date)
    : formatShortDate(event.startDate);

  const timeLabel = session
    ? formatSessionTime(session.startTime, session.endTime)
    : "";

  const locationLabel =
    session?.venue?.address || session?.venue?.name || "Location TBA";

  const image = event.image ?? null;
  const builder = image ? urlFor(image) : null;
  const flyerUrl =
    builder && image?.asset?.url
      ? builder.width(800).url()
      : event.image?.asset?.url ?? null;

  return (
    <div
      key={event._id}
      className="bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col lg:flex-row gap-0 overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div className="w-full lg:w-[300px] bg-white">
        {flyerUrl ? (
          <img
            src={flyerUrl}
            alt={event.title}
            className="w-full h-[220px] lg:h-full object-cover border-b lg:border-b-0 lg:border-r border-gray-200"
          />
        ) : (
          <div className="w-full h-[220px] lg:h-full flex items-center justify-center text-gray-500 border-b lg:border-b-0 lg:border-r border-gray-200">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-col p-5 gap-2 relative flex-1">
        <div
          className={`absolute top-4 right-4 z-10 text-[10px] font-bold tracking-widest px-2 py-1 rounded border uppercase ${
            isUpcoming
              ? "bg-green-100 text-green-800 border-green-200"
              : "bg-orange-100 text-orange-800 border-orange-200"
          }`}
        >
          {isUpcoming ? "Upcoming" : "Past"}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 pr-20">
          {event.title}
        </h3>

        <div className="flex flex-col lg:flex-row items-start flex-wrap gap-2 lg:gap-5 mt-1">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <p className="text-gray-700">{dateLabel}</p>
          </div>

          {timeLabel && (
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <p className="text-gray-700">{timeLabel}</p>
            </div>
          )}

          {locationLabel && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              <p className="text-gray-700">{locationLabel}</p>
            </div>
          )}
        </div>

        {event.excerpt && (
          <p className="text-gray-700 mt-2">{event.excerpt}</p>
        )}

        <div className="mt-3">
          <Link
            href={`/events/${event.slug.current}`}
            className="text-primary font-semibold hover:underline"
          >
            View Event →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default async function EventsPage() {
  const events = await client.fetch<EventType[]>(EVENTS_QUERY, {}, options);
  const now = new Date();

  const upcomingEvents = events
    .filter((event) => new Date(event.endDate) >= now)
    .sort(
      (a, b) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    );

  const pastEvents = events
    .filter((event) => new Date(event.endDate) < now)
    .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1140px] w-full mx-auto py-10 px-5 lg:px-2">
        <h1 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">
          Events
        </h1>

        <p className="text-center text-gray-700 mt-2">
          See what’s coming up and browse recent past events.
        </p>

        <div className="mt-10">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="mx-auto border-1 border-[#c1c1c1]">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Previous Events</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="mt-5 flex flex-col gap-5">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => renderEventCard(event, true))
                ) : (
                  <div className="text-center text-gray-600 bg-white border border-gray-200 rounded-lg p-8">
                    There are no upcoming events right now.
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="mt-5 flex flex-col gap-5">
                {pastEvents.length > 0 ? (
                  pastEvents.map((event) => renderEventCard(event, false))
                ) : (
                  <div className="text-center text-gray-600 bg-white border border-gray-200 rounded-lg p-8">
                    No past events are available yet.
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
