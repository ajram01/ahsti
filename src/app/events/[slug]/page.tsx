import type { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";


import { client } from "@/sanity/lib/client";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

const EVENT_QUERY = `*[
  _type == "event" && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  excerpt,
  details,
  rsvp_link,
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

const options = { next: { revalidate: 30 } };

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

function formatSessionDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatSessionTime(startTime?: string, endTime?: string) {
  if (startTime && endTime) return `${startTime} – ${endTime}`;
  if (startTime) return startTime;
  return "";
}

export async function generateMetadata({ params }: EventPageProps) {
    const { slug } = await params;
  const event = await client.fetch<SanityDocument>(
    EVENT_QUERY,
    { slug },
    options
  );

  if (!event) {
    return {
      title: "Event Not Found | AHSTI",
      description: "The event you’re looking for could not be found.",
    };
  }

  return {
    title: `${event.title} | AHSTI`,
    description: event.excerpt || "Event details and session information.",
  };
}

export default async function EventPage({ params }: EventPageProps) {
    const { slug } = await params;
  const event = await client.fetch<SanityDocument>(
    EVENT_QUERY,
    { slug },
    options
  );

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] px-5 py-10">
        <div className="max-w-[900px] mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Event not found</h1>
          <Link href="/events" className="text-primary hover:underline inline-block mt-4">
            ← Back to events
          </Link>
        </div>
      </div>
    );
  }

    const image = event.image;
    const imageBuilder = image ? urlFor(image) : null;

    const flyerUrl =
    imageBuilder && image?.asset?.url
        ? imageBuilder.width(1400).url()
        : image?.asset?.url ?? null;

  const sessions = Array.isArray(event.sessions) ? event.sessions : [];
  const sortedSessions = [...sessions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // “Headline” = next upcoming session, else last session
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const headlineSession =
    sortedSessions.find((s) => new Date(s.date) >= today) ||
    sortedSessions[sortedSessions.length - 1];

  const headlineDate = headlineSession?.date ? formatSessionDate(headlineSession.date) : "";
  const headlineTime = headlineSession
    ? formatSessionTime(headlineSession.startTime, headlineSession.endTime)
    : "";
  const headlineLocation = headlineSession?.venue?.address || "";

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="max-w-[1140px] mx-auto px-5 lg:px-2 py-10">
        {/* Top back link */}
        <Link href="/events" className="text-primary hover:underline inline-block mb-6">
          ← Back to events
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT COLUMN (Flyer) */}
          <div className="w-full md:w-2/5">
            <div className="md:sticky md:top-6">
              {flyerUrl ? (
                <a
                  href={flyerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label="Open flyer image in a new tab"
                >
                  <img
                    src={flyerUrl}
                    alt={event.title}
                    className="w-full h-auto rounded-xl cursor-zoom-in border border-gray-200 shadow-sm"
                  />
                </a>
              ) : (
                <div className="w-full rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
                  No flyer image available.
                </div>
              )}

              {flyerUrl && (
                <p className="text-xs text-gray-500 text-center pt-2">
                  Click to view flyer
                </p>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN (Event content) */}
          <div className="w-full md:w-3/5">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {event.title}
            </h1>

            {/* Meta summary */}
            <div className="mt-4 flex flex-col gap-2 text-gray-700">
              {headlineDate && (
                <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <p>{headlineDate}</p>
                </div>
              )}

              {(headlineTime || headlineLocation) && (
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4">
                  {headlineTime && (
                    <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                      <p>{headlineTime}</p>
                    </div>
                  )}
                  {headlineLocation && (
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                      <p>{headlineLocation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {event.excerpt && (
              <p className="mt-4 text-gray-700">{event.excerpt}</p>
            )}

            <div className="border-t border-gray-300 my-6" />

            {/* Details */}
            <div className="prose max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
              {event.details?.length ? (
                <PortableText value={event.details} />
              ) : (
                <p className="text-gray-700">Event details will be posted soon.</p>
              )}
            </div>

            {/* Sessions list */}
            {sortedSessions.length > 0 && (
              <>
                <div className="border-t border-gray-300 my-6" />

                <h2 className="text-xl font-semibold text-gray-900">
                  Dates & Times
                </h2>

                <div className="mt-4 flex flex-col gap-3">
                  {sortedSessions.map((s: (typeof sortedSessions)[number], idx: number) => {
                    const dateLabel = s?.date ? formatSessionDate(s.date) : "Date TBA";
                    const timeLabel = formatSessionTime(s?.startTime, s?.endTime);
                    const venueName = s?.venue?.name;
                    const venueAddr = s?.venue?.address;

                    return (
                      <div
                        key={`${s?.date || "session"}-${idx}`}
                        className="bg-white rounded-lg border border-gray-200 p-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <p className="font-semibold text-gray-900">{dateLabel}</p>
                          {timeLabel && (
                            <p className="text-gray-700">{timeLabel}</p>
                          )}
                        </div>

                        {(venueName || venueAddr) && (
                          <div className="mt-2 text-gray-700">
                            {venueName && <p className="font-medium">{venueName}</p>}
                            {venueAddr && <p>{venueAddr}</p>}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {/* RSVP */}
            {event.rsvp_link && (
              <div className="mt-8">
                <a
                  href={event.rsvp_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-primary text-white font-semibold hover:opacity-90 transition"
                >
                  RSVP / Learn More
                </a>
              </div>
            )}

            {/* Bottom back link */}
            <Link href="/events" className="text-primary hover:underline inline-block mt-10">
              ← Back to events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
