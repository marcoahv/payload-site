import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'navLinks',
      label: 'Nav Links',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        { name: 'destination', type: 'relationship', relationTo: 'pages' },
        {
          name: 'newTab',
          label: 'Open in a new tab',
          type: 'checkbox',
        },
      ],
    },
  ],
}
