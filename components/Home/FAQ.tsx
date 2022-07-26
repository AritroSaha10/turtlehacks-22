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
    }
];

export default function FAQ(/*{ faq: faqRaw }*/) {
    // Reformat to work with Accordion
    const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (
        <div className="flex flex-col p-10 items-center md:py-16 md:p-20 lg:px-32 xl:px-40 items-left bg-emerald-800 z-20">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='bg-white/20 p-6 rounded-xl'>
                {faq.map((data, idx) =>
                    <React.Fragment key={idx}>
                        <Accordion {...data} />
                        {idx !== faq.length - 1 && <hr />}
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}