import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({Component, pageProps})=>(
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://github.com/Erik161'  />
        <link rel='stylesheet' href='https://www.linkedin.com/in/erikhern%C3%A1ndez161/' />
      </meta>
    </Head>
    <Component {...pageProps}/>
  </>
);


export default MyApp;