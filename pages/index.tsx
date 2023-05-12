import dynamic from "next/dynamic"
import Layout from "@components/Layout"

// import Hero from "@components/Home/Hero"
// import About from "@components/Home/About"
// import WaveEffect from "@components/Home/WaveEffect"
// import FAQ, { FrequentlyAskedQuestion } from "@components/Home/FAQ"
// import Team, { TeamMemberData } from "@components/Home/Team"
import { FrequentlyAskedQuestion } from "@components/Home/FAQ"
import { TeamMemberData } from "@components/Home/Team"
import { SponsorList, SponsorData } from "@components/Home/Sponsors"

import { getAllDocuments } from "@lib/sanity/util"

import Hero from "@components/Home/Hero"
import Schedule from "@components/Home/Schedule"
const About = dynamic(() => import("@components/Home/About"), { suspense: true })
const WaveEffect = dynamic(() => import("@components/Home/WaveEffect"), { suspense: true })
const EventDetails = dynamic(() => import("@components/Home/EventDetails"), { suspense: true })
const FAQ = dynamic(() => import("@components/Home/FAQ"), { suspense: true })
const Sponsors = dynamic(() => import("@components/Home/Sponsors"), { suspense: true })
const Team = dynamic(() => import("@components/Home/Team"), { suspense: true })

interface HomeProps {
  faq: FrequentlyAskedQuestion[],
  team: TeamMemberData[],
  sponsors: SponsorList
}

export async function getStaticProps({ preview = false }) {
  const faq = await getAllDocuments("faq", true, preview) as FrequentlyAskedQuestion[];
  const team = await getAllDocuments("team", true, preview) as TeamMemberData[];
  const sponsorsRaw = await getAllDocuments("sponsor", true, preview) as SponsorData[];

  const sponsors: SponsorList = {
      platinum: sponsorsRaw.filter(({ tier }) => tier === "platinum"),
      gold: sponsorsRaw.filter(({ tier }) => tier === "gold"),
      silver: sponsorsRaw.filter(({ tier }) => tier === "silver"),
      bronze: sponsorsRaw.filter(({ tier }) => tier === "bronze"),
      none: sponsorsRaw.filter(({ tier }) => tier === "none")
  };
  

  return {
    props: {
      faq,
      team,
      sponsors,
      // ...siteSettings
    },
    revalidate: 5
  };
}

export default function Home({ faq, team, sponsors }: HomeProps) {
  return (
    <Layout name="Hackathon" noAnim home>
      <div id="home" /> {/* For scrolling to the top */}
      <Hero />
      <WaveEffect />
      <About />
      <WaveEffect reverse />
      <EventDetails />
      <FAQ faq={faq} />
      <Sponsors sponsors={sponsors} />
      <Team team={team} />
      <Schedule />
    </Layout>
  )
}
