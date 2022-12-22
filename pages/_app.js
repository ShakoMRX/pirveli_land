import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../src/Layout/Header'
import Layout from '../src/Layout/Layout'
import { ScrollProvider, UserProvider } from '../src/store';
import '../styles/globals.scss'

const fetchApi = async (url, type) => {


  let resp = await fetch(`${process.env.API_URL}${url}`, {
    headers: { 'Authorization': `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzE3MzE3OTUsImlhdCI6MTY3MTY5NTgwOCwiYXV0aF90aW1lIjoxNjcxNjk1Nzk1LCJqdGkiOiIxYjUyNTlmMi1mYmI1LTQ2MmYtODcyYS01YWM5NDEwMGQ2ZTMiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiY2I1NjcyOC1mM2YxLTRmZjgtYTQ3ZC1kNGExOGFjMDgxOGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjViNzZjZjY0LTI4MmItNDIyNC1hNDI3LTA1YjJlZTAzMzU5YSIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNWI3NmNmNjQtMjgyYi00MjI0LWE0MjctMDViMmVlMDMzNTlhIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiYmNiNTY3MjgtZjNmMS00ZmY4LWE0N2QtZDRhMThhYzA4MThjIiwibmFtZSI6ImlyYWtsaSBvY2RhbWVydmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpcmFrbGkyOEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJvY2RhbWVydmUiLCJlbWFpbCI6ImlyYWtsaTI4QGdtYWlsLmNvbSJ9.BSDnwowOOfvFdUxWuHqZnculD_8cnSLTepetq34noNj21eWLMJP2VHUg6KPCnVMT0z6FXgWymN3SIzNjrWw2HyfKz1ErKKITxwZeS2GEbtTLFn698LSiYBk-Nu23r-q3KfZTalLVSpE1C98wk2iLVT-fs9cWPUmBUM61TiQHAQUMytZqVWsdaenfJXCK3hD6fLfujTR9EkLN1ZtF1c6LUjO3nSbQy1yi94Mz4xY6dM6sQA80yV0yOU1C1FWsgG2YGsI9kW5Cs-L4DiVA-J2SIXtXTBEgTNO2Uw0xQ2xTZ-B471YaeHnhFYBDYfYxbf-kC7chWO867sGKVxR1rdHong'}` }
  });

  return new Promise(async (res, rej) => {
    if (resp.status !== 401 || resp.status !== 500) {
      const data = type == 'json' ? await resp.json() : await resp.text();
      res({
        status: resp.status,
        data
      });
    } else {
      rej({
        status: resp.status,
        data: null
      })
    }
  });
}

function MyApp(ctx) {
  const { Component, pageProps, appData, user } = ctx;
  const [userData, setUserData] = useState({
    isLoading: true
  });


  useEffect(() => {
    fetchApi('/racoon-transactions/user')
      .then(async (r) => {

        if (r.status == 401 || r.status == 500) {
          setUserData({ isLoading: false })
          return;
        }

        let _usr = { ...userData, id: r };

        await fetchApi('/user/user/get-auth-user-avatar', 'json').then((r) => {
          _usr = { ..._usr, ...{ avatar: r.data } }
          console.log('r', r)
        }).catch(() => { });

        await fetchApi('/racoon-transactions/vouchers/get-user-points', 'json').then((r) => {
          _usr = { ..._usr, points: r.data };
        }).catch(() => { });;

        setUserData({ ..._usr, isLoading: false });

      }).catch((e) => {
        setUserData({ isLoading: false });
      });

  }, [])

  return <div>
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
    </Head>
    <UserProvider initialValue={userData}>
      <ScrollProvider>
        <Layout>
          <Header navigation={appData.navigation} />
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
