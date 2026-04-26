import Script from 'next/script'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <>
      <Script
        defer
        src="https://umami.nicolas-coutin.com/script.js"
        data-website-id="07774cc1-2c10-43f2-a891-dd0f59e4c338"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}

export default Application
