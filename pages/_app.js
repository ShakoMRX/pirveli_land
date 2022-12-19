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

MyApp.getInitialProps = async function ({ctx: {req}}) {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
  console.log('ctx', baseUrl)
  const appDataResp = await fetch(baseUrl + '/api/hello');
  const appData = await appDataResp.json();

  return {
    appData
  }
}

export default MyApp
