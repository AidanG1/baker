export default {
  name: 'nav',
  title: 'Nav',
  type: 'document',
  fields: [
    {
      name: 'nav_type', // navbar or footer
      title: 'Nav Type',
      type: 'string',
      options: ['navbar', 'footer']
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
      title: 'nav_type',
    },
  },
}
