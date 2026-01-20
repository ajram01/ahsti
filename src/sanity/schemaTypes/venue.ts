import { defineField, defineType } from "sanity";

export const venue = defineType({
  name: "venue",
  title: "Venue",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      type: "string",
    }),
    defineField({
      name: "city",
      type: "string",
    }),
    defineField({
      name: "state",
      type: "string",
    }),
    defineField({
      name: "zip",
      type: "string",
    }),
    defineField({
      name: "mapLink",
      type: "url",
    }),
    defineField({
      name: "phone",
      type: "string",
    }),
    defineField({
      name: "nmls",
      title: "NMLS #",
      type: "string",
    }),
  ],
});
