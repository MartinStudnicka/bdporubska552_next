import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Martin Studnička';
export const siteTitle = 'Next.js ukázková webová stránka';

function Layout({children, home}) {
  return(
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Kurz jak vytvořit osobní webovou stránku pomocí Next.js' />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src='/images/ja-a-tom.jpg'
              className={utilStyles.border_circle}
              height={109}
              width={144}
              alt=''
            />
            <h1 className={utilStyles.heading_xxl}>{name}</h1>  
          </>
        ) : (
          <>
            <h2 className={utilStyles.heading_lg}>
              <Link href='/'>
                <a className={utilStyles.color_inherit}>{siteTitle}</a>
              </Link>
            </h2>
        </>  
        )}
      </header>
          
      <main>
        {children}
      </main>
          
      {!home && (
        <div className={styles.back_to_home}>
          <Link href="/">
            <a>← Zpět na hlavní stránku</a>
          </Link>
        </div>
      )}    
    </div>
  )
}

export default Layout