const baseURL = "https://cloudplatform.coveo.com/rest/search";
const token = "058c85fd-3c79-42a3-9236-b83d35588103"; // SHOULD BE SECRET
const axios = require("axios")

axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}




export async function Search(data){

  const results = await axios({
    method: "post",
    baseURL,
    data,
    responseType: "json"
  })
  
  return results;
}