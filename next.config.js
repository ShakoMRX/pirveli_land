const path = require('path');

const appToken = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzE1NjUxNzcsImlhdCI6MTY3MTUyOTE5OCwiYXV0aF90aW1lIjoxNjcxNTI5MTc3LCJqdGkiOiI0YzFmNDY4Yi1lNjQxLTRhMjUtOGRjNC04Y2MwMDIxY2U5OWEiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiY2I1NjcyOC1mM2YxLTRmZjgtYTQ3ZC1kNGExOGFjMDgxOGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjRkODkzNjI4LWIwZjctNDQwOC1iYzE4LTcyYTJkMGNkZjhhMiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiNGQ4OTM2MjgtYjBmNy00NDA4LWJjMTgtNzJhMmQwY2RmOGEyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiYmNiNTY3MjgtZjNmMS00ZmY4LWE0N2QtZDRhMThhYzA4MThjIiwibmFtZSI6ImlyYWtsaSBvY2RhbWVydmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpcmFrbGkyOEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJvY2RhbWVydmUiLCJlbWFpbCI6ImlyYWtsaTI4QGdtYWlsLmNvbSJ9.SdehqtDUk6DNzTdUK2EqIckkLgRv10wFwmi44Upw8gS9OYVYkw4SNWMTtoEaxlz26esl17M0XNc_0JswJQMPB83PuzEqEVW6TvqF1a34A6Pg9t_IwrFVTxbakwa17VakUeQwQfHQOW3YBx9GPeVKpVYhiD-IUpy1BNhwxFSf5uDRcT3KzxZG27z3XmAYtao0rXj2oqeVUGU7_f2b1ixi2sDJd2boO0KbCeck9cYvwUVAvYmN_i4FgneNEkqpXvP_iDPGUCKVrm_xMYRbdaQdJWF7ALrhSMO4fHHoCJNrBhkfRV1sWkR3F9kd2i8B9rqKasu93vHYOuPgc216WlD2gQ';

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
    API_URL: 'https://pirveli.pirveli.com/api',
    AUTH_LINK: 'https://auth.pirveli.com/realms/xracoon-demo/protocol/openid-connect/auth?client_id=demo-client&response_type=code&scope=email&redirect_uri=http://pirveli.pirveli.com',
    PROFILE_LINK: 'https://profile.pirveli.com/',
    SHOP_LINK: 'https://shop.pirveli.com/',
    MEDICAL_LINK: 'https://medical.pirveli.com/',
    VOUCHER_LINK: 'https://vouchers.pirveli.com/',
    WIN_LINK: 'https://win.pirveli.com/',
    GAME_LINK: 'https://pirveli.pirveli.com/',
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
