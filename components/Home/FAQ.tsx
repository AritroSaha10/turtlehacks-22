import React from 'react'
import Accordion from "@components/Accordion"

export interface FrequentlyAskedQuestion {
    title: string,
    content: string
};

export default function FAQ({ faq: faqRaw }) {
    // Reformat to work with Accordion
    const faq: FrequentlyAskedQuestion[] = faqRaw.map(({ question, answer }) => ({ title: question, content: answer }))

    return (
        <section className="flex flex-col p-10 pt-16 items-center md:p-20 md:py-16 md:pt-32 lg:px-32 lg:pb-24 lg:pt-32 xl:px-40 xl:pt-36 items-left bg-cyan-800 z-10 relative" id="FAQ">
            <div className="flex flex-col text-center mb-8">
                <h1 className="text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>

            <div className='flex flex-col lg:flex-row lg:gap-x-4 bg-black/20 p-6 lg:px-8'>
                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.filter((_, i) => i % 2 == 0).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>

                <div className='flex flex-col gap-x-4 rounded-xl lg:w-1/2'>
                    {faq.filter((_, i) => i % 2 == 1).map((data, idx) =>
                        <React.Fragment key={idx}>
                            <Accordion {...data} />
                        </React.Fragment>
                    )}
                </div>
            </div>
        </section>
    )
}