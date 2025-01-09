import { createClient } from "@libsql/client"
// let tursoUrl = process.env.tursoDbUrl
// let tursoAuthToken = process.env.tursoAuthToken
// let tursoClient = createClient()
this.turso = createClient({
  url: process.env.tursoDbUrl,
  authToken: process.env.tursoAuthToken
})

exports.handler = async (event) => {
  // let whichDba = process.env.API_KEY
  let whichDb = process.env.whichDb
  console.log('4 process.env.whichDb:')
  console.log(whichDb)
  let mossy = process.env.MOSS_MASTER

  console.log('mossy:')
  console.log(mossy)
  console.log('reached line 6 of getEnvVars.js lambda')
  const response = {
      statusCode: 200,
      body: JSON.stringify('7 Hello from Lambda!'),
  };
  return response;
};