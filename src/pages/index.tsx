import Head from 'next/head'
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import { BannerHome } from '../components/BannerHome';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projeto Blog</title>
        <meta name="description" content="Tutorias" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main} style={{"height": '1000px'}}>
        
        <BannerHome />

      </main>
    </div>
  )
}

export function getServerSideProps({}: GetServerSideProps){
  

  return {
    props : {

    }
  }
}