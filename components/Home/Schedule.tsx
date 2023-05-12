import React, { CSSProperties } from 'react'

export interface Event {
    name: string,
    time: string
}

export interface Day {
    day_text: string,
    events: Event[]
}

const timetable: Day[] = [
    {
        day_text: "Friday — March 12",
        events: [
            {
                name: "Opening ceremony",
                time: "5:00 PM"
            },
            {
                name: "Team Formation & Networking",
                time: "7:00 PM"
            },
            {
                name: "Workshop: Coding Drones using ChatGPT",
                time: "7:30 PM"
            },
            {
                name: "Workshop by Postman: Using APIs 101",
                time: "8:30 PM"
            },
            {
                name: "Hacking starts!",
                time: "9:00 PM"
            },
            {
                name: "Workshop by EarthHacks: \"What Could Go Wrong?\"",
                time: "9:30 PM"
            },
            {
                name: "Game Night - skribbl.io",
                time: "10:30 PM"
            },
        ]
    },
    {
        day_text: "Saturday — March 13",
        events: [
            {
                name: "Check-in Begins (In-Person)",
                time: "10:00 AM"
            },
            {
                name: "Cup Stacking (In-Person)",
                time: "10:15 AM"
            },
            {
                name: "Check-in Ends, Mafia (In-Person)",
                time: "10:30 AM"
            },
            {
                name: "Workshop - My Journey from UW CS to Surgical Robots (In-Person)",
                time: "11:15 AM"
            },
            {
                name: "Lunch & Board Games",
                time: "12:00 PM"
            },
            {
                name: "Sugar Honeycomb Challenge",
                time: "12:30 PM"
            },
            {
                name: "Workshop by OnlyOffice - Intro to Developing Plugins",
                time: "1:00 PM"
            },
            {
                name: "Lights Out Activity",
                time: "1:30 PM"
            },
            {
                name: "Workshop - University Life and Advice",
                time: "2:00 PM"
            },
            {
                name: "Spicy Noodle Challenge",
                time: "2:30 PM"
            },
            {
                name: "Venue Closes, Activity - Bob Ross",
                time: "4:00 PM"
            },
            {
                name: "Activity - Coder's Quarrel!",
                time: "5:30 PM"
            },
            {
                name: "Workshop - Intro to Web Dev",
                time: "8:00 PM"
            },
            {
                name: "Workshop - Flutter Foundations: Building your First To-Do App",
                time: "9:00 PM"
            },
            {
                name: "Activity - Video Game Tournament",
                time: "10:00 PM"
            }
        ]
    },
    {
        day_text: "Sunday — March 14",
        events: [
            {
                name: "Submissions Due (Soft Deadline)",
                time: "9:00 AM"
            },
            {
                name: "Live Pitches Begin",
                time: "10:45 AM"
            },
            {
                name: "Closing Ceremony",
                time: "3:30 PM"
            },
        ]
    },
];

function DayCol(dayData: Day) {
    const day_text: string = dayData.day_text;
    const events: Event[] = dayData.events;

    return (<>
        <div className="inline-flex relative m-[15px]">
            <table className="text-white border-collapse w-fit min-w-[30vw]">
                <thead className="py-2 text-center bg-cyan-900">
                    <tr>
                        <th colSpan={2} className="border-[1px] border-solid border-white p-2 text-center">{day_text}</th>

                    </tr>
                </thead>

                <tbody>
                    {events.map(
                        event_entry => (
                            <tr key={event_entry.name} className='hover:bg-cyan-700 duration-150 transition-all'>
                                <td className="border-[1px] border-solid border-white p-2 text-center">{event_entry.time}</td>
                                <td className="border-[1px] border-solid border-white p-2">{event_entry.name}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    </>)

}

export default function Schedule() {
    return (<>
        <section id="agenda" className="flex flex-col p-10 items-center md:p-20 md:py-16 lg:px-32 items-left bg-cyan-800 z-30">
        <div className="flex flex-col text-center mb-8">
                <span className="text-lg text-emerald-200 font-semibold">What we&apos;ll be doing</span>
                <h1 className="text-4xl text-white font-bold">Schedule</h1>
            </div>

            <div className="centered" style={{ justifyContent: "center", display: "flex", width: "100%", marginRight: "auto", flexWrap: "wrap", marginLeft: "auto" }}>
                {timetable.map(day_entry => (<DayCol key={day_entry.day_text} day_text={day_entry.day_text} events={day_entry.events} />))}
            </div>
        </section>
    </>)
}