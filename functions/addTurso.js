import { createClient } from "@libsql/client"
exports.handler = async (event, context) => {
  console.log('11 running Netlify lambda function: addTurso')
  let turso1 = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  })
  console.log('16 turso create client ran.')
  let qsParms = event.queryStringParameters
  console.log('18aaa querystring parameters:')
  console.log(qsParms)
  console.log('27 setting mySqlCmd:')
  //  let mySqlCmdExample =
  // "INSERT INTO " + tblNm 
  // +  ' ( '  + fldNms  + ' ) VALUES ( ' + fldVals + ' )'

  let mySqlCmd = 'INSERT INTO '  + qsParms.tblNm +  ' ( '
  let mySqlCmdPart2 = ' '
  let mySqlCmdPart3 = ' ) VALUES ( '
  let mySqlCmdPart4 = ' '
  let mySqlCmdPart5 = ' )'
  //  OUTPUT Inserted.ID ???
      
  for (const [key, value] of Object.entries(qsParms)) {
    if (key!= 'tblNm'){
      console.log('iterating qsParms........')
      mySqlCmdPart2 +=  key   + ','
      mySqlCmdPart4 +=  value + ', ' 
    }// end if
  }// end for

  mySqlCmd += mySqlCmdPart2 + mySqlCmdPart3 + mySqlCmdPart4 + mySqlCmdPart5
  console.log('40 my plussed-up sql command:')
  console.log(mySqlCmd)
  let res =  await turso1.execute(mySqlCmd)
  console.log('33 done awaiting turso execute.')
  // console.log('28 res:')
  // console.table(res)
  // console.log('res.columns:')
  // console.log(res.columns)
  // console.log(res.columns[0])
  // console.log('res.rows.length:')
  // console.log(res.rows.length)
  // console.log('res.rows[0]:')
  // console.log(res.rows[0] )

  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(res)
  }

  // console.log('22 addTurso.js   myResponse.body:')
  // console.log(myResponse.body)
  console.log('we reached the end of aaTurso.js. ready to return.')
  return myResponse   
} // end export.handler 