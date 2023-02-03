import axios from "axios";

// const headers = {
//   Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzI5Mzk3NDQsImlhdCI6MTY3MjkwMzc2NiwiYXV0aF90aW1lIjoxNjcyOTAzNzQ0LCJqdGkiOiI4YTExMzEwOS1hYTFhLTQyNWQtYTVkYi02NTczY2UwMjNhOTQiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiY2I1NjcyOC1mM2YxLTRmZjgtYTQ3ZC1kNGExOGFjMDgxOGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjNlODRlZGMwLTlhMjktNDRjYS04MTkwLTI2OGJkN2I4NzUyYyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiM2U4NGVkYzAtOWEyOS00NGNhLTgxOTAtMjY4YmQ3Yjg3NTJjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiYmNiNTY3MjgtZjNmMS00ZmY4LWE0N2QtZDRhMThhYzA4MThjIiwibmFtZSI6ImlyYWtsaSBvY2RhbWVydmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpcmFrbGkyOEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJvY2RhbWVydmUiLCJlbWFpbCI6ImlyYWtsaTI4QGdtYWlsLmNvbSJ9.YS4lmgVNjz8NiE-Q4zqJA28rp5lWKaYlWOp0safUtU3-D7RAuhNxQfbwMJS-EwbQ0NfNP3Woq3UIRxUofwezLgJ2trnYbv8Ux95a57jFWIg8lDOfp_qsukeP5_F5pn_o4unHCmu9x4PeAECiYCPuc9vhbd2hgCE70fyojvk8uipvdVJHxpw2C5CV9cCBoxKvh90WIEFEIhWtDQ0wbheWK6z_qsOFjqqkE04Ymielf0U0jjR6ku13xD9hn321B0oJiPQGjWM3tMScWwCRHyhfOF39wuTVVWgPH4PU_qXDQhNmfRATh0M48pIx9nqbp-YVHERLJt9IrXxpteymgdPtMA'}`
// }

// axios.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzU0NDMyODQsImlhdCI6MTY3NTQwNzMwNiwiYXV0aF90aW1lIjoxNjc1NDA3Mjg0LCJqdGkiOiJhODEzNTA4OC02YzM3LTRlYjQtOWNkZS1hOTdhZjhjNTMxYTkiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiIzNDhiMmU5OC0yYWRkLTRjMGUtYjU1OS0zNmU3MDQzMWM2MTMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjdjNTVlMmRlLTY5NmUtNDQ3ZS05ZjhjLWYzMGEzMWVkYWE3NCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUkVUQUlMX0NVU1RPTUVSIiwiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiUFJPVklERVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJzaWQiOiI3YzU1ZTJkZS02OTZlLTQ0N2UtOWY4Yy1mMzBhMzFlZGFhNzQiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInVzZXJfaWQiOiIzNDhiMmU5OC0yYWRkLTRjMGUtYjU1OS0zNmU3MDQzMWM2MTMiLCJuYW1lIjoic2hha28gZGF2aXRhc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTk3MDI0NDg1IiwiZ2l2ZW5fbmFtZSI6InNoYWtvIiwiZmFtaWx5X25hbWUiOiJkYXZpdGFzaHZpbGkifQ.LxLdqdRjA9tQC___9fa4yNPdfARXuYr8BSWa-ByvgOOS7a45sUDWlrVM4xkiOJwpLmO33obAgDJzdulhGmr7bEuh6oX8_z7ggMu1FVLcNRe8uCZsHy4ePPS8Ef6ilVlYx5cZndIOVx4ToLEYGPHNGZz8J2vr_AeHpjt5EWKl84etU8RwUDQ52HxqIVexdkjF3sJReYnBY53OUlGx7kMF3z1ljI1NVhl1bOk23YZqxPR9Xe0qbr3ZdadvY_G8eNxAF4M0SOb--vLVGXMdc-2PbzFDm0f-LIQStiTSXb2MCedkFFoGumxv1kThBdvs2VPpJ0YpRk_gtXXbEcuxdM3Aqg`
//   };
//   return config;
// });

const fetchApi = async (url, type) => {
  let ignore = false;
  let resp = await axios(`${process.env.API_URL}${url}`, {
  // let resp = await axios('https://jsonplaceholder.typicode.com/todos/1', {
    headers
  }).catch(e => {
    return { ...e.response };
  })

  return new Promise(async (res, rej) => {
    let valid = true;
    if (!resp.status || resp.status == 401 || resp.status == 500) {
      valid = false;
    }

    console.log('resp.status', resp)

    if (valid) {
      res({
        status: resp.status,
        data: resp.data
      });
    } else {
      rej({
        status: resp.status,
        data: null,
        error: resp.message
      })
    }
  });
}

export default fetchApi;