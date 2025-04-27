// import { createClient } from "@libsql/client"
// let tursoUrl = process.env.tursoDbUrl
// let tursoAuthToken = process.env.tursoAuthToken
// let tursoClient = createClient()
// this.turso = createClient({
//   url: process.env.tursoDbUrl,
//   authToken: process.env.tursoAuthToken
// })

exports.handler = async (event) => {
  // let whichDba = process.env.API_KEY
  let whichDb = process.env.whichDb
  console.log('4 process.env.whichDb:')
  console.log(whichDb)
  let originn = req.get('origin')
  console.log(originn)
  let mossy = process.env.MOSS_MASTER

  console.log('mossy:')
  console.log(mossy)
  console.log('reached line 6 of getEnvVars.js lambda')
  let response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(whichDb)
  }
  console.log('24 end of getEnvVars.js')
  return response
};