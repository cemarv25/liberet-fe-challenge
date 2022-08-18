import type { NextPage } from 'next';
import Head from 'next/head';
import Dishes from '../components/dishes';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Liberet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grow" style={{ backgroundColor: '#e4e4e4' }}>
        <Dishes />
      </main>
    </>
  );
};

export default Home;
