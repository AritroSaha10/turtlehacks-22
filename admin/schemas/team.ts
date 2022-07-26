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
      hidden: true
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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