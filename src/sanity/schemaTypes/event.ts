import { defineField, defineType } from "sanity";

export const event = defineType({

    name: 'event',
    title: 'Event', 
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'image',
            type: 'image'
        }),
        defineField({
            name: 'date',
            type: 'datetime'
        }),
        defineField({
            name: 'end_time',
            type: 'datetime'
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}],
        }),
        defineField({
            name: 'rsvp_link',
            type: 'url'
        })
    ],
})
