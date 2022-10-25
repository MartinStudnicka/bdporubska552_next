import Head from "next/head"
import Link from "next/link"


function HomePage() {
  return(
    <>
      <Head>
        <title>Domovská stránka</title>
      </Head>
      
      <h1 className="title">Hlavní stránka webu</h1>

      <ul>
        <li><Link href="/posts/clanek_1">První článek</Link></li>
        <li><Link href="/posts/clanek_2">Druhý článek</Link></li>
      </ul>
    </>
  )
}

export default HomePage