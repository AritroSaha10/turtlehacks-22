import Image from 'next/image'
import EarthHacksLogo from "@media/earthhacks.png"

const partners = [
    {
        name: "EarthHacks",
        link: "https://earthhacks.io/",
        image: EarthHacksLogo,
    }
]

const PartnerCard = ({ name, link, image, imageHeight } : { name: string, link: string, image: any, imageHeight: number}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer" className='hover:scale-110 transition-all duration-150'>
            <Image src={image} alt={name} height={imageHeight} width={image.width / image.height * imageHeight} className="transition-all duration-150" quality={100} />
        </a>
    )
}

export default function Partners() {
    return (
        <section className="flex flex-col p-10 items-center md:py-16 md:p-20 lg:px-32 xl:px-40 items-lef bg-cyan-800 z-30" id="sponsors">
            <div className="flex flex-col text-center mb-8">
                <span className="text-lg text-emerald-200 font-semibold">Stronger together</span>
                <h1 className="text-4xl text-white font-bold">Partners</h1>
            </div>

            <div className='flex flex-col gap-12 w-full items-center'>
                {partners.length > 0 && (
                    <div className='flex flex-wrap gap-6 lg:gap-12 items-center justify-center'>
                        {partners.map((data) => <PartnerCard {...data} key={data.name} imageHeight={140} />)}
                    </div>
                )}
            </div>
        </section>
    )
}