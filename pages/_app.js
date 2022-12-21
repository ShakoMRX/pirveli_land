import Head from 'next/head';
import Header from '../src/Layout/Header'
import Layout from '../src/Layout/Layout'
import { ScrollProvider, UserProvider } from '../src/store';
import '../styles/globals.scss'

function MyApp(ctx) {
  const { Component, pageProps, appData, user } = ctx;

  return <div>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Head>
    <UserProvider initialValue={user}>
      <ScrollProvider>
        <Layout>
          <Header />
          <Component {...pageProps} appData={appData} />
        </Layout>
      </ScrollProvider>
    </UserProvider>
  </div>
}

MyApp.getInitialProps = async function ({ ctx: { req } }) {
  // const protocol = req.headers['x-forwarded-proto'] || 'http'
  // const baseUrl = `http://${req.headers.host}`
  // console.log('ctx', baseUrl)


  // const appDataResp = await fetch('http://localhost:3000' + '/api/hello');
  // const appData = await appDataResp.json();

  const navigation = [
    { name: 'მაღაზია', url: process.env.SHOP_LINK, slug: 'shop' },
    { name: 'მედიქალი', url: process.env.MEDICAL_LINK, slug: 'medical' },
    { name: 'ვაუჩერი', url: process.env.VOUCHER_LINK, slug: 'voucher' },
    { name: 'გათამაშება', url: process.env.WIN_LINK, slug: 'winning' },
    { name: 'თამაშები', url: process.env.GAME_LINK, slug: 'game' },
  ]
  let resp;

  const headers = {
    // 'Authorization': `Bearer ${process.env.appToken}`
  }

  const userResp = await fetch(`${process.env.API_URL}/racoon-transactions/user`, { headers })

  if (userResp.status == 200) {

    const data = await userResp.text();
    resp = userResp.status == 200 ? { id: data } : null;

    const userAvatarResp = await fetch(`${process.env.API_URL}/user/user/get-auth-user-avatar`, { headers })
    const userPointsResp = await fetch(`${process.env.API_URL}/racoon-transactions/vouchers/get-user-points`, { headers })


    if (userAvatarResp.status == 200) {
      const userAvatar = await userAvatarResp.json();
      resp = Object.assign(resp, { avatar: userAvatar })
    }

    if (userPointsResp.status == 200) {
      const userPoints = await userPointsResp.json();
      resp = Object.assign(resp, { points: userPoints })
    }

    resp = Object.assign(resp, { id: data });
  }


  return {
    appData: {
      navigation
    },
    user: resp
  }
}

export default MyApp
