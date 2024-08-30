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
        <ul>
          <li>172.21.73.128/27</li>
          <li>fde4:416d:c1::/48</li>
        </ul>
        <h2>Nodes :</h2>
        <ul>
          <li><code>dn42-fr-ren1.nicolas-coutin.com</code> (Rennes, France) - 600/600 mbps</li>
          <li>More to come...</li>
        </ul>
        <h2>Services</h2>
        <ul>
          <li><a href="https://ping.ilshidur.dn42">https://ping.ilshidur.dn42</a> (work in progress...)</li>
          <li><a href="https://random.ilshidur.dn42">https://random.ilshidur.dn42</a> (work in progress...)</li>
          <li>More to come...</li>
        </ul>
        <h2>Routing policy</h2>
        <p>(Coming soon.)</p>
        <h2>Peering requests</h2>
        <p>Wireguard and MP-BGP are preferred. Please make sure to implement ROA checking. Your node must have reasonable tunnel bandwidth and ping.</p>
        <p>Contact me on keybase : <a href="https://keybase.io/ilshidur">ilshidur</a> — <a href="https://git.dn42.dev/dn42/registry/src/branch/master/data/person/ILSHIDUR-DN42">(find my infos on the dn42 repo)</a></p>
      </main>

      <Footer />
    </div>
  )
}
