import axios from "axios";

// const headers = {
//   Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzI5Mzk3NDQsImlhdCI6MTY3MjkwMzc2NiwiYXV0aF90aW1lIjoxNjcyOTAzNzQ0LCJqdGkiOiI4YTExMzEwOS1hYTFhLTQyNWQtYTVkYi02NTczY2UwMjNhOTQiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiY2I1NjcyOC1mM2YxLTRmZjgtYTQ3ZC1kNGExOGFjMDgxOGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjNlODRlZGMwLTlhMjktNDRjYS04MTkwLTI2OGJkN2I4NzUyYyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiM2U4NGVkYzAtOWEyOS00NGNhLTgxOTAtMjY4YmQ3Yjg3NTJjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiYmNiNTY3MjgtZjNmMS00ZmY4LWE0N2QtZDRhMThhYzA4MThjIiwibmFtZSI6ImlyYWtsaSBvY2RhbWVydmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpcmFrbGkyOEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJvY2RhbWVydmUiLCJlbWFpbCI6ImlyYWtsaTI4QGdtYWlsLmNvbSJ9.YS4lmgVNjz8NiE-Q4zqJA28rp5lWKaYlWOp0safUtU3-D7RAuhNxQfbwMJS-EwbQ0NfNP3Woq3UIRxUofwezLgJ2trnYbv8Ux95a57jFWIg8lDOfp_qsukeP5_F5pn_o4unHCmu9x4PeAECiYCPuc9vhbd2hgCE70fyojvk8uipvdVJHxpw2C5CV9cCBoxKvh90WIEFEIhWtDQ0wbheWK6z_qsOFjqqkE04Ymielf0U0jjR6ku13xD9hn321B0oJiPQGjWM3tMScWwCRHyhfOF39wuTVVWgPH4PU_qXDQhNmfRATh0M48pIx9nqbp-YVHERLJt9IrXxpteymgdPtMA'}`
// }

// axios.interceptors.request.use((config) => {
//   config.headers = {
//     ...config.headers,
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzUzNzg5NDEsImlhdCI6MTY3NTM0Mjk0MSwianRpIjoiODBmOTkwZTAtNDIzZC00N2ExLThkYzUtMThlMTcwOWRhZWZjIiwiaXNzIjoiaHR0cHM6Ly9hdXRoLnBpcnZlbGkuY29tL3JlYWxtcy94cmFjb29uLWRlbW8iLCJzdWIiOiIxZGUwYTJhOC1kNWQ0LTQ5ZDItODdjNy02NGQyMWFkMDI5Y2EiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJwYXNzd29yZC1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiODU4YjJmMmYtNzE3ZC00NGJhLThmOTQtNDY5ZWU5MTBjOTk3IiwiYWNyIjoiMSIsInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6Ijg1OGIyZjJmLTcxN2QtNDRiYS04Zjk0LTQ2OWVlOTEwYzk5NyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwidXNlcl9pZCI6IjFkZTBhMmE4LWQ1ZDQtNDlkMi04N2M3LTY0ZDIxYWQwMjljYSIsIm5hbWUiOiJUYXpvIER2YWxpc2h2aWxpIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNTkyMjUzMjUzIiwiZ2l2ZW5fbmFtZSI6IlRhem8iLCJmYW1pbHlfbmFtZSI6IkR2YWxpc2h2aWxpIn0.VB2oV4-m_1usdIhUlhlcyv-SZEuZMcdy88wJFlGaKZW-f9GHidbJO0d05QLE-vwv6tWG0qXt3fG1mwPpgyRcWiKt6pZE3Ykyf5trjMHXXW_41NUrlMv9_oKxtN5f6uZH2dOBZ3qiUQ6ndWh1c-nMEJiYVK2h6Iul_eMl89Of0MHazrnILx5t8jGCK2pjSM6XfRIguiICH-nXQnBarqM61u9nbVrKAyr8kBZ-c_ij3reJ3j4JSw4r0iySfh98lCHcuqz0i8QqP5VYyueVhxR_PdMeJbOTyx2K7cDlZ1LRLlqeuNaiuvAXQQAAP1lIuTjcR_MdDzRrvzycN0iGVZnLsA`
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