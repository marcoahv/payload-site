import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
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
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'array',
      minRows: 0,
      maxRows: 5,
      fields: [
        {
          name: 'platform',
          label: 'Platform',
          type: 'select',
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'GitHub', value: 'github' },
            // Add more platforms as needed
          ],
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },

    {
      name: 'cta_button',
      label: 'Button',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
