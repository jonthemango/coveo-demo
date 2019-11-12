const baseURL = "https://cloudplatform.coveo.com/rest/search/";
const token = "058c85fd-3c79-42a3-9236-b83d35588103"; // SHOULD BE SECRET
const axios = require("axios")


export async function Search(params){
    params.access_token = token;
    const results = await axios({
      method: "get",
      baseURL,
      params,
      responseType: "json"
    })
    
    return results;
  }
  