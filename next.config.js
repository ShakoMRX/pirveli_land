const path = require('path');

const appToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzUzNzg5NDEsImlhdCI6MTY3NTM0Mjk0MSwianRpIjoiODBmOTkwZTAtNDIzZC00N2ExLThkYzUtMThlMTcwOWRhZWZjIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiIxZGUwYTJhOC1kNWQ0LTQ5ZDItODdjNy02NGQyMWFkMDI5Y2EiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiODU4YjJmMmYtNzE3ZC00NGJhLThmOTQtNDY5ZWU5MTBjOTk3IiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6Ijg1OGIyZjJmLTcxN2QtNDRiYS04Zjk0LTQ2OWVlOTEwYzk5NyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6IjFkZTBhMmE4LWQ1ZDQtNDlkMi04N2M3LTY0ZDIxYWQwMjljYSIsIm5hbWUiOiJUYXpvIER2YWxpc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTkyMjUzMjUzIiwiZ2l2ZW5fbmFtZSI6IlRhem8iLCJmYW1pbHlfbmFtZSI6IkR2YWxpc2h2aWxpIn0.VB2oV4-m_1usdIhUlhlcyv-SZEuZMcdy88wJFlGaKZW-f9GHidbJO0d05QLE-vwv6tWG0qXt3fG1mwPpgyRcWiKt6pZE3Ykyf5trjMHXXW_41NUrlMv9_oKxtN5f6uZH2dOBZ3qiUQ6ndWh1c-nMEJiYVK2h6Iul_eMl89Of0MHazrnILx5t8jGCK2pjSM6XfRIguiICH-nXQnBarqM61u9nbVrKAyr8kBZ-c_ij3reJ3j4JSw4r0iySfh98lCHcuqz0i8QqP5VYyueVhxR_PdMeJbOTyx2K7cDlZ1LRLlqeuNaiuvAXQQAAP1lIuTjcR_MdDzRrvzycN0iGVZnLsA';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["flagicons.lipis.dev"],
  },
  serverRuntimeConfig: {
    appToken
  },
  env: {
    API_URL: 'https://pirveli.com/api',
    AUTH_LINK: 'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?client_id=demo-client&response_type=code&scope=email&redirect_uri=https://pirveli.com',
    REGISTER_LINK: 'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/registrations?client_id=demo-client&response_type=code&scope=email&redirect_uri=https://pirveli.com/login/oauth2/code/keycloak',
    PROFILE_LINK: 'https://profile.pirveli.com/',
    SHOP_LINK: 'https://shop.pirveli.com/',
    MEDICAL_LINK: 'https://medical.pirveli.com/',
    VOUCHER_LINK: 'https://vouchers.pirveli.com/',
    WIN_LINK: 'https://s3.pirveli.com/v1/api/getFile?id=6555',
    GAME_LINK: 'https://s3.pirveli.com/v1/api/getFile?id=6556',
    appToken
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
    ],
    prependData: `
      @import "sassync";
      @import "styles/variables.scss";
      @import "styles/mixins.scss";
    `, // prepend _css variables in all css documents
  },
}

module.exports = nextConfig
