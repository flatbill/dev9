
import { createClient } from "@libsql/client"

// import { createClient } from '@supabase/supabase-js' 
// const supaUrl = process.env.supaUrl
// const supaAnonKey = process.env.supaAnonKey
// const supabaseClient = createClient(supaUrl,supaAnonKey)
//  

exports.handler = async (event, context) => {
  console.log('11 running Netlify lambda function: readTurso')
  let turso1 = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  })
  console.log('16 turso create client ran.')
  let qsParms = event.queryStringParameters
  console.log('18aaa querystring parameters:')
  console.log(qsParms)
  console.log(qsParms.tblNm)
  console.log(qsParms.make)
  zingo = 'Washburn'
  console.log('20 setting mySqlCmd:')
  // let mySqlCmd = 'SELECT * FROM guitars WHERE  make = "Washburn" '
  let mySqlCmd = 'SELECT * FROM '
  + qsParms.tblNm
  + ' WHERE  make = ' + '"Washburn" '
    // "SELECT * FROM " + tbl +
    // " WHERE " + keyFldNm  + ' = ' + keyFldVal 
  console.log('24 mySqlCmd:')
  console.log(mySqlCmd)
  // let res = await this.turso.execute(mySqlCmd)
  let res =  await turso1.execute(mySqlCmd)
  console.log('33 done awaiting turso execute.')

  console.log('28 res:')
  console.table(res)
    console.log('res.columns:')
    console.log(res.columns)
    console.log(res.columns[0])
    console.log('res.rows.length:')
    console.log(res.rows.length)
    console.log('res.rows[0]:')
    console.log(res.rows[0] )
    console.log('loop thru rows:')
    for (let x=0;x<res.rows.length;x++){
      console.log(res.rows[x]['make'])
      console.log(res.rows[x]['tone'])
      // if (tblNm=='qtQuestions'){
      //   console.log(res.rows[x]['id'])
      //   console.log(res.rows[x]['questTxt'])
      // } 
    }//end for

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
