import React from 'react'
import Accordion from "../Accordion"

export interface FrequentlyAskedQuestion {
    title: string,
    content: string
};

// TODO: Replace with CMS fetched data
const faqRaw = [
    {
        question: "What is a hackathon?",
        answer: "A hackathon is an event dedicated to gathering both aspiring and experienced computer programmers to work upon and create a product, based on a given question or theme. This key question or theme is what diversifies hackathons from one another. A typical hackathon ranges from a 24 to 72 hour event, filled to the brim with immersive workshops and guest speakers. During this time, participants use a combination of their newfound knowledge along with past experiences to come up with a product. In a hackathon, participants can decide to work in teams or individually. Finally, prizes are offered to participants with the best projects at the end of the event."
    },
    {
        question: "Who can participate?",
        answer: "Any high school or middle school student can join us at TurtleHacks!"
    },
    {
        question: "How many people can be on one team?",
        answer: "Any team can have a maximum number of four people. You can form a team before or during the event."
    },
    {
        question: "What if I don't know how to code?",
        answer: "That's okay! TurtleHacks prioritizes learning at the same level at building and creating. With helpful mentors and live workshops, you'll be able to create any project you'd like."
    }
];

export default function FAQ(/*{ faq: faqRaw }*/) {
    // Reformat to work with Accordion
    const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (
        <div className="flex flex-col p-10 pt-16 items-center md:p-20 md:py-16 md:pt-32 lg:px-32 lg:pt-32 xl:px-40 xl:pt-36 items-left bg-emerald-800 z-10 relative">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-x-4 bg-white/20 p-6'>
                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.slice(0, faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} keepSeparator />
                        </React.Fragment>
                    )}
                </div>

                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.slice(faq.length / 2).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} keepSeparator />
                        </React.Fragment>
                    )}
                </div>
            </div>
        </div>
    )
}