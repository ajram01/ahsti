export interface Venue {
  name: string;
  address: string;
}

export interface Session {
  date: string;        // ISO date string from Sanity
  startTime?: string;  // optional
  endTime?: string;    // optional
  venue?: Venue;       // optional because venue might not exist
}

export interface EventType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  sessions: Session[];
  startDate: string;
  endDate: string;
}
