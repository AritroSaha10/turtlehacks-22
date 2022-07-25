import Layout from "../components/Layout"
import Hero from "../components/Home/Hero"
import About from "../components/Home/About"
import WaveEffect from "../components/Home/WaveEffect"

export default function Home() {
  return (
    <Layout name="Home" noAnim home>
      <Hero />
      <WaveEffect />
      <About />
    </Layout>
  )
}
