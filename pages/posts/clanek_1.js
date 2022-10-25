import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

function PrvniClanek() {
  return(
    <Layout>
      <Head>
        <title>První článek</title>
      </Head>
      
      <h1>První článek</h1>
      <h2>
        <Link href="/">Zpět na hlavní stránku</Link>
      </h2>
    </Layout>
    
  )
}

export default PrvniClanek