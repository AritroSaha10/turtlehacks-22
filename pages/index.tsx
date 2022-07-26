import { getAllDocuments } from "../lib/sanity/util"

import Layout from "../components/Layout"

import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import WaveEffect from "../components/Home/WaveEffect"
import FAQ, { FrequentlyAskedQuestion } from "../components/Home/FAQ"

export async function getStaticProps({ preview = false }) {
  const faq = await getAllDocuments("faq", true, preview) as FrequentlyAskedQuestion[];
  // const sponsorsRaw = await getAllDocuments("sponsor", true, preview) as SponsorData[];
  // const siteSettings = (await getAllDocuments("siteSettings", false, preview))[0];

  /*
  const sponsors: SponsorList = {
      gold: sponsorsRaw.filter(({ tier }) => tier === "gold"),
      silver: sponsorsRaw.filter(({ tier }) => tier === "silver"),
      bronze: sponsorsRaw.filter(({ tier }) => tier === "bronze"),
      none: sponsorsRaw.filter(({ tier }) => tier === "none")
  };
  */

  return {
    props: {
      // sponsors,
      faq,
      // ...siteSettings
    },
    revalidate: 60
  };
}

export default function Home({ faq }: { faq: FrequentlyAskedQuestion[] }) {
  return (
    <Layout name="Home" noAnim home>
      <div id="home" /> {/* For scrolling to the top */}
      <Hero />
      <WaveEffect />
      <About />
      <WaveEffect reverse />
      <FAQ faq={faq} />
    </Layout>
  )
}
