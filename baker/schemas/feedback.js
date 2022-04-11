export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.regex(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
      },
      {
          name: 'subject',
          title: 'Subject',
          type: 'string',
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: Rule => Rule.min(1)
      },
      {
          name: 'happy',
          title: 'Happy',
          type: 'number',
          validation: Rule => Rule.min(1).max(3)
      }
    ],
  
    preview: {
      select: {
        title: 'subject',
      },
    },
  }
  