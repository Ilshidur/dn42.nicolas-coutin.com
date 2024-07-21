import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>AS4242421769</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AS4242421769" />
        <p className="description">
          PORYGON network.
        </p>
        <p>Nodes :</p>
        <ul>
          <li><code>dn42-fr1.nicolas-coutin.com</code></li>
        </ul>
        <p>Contact me on keybase for peering requests : <a href="https://keybase.io/ilshidur">ilshidur</a></p>
        <p>This site is a work in progress...</p>
      </main>

      <Footer />
    </div>
  )
}
