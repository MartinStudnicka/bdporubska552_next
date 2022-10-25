import Link from "next/link"
import Head from "next/head"

function DruhyClanek() {
  return(
    <>
      <Head>
        <title>Druhý článek</title>
      </Head>
      
      <h1>Druhý článek</h1>
      <h2>
        <Link href="/">Zpět na hlavní stránku</Link>
      </h2>
    </>
    
  )
}

export default DruhyClanek