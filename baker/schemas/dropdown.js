export default {
    name: 'dropdown',
    title: 'Dropdown',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'pages',
            title: 'Pages',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        { type: 'page' },
                    ]
                }
            ]
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
}
