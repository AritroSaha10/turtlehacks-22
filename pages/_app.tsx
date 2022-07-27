import { LazyMotion, domAnimation } from 'framer-motion'
import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
