import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Used on cards, previews, and SEO",
    }),
    defineField({
      name: "image",
      title: "Flyer Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sessions",
      type: "array",
      validation: (Rule) => Rule.min(1).required(),
      of: [
        {
          type: "object",
          name: "eventSession",
          fields: [
            defineField({
              name: "date",
              type: "date",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "startTime",
              type: "string",
              description: "e.g. 10:00 AM",
            }),
            defineField({
              name: "endTime",
              type: "string",
              description: "e.g. 7:00 PM",
            }),
            defineField({
              name: "venue",
              type: "reference",
              to: [{ type: "venue" }],
              description:
                "Which location this session is held at (if applicable)",
            }),
          ],
          preview: {
            select: {
              date: "date",
              start: "startTime",
              end: "endTime",
            },
            prepare({ date, start, end }) {
              return {
                title: `${date} ${start || ""}${end ? ` - ${end}` : ""}`.trim(),
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "venues",
      title: "Venues (optional)",
      type: "array",
      of: [{ type: "reference", to: [{ type: "venue" }] }],
      description: "list venues involved in event",
    }),
    defineField({
      name: "rsvp_link",
      type: "url",
    }),
    defineField({
      name: "startDate",
      title: "Start Date (for sorting)",
      type: "datetime",
      description: "Used for querying / sorting. Set to earliest session date.",
    }),
    defineField({
      name: "endDate",
      title: "End Date (for sorting)",
      type: "datetime",
      description: "Used for querying / sorting. Set to latest session date.",
    }),
  ],
});
