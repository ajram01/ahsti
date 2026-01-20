import { type SchemaTypeDefinition } from 'sanity'
import { event } from './event'
import { venue } from './venue'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [event, venue],
}
