export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isHighlighted: true
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'files',
      title: 'Files',
      type: 'array',
      of: [{
        type: 'file',
      }],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
}
