export default {
    name: 'socials',
    title: 'Socials',
    type: 'document',
    fields: [
      {
        name: 'social',
        title: 'Social',
        type: 'string',
      },
      {
        name: 'image_url',
        title: 'Image',
        type: 'string',
      },
      {
        name: 'to_link',
        title: 'To Link',
        type: 'string',
      },
    ],
    preview: {
      select: {
        title: 'social',
      },
    },
  }
  