import axios from "axios";

const headers = {
  Authorization: `Bearer ${'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJzRUNseXdhVnNxOURBMU1oMElNLTVFTUNsRU5WM1FMTnhuNlh1bDJoOVBnIn0.eyJleHAiOjE2NzI5Mzk3NDQsImlhdCI6MTY3MjkwMzc2NiwiYXV0aF90aW1lIjoxNjcyOTAzNzQ0LCJqdGkiOiI4YTExMzEwOS1hYTFhLTQyNWQtYTVkYi02NTczY2UwMjNhOTQiLCJpc3MiOiJodHRwczovL2F1dGgucGlydmVsaS5jb20vcmVhbG1zL3hyYWNvb24tZGVtbyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJiY2I1NjcyOC1mM2YxLTRmZjgtYTQ3ZC1kNGExOGFjMDgxOGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjcy1jYXJ0Iiwic2Vzc2lvbl9zdGF0ZSI6IjNlODRlZGMwLTlhMjktNDRjYS04MTkwLTI2OGJkN2I4NzUyYyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy14cmFjb29uLWRlbW8iLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJwcm9maWxlIGVtYWlsIiwic2lkIjoiM2U4NGVkYzAtOWEyOS00NGNhLTgxOTAtMjY4YmQ3Yjg3NTJjIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX2lkIjoiYmNiNTY3MjgtZjNmMS00ZmY4LWE0N2QtZDRhMThhYzA4MThjIiwibmFtZSI6ImlyYWtsaSBvY2RhbWVydmUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJpcmFrbGkyOEBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiaXJha2xpIiwiZmFtaWx5X25hbWUiOiJvY2RhbWVydmUiLCJlbWFpbCI6ImlyYWtsaTI4QGdtYWlsLmNvbSJ9.YS4lmgVNjz8NiE-Q4zqJA28rp5lWKaYlWOp0safUtU3-D7RAuhNxQfbwMJS-EwbQ0NfNP3Woq3UIRxUofwezLgJ2trnYbv8Ux95a57jFWIg8lDOfp_qsukeP5_F5pn_o4unHCmu9x4PeAECiYCPuc9vhbd2hgCE70fyojvk8uipvdVJHxpw2C5CV9cCBoxKvh90WIEFEIhWtDQ0wbheWK6z_qsOFjqqkE04Ymielf0U0jjR6ku13xD9hn321B0oJiPQGjWM3tMScWwCRHyhfOF39wuTVVWgPH4PU_qXDQhNmfRATh0M48pIx9nqbp-YVHERLJt9IrXxpteymgdPtMA'}`
}

const fetchApi = async (url, type) => {
  let ignore = false;
  let resp = await axios(`${process.env.API_URL}${url}`, {
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