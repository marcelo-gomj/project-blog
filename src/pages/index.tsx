import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header-Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Blog</title>
        <meta name="description" content="Tutorias" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Header />

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
