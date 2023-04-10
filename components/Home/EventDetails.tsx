import { HiCalendar, HiLocationMarker, } from "react-icons/hi"
import { MdPeopleAlt } from "react-icons/md"

import fadeFrom, { fadeFromVariants, Direction } from "@util/anim/fadeFrom"
import { m } from "framer-motion"

export interface DetailCardData {
    title: string,
    icon: JSX.Element,
    content: string
}

const cardData: DetailCardData[] = [
    {
        title: "Type",
        icon: <MdPeopleAlt className='text-emerald-600' />,
        content: "Hybrid (in-person & online). View the FAQ for more information!"
    },
    {
        title: "Where",
        icon: <HiLocationMarker className='text-emerald-600' />,
        content: "Catalyst Commons @ 137 Glasgow St Unit 210, Kitchener, ON N2G 4X8"
    },
    {
        title: "When",
        icon: <HiCalendar className='text-emerald-600' />,
        content: "In-person: Sat, May 13th: 10AM to 4PM \nOnline: Fri, May 12th @ 5PM to Sun, May 14th @ 9AM"
    },
];

function DetailCard({ data, idx } : { data: DetailCardData, idx: number }) {
    return (
        <m.div
            className="flex flex-col p-4 gap-4 items-center lg:items-start text-center lg:text-left"
            variants={fadeFromVariants(Direction.BOTTOM, 1, idx * 0.25, 30)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >

            <div className="flex items-center justify-center text-2xl text-white bg-green-50 w-12 h-12 rounded-lg">
                {data.icon}
            </div>

            <h1 className="text-3xl text-white font-bold">{data.title}</h1>
            <p className="text-lg text-gray-300 whitespace-pre-line">
                {data.content}
            </p>
        </m.div>
    )
}

export default function EventDetails() {
    return (
        <section className="flex flex-col items-center p-10 pt-16 md:p-20 md:py-16 md:pt-32 lg:pb-24 lg:pt-32 xl:pt-36 z-10 text-center bg-emerald-800" id="event-details">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Event Overview</h1>
            </div>

            <div className="flex flex-row justify-center w-full h-full flex-wrap gap-6">
                <m.iframe
                    src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAWYhnX4mep0gM1pI9FQ2_kLk5rxYUBEzw&q=Catalyst+Commons"}
                    allowFullScreen
                    className="w-full lg:w-1/3 h-auto m-4"
                    variants={fadeFromVariants(Direction.LEFT, 1, 0, 60)}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap justify-between lg:w-1/2 h-full gap-4">
                    {cardData.map((data, i) => (<DetailCard key={i} idx={i} data={data} />))}
                </div>
            </div>
        </section>
    )
}