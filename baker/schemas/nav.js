export default {
  name: 'nav',
  title: 'Nav',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'nav_type', // navbar or footer
      title: 'Nav Type',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'dropdown'},
          {type: 'page'}
        ]
      }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}
