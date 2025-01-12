
import { createClient } from "@libsql/client"

// import { createClient } from '@supabase/supabase-js' 
// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const supabaseClient = createClient(supaUrl,supaAnonKey)
//  

exports.handler = async (event, context) => {
  console.log('11 running Netlify lambda function: readTurso')
  let turso1 = createClient({
    url: process.env.tursoDbUrl,
    authToken: process.env.tursoAuthToken
  })
  console.log('16 turso create client ran.')
  let qsParms = event.queryStringParameters
  console.log('18 querystring parameters:')
  console.log(qsParms)
  console.log('20 setting mySqlCmd:')
  let mySqlCmd = 'SELECT * FROM GUITARS'
    // "SELECT * FROM " + tblNm +
    // " WHERE " + keyFldNm  + ' = ' + keyFldVal 
  console.log('mySqlCmd:')
  console.log(mySqlCmd)
  // let res = await this.turso.execute(mySqlCmd)
  let res =  turso1.execute(mySqlCmd)
  .then(console.log('running .then of turso1 execute.'))
  .catch(console.log('ya hit an error.'))
  //
  //
  console.log('27 done not-awaiting turso execute.')
  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify('ratsyMatsy')
  }
  console.log('22 readTurso.js   myResponse.body:')
  console.log(myResponse.body)
  console.log('we reached the end of readTurso.js. ready to return.')
  return myResponse   
} // end export.handler 
