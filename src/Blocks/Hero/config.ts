import { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'Hero',
  fields: [
    {
      name: 'image',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'headings',
      label: 'Headings',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'subheading',
          type: 'text',
          required: true,
        },
      ],
    },

    {
      name: 'cta_button',
      label: 'Button',
      type: 'group',
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
