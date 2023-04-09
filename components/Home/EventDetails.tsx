import { IconType } from "react-icons";
import { HiCalendar, HiLocationMarker, } from "react-icons/hi"
import { MdMoneyOff, MdBackpack, MdPerson, MdFastfood } from "react-icons/md"

export interface DetailCardData {
    title: string,
    icon: JSX.Element,
    content: string
}

const cardData: DetailCardData[] = [
    {
        title: "When",
        icon: <HiCalendar className='text-blue-500' />,
        content: "Friday December 16 4:30PM-7:30PM\nSaturday December 17 9:30AM-5:20PM"
    },
    {
        title: "Where",
        icon: <HiLocationMarker className='text-blue-500' />,
        content: "The Woodlands Secondary School, located at 3225 Erindale Station Road, Mississauga, Ontario."
    },
    {
        title: "What to bring",
        icon: <MdBackpack className='text-blue-500' />,
        content: "Any tools you'll need for your project, and an open mind!"
    },
    {
        title: "Experience required",
        icon: <MdPerson className='text-blue-500' />,
        content: "None! No tech experience is required to attend hack::peel"
    },
    {
        title: "Cost",
        icon: <MdMoneyOff className='text-blue-500' />,
        content: "hack::peel is free for all attendees!"
    },
    {
        title: "Food",
        icon: <MdFastfood className='text-blue-500' />,
        content: "All meals are provided for free!"
    },
];

function DetailCard(data: DetailCardData) {
    return (
        <div className="flex flex-col p-4 gap-4 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center text-2xl text-white bg-blue-50 w-12 h-12 rounded-lg">
                {data.icon}
            </div>

            <h1 className="text-3xl text-white font-bold">{data.title}</h1>
            <p className="text-lg text-gray-300 whitespace-pre-line">
                {data.content}
            </p>
        </div>
    )
}

export default function EventDetails() {
    return (
        <section className="flex flex-col items-center p-10 pt-16 md:p-20 md:py-16 md:pt-32 lg:px-32 lg:pb-24 lg:pt-32 xl:px-40 xl:pt-36 z-10 text-center bg-emerald-800" id="details">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Event Overview</h1>
            </div>

            <div className="flex flex-row justify-center items-center w-full mx-auto flex-wrap">
                <div className="event-details-map-container" style={{ alignSelf: "center" }}>
                    <div className="column">
                        <div className="venue-map border-black-fade"
                            style={{ borderColor: "#101A38", borderWidth: "5px", borderStyle: "solid" }}>
                            <iframe
                                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAWYhnX4mep0gM1pI9FQ2_kLk5rxYUBEzw&q=Catalyst+Commons"}
                                style={{ border: "0", marginBottom: "-5px" }} allowFullScreen />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 flex-wrap justify-between lg:w-1/2 h-full gap-4">
                    {cardData.map(card_entry => (<DetailCard key={card_entry.title} {...card_entry} />))}
                </div>
            </div>
        </section>
    )
}