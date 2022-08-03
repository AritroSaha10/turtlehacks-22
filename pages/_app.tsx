
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { LazyMotion, domAnimation } from 'framer-motion'
/*
import analytics from "../util/firebase/analytics"
import { logEvent } from "firebase/analytics"
*/

import '@styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // @ts-ignore GoatCounter is imported in _document.tsx
    window.goatcounter = { no_onload: true }
  }, []);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      // Initialize Firebase Analytics
      const logEventHandler = (url: string) => {
        /*
        logEvent(analytics(), "screen_view", {
          firebase_screen: url,
          firebase_screen_class: "web"
        });
        */

        if ("goatcounter" in window && window["goatcounter"]["count"] !== undefined) {
          // @ts-ignore GoatCounter is imported in _document.tsx
          window.goatcounter.count({
            path: url
          });
        }
      };

      router.events.on('routeChangeComplete', logEventHandler);
      logEventHandler(router.asPath); // Logs first page that the user visits

      // Remvove the event listener for firebase Analytics after unmount
      return () => {
        router.events.off('routeChangeComplete', logEventHandler);
      };
    }

  }, [router.events]);

  return (
    <LazyMotion features={domAnimation} strict>
      <Component {...pageProps} />
    </LazyMotion>
  )
}

export default MyApp
