import { MdPeople } from "react-icons/md";

export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    icon: MdPeople,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Links',
            name: 'links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Link',
                    name: 'link',
                    fields: [
                        {
                            name: "website",
                            type: "string",
                            title: "Website",
                            options: {
                                list: [
                                    "GitHub",
                                    "Instagram",
                                    "LinkedIn",
                                    "Website",
                                ],
                                layout: 'radio' // <-- defaults to 'dropdown'
                            }
                        },
                        { name: "url", type: "url", title: "URL", validation: (Rule: any) => Rule.required() },
                    ]
                }
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule: any) => Rule.required()
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'position',
            media: 'image',
        },
    },
    orderings: [
        {
            title: 'Order',
            name: 'order',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        },
        {
            title: 'Name',
            name: 'name',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ]
}