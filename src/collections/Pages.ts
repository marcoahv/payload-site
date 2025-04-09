import { Hero } from '@/Blocks/Hero/config'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',

  defaultPopulate: {
    title: true,
    slug: true,
  },

  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],

    useAsTitle: 'title',
  },

  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'title',
          label: 'Page:',
          type: 'text',
          required: true,
        },
        {
          name: 'slug',
          label: 'Page Slug:',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'section',
      label: 'Section:',
      type: 'blocks',
      required: true,
      blocks: [Hero],
    },
  ],
}
