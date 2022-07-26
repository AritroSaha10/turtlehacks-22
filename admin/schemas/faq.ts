import { MdOutlineQuestionAnswer } from "react-icons/md";

export default {
    name: 'faq',
    title: 'Frequently Asked Questions',
    type: 'document',
    icon: MdOutlineQuestionAnswer,
    fields: [
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true
        },
        {
            name: "question",
            title: "Question",
            type: "string"
        },
        {
            name: "answer",
            title: "Answer",
            type: "text"
        },
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'answer',
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
            title: 'Question',
            name: 'question',
            by: [
                { field: 'name', direction: 'asc' }
            ]
        },
    ]
}