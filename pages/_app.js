import Header from '../src/Layout/Header'
import Layout from '../src/Layout/Layout'
import { ScrollProvider, UserProvider } from '../src/store';
import '../styles/globals.scss'

function MyApp(ctx) {
  const { Component, pageProps, appData, user } = ctx;

  return <UserProvider initialValue={user}>
    <ScrollProvider>
      <Layout>
        <Header />
        <Component {...pageProps} appData={appData} />
      </Layout>
    </ScrollProvider>
  </UserProvider>
}

MyApp.getInitialProps = async function ({ ctx: { req } }) {
  // const protocol = req.headers['x-forwarded-proto'] || 'http'
  // const baseUrl = `http://${req.headers.host}`
  // console.log('ctx', baseUrl)


  // const appDataResp = await fetch('http://localhost:3000' + '/api/hello');
  // const appData = await appDataResp.json();

  console.log('process.env.SHOP_LINK', process.env)

  const navigation = [
    { name: 'მაღაზია', url: process.env.SHOP_LINK, slug: 'shop' },
    { name: 'მედიქალი', url: process.env.MEDICAL_LINK, slug: 'medical' },
    { name: 'ვაუჩერი', url: process.env.VOUCHER_LINK, slug: 'voucher' },
    { name: 'გათამაშება', url: process.env.WIN_LINK, slug: 'winning' },
    { name: 'თამაშები', url: process.env.GAME_LINK, slug: 'game' },
  ]
  let resp;

  try {
    const userResp = await fetch(process.env.API_URL + '/racoon-transactions/user');
    const data = await userResp.text();
    resp = userResp.status == 200 ? {id: data} : null
  } catch {
    resp = null
  }

  return {
    appData: {
      navigation
    },
    user: resp
  }
}

export default MyApp
