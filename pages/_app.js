import Head from 'next/head';
import { useEffect, useState } from 'react';
import ImageComponent from '../src/Components/ImageComponent';
import Header from '../src/Layout/Header'
import Layout from '../src/Layout/Layout'
import { ScrollProvider, UserProvider } from '../src/store';
import fetchApi from '../src/utils/fetch';
import '../styles/globals.scss'

const Languages = [
  { name: 'GB', slug: 'gb' },
  { name: 'KA', slug: 'ge' },
  { name: 'RU', slug: 'ru' },
]

const MessengerChatIcon = () => {
  return <div className='messenger-float'>
    <ImageComponent width={60} height={60} alt="Contact us on Messenger" src={'/assets/img/messenger.svg'} />
  </div>
}

function MyApp(ctx) {
  const { Component, pageProps, appData, user } = ctx;
  const [userData, setUserData] = useState({
    isLoading: !false
  });


  useEffect(() => {
    // setUserData({
    //   isLoading: false
    // })
    // return
    fetchApi('/racoon-transactions/user')
      .then(async (id) => {

        const avatar = await fetchApi('/user/user/get-auth-user-avatar', 'json').then((r) => {
          return r.data
        }).catch(() => {
          return null
        })

        const points = await fetchApi('/racoon-transactions/vouchers/get-user-points', 'json').then((r) => {
          return r.data
        }).catch(() => {
          return null
        });

        setUserData({ points, avatar, id: id, isLoading: false });
      }).catch((e) => {
        setUserData({ id: null, isLoading: false });
      });

  }, [])

  return <div>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Head>
    <UserProvider initialValue={userData}>
      <ScrollProvider>
        <Layout>
          <Header languages={Languages} navigation={appData.navigation} />
          <Component {...pageProps} appData={appData} />
          {/* <MobileMenu /> */}
          {/* <MessengerChatIcon /> */}
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
    { name: '?????????????????????', url: process.env.SHOP_LINK, slug: 'shop' },
    { name: '????????????????????????', url: process.env.MEDICAL_LINK, slug: 'medical' },
    { name: '???????????????????????????', url: process.env.VOUCHER_LINK, slug: 'voucher' },
    { name: '??????????????????????????????', url: process.env.WIN_LINK, slug: 'winning' },
    { name: '?????????????????????', url: process.env.GAME_LINK, slug: 'game' },
  ]
  let resp;

  const headers = {
    // 'Authorization': `Bearer ${process.env.appToken}`
  }

  // const userResp = await fetch(`${process.env.API_URL}/racoon-transactions/user`, { headers })

  // if (userResp.status == 200) {

  //   const data = await userResp.text();
  //   resp = userResp.status == 200 ? { id: data } : null;

  //   const userAvatarResp = await fetch(`${process.env.API_URL}/user/user/get-auth-user-avatar`, { headers })
  //   const userPointsResp = await fetch(`${process.env.API_URL}/racoon-transactions/vouchers/get-user-points`, { headers })


  //   if (userAvatarResp.status == 200) {
  //     const userAvatar = await userAvatarResp.json();
  //     resp = Object.assign(resp, { avatar: userAvatar })
  //   }

  //   if (userPointsResp.status == 200) {
  //     const userPoints = await userPointsResp.json();
  //     resp = Object.assign(resp, { points: userPoints })
  //   }

  //   resp = Object.assign(resp, { id: data });
  // }


  return {
    appData: {
      navigation
    },
    user: resp
  }
}

export default MyApp
