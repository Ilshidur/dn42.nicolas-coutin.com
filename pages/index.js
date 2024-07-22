import Head from 'next/head'
import Script from 'next/script'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AS4242421769</title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://umami.nicolas-coutin.com/script.js" data-website-id="07774cc1-2c10-43f2-a891-dd0f59e4c338" />
      </Head>

      <main>
        <Header title="AS4242421769" />
        <p className="description">
          PORYGON network.
        </p>
        <h2>Nodes :</h2>
        <ul>
          <li><code>dn42-fr1.nicolas-coutin.com</code></li>
          <li>More to come...</li>
        </ul>
        <p>Contact me on keybase for peering requests : <a href="https://keybase.io/ilshidur">ilshidur</a> — <a href="https://git.dn42.dev/dn42/registry/src/branch/master/data/person/ILSHIDUR-DN42">(find my infos on the dn42 repo)</a></p>
      </main>

      <Footer />
    </div>
  )
}
