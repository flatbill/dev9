
// import { createClient } from "@libsql/client"

// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const supabaseClient = createClient(supaUrl,supaAnonKey)
//  
// let turso = createClient({
//   url: process.env.TURSO_DATABASE_URL,
//   authToken: process.env.TURSO_AUTH_TOKEN
// })


exports.handler = async (event, context) => {
  console.log('15 running Netlify lambda function: readTurso')
  let qsParms = event.queryStringParameters
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify('ratsyMatsy')
  }
  console.log('22 readTurso.js   myresponse.body:')
  console.log(myResponse.body)
  console.log('we reached the end of readTurso.js. ready to return.')
  return myResponse   
} // end export.handler 
