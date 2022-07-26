import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import WaveEffect from "../components/Home/WaveEffect"
import FAQ from "../components/Home/FAQ"

export default function Home() {
  return (
    <Layout name="Home" noAnim home>
      <Hero />
      <WaveEffect />
      <About />
      <FAQ />
    </Layout>
  )
}
