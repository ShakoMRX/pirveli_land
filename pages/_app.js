import Header from '../src/Layout/Header'
import Layout from '../src/Layout/Layout'
import '../styles/globals.scss'

function MyApp(ctx) {
  const { Component, pageProps, appData } = ctx;

  console.log('ctx', ctx)
  return <Layout>
    <Header />
    <Component {...pageProps} appData={appData} />
  </Layout>
}

MyApp.getInitialProps = async function () {
  const appDataResp = await fetch('http://localhost:3000/api/hello');
  const appData = await appDataResp.json();

  return {
    appData
  }
}

export default MyApp
