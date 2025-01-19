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
  let mySqlCmd = 'INSERT INTO '  + qsParms.tblNm +  ' ( '
  let mySqlCmdPart2 = ' '
  let mySqlCmdPart3 = ' ) VALUES ( '
  let mySqlCmdPart4 = ' '
  let mySqlCmdPart5 = ' ) RETURNING rowid, * '
  lastInsertRowId = 0
      
  for (const [fldKey, fldVal] of Object.entries(qsParms)) {
    if (fldKey!= 'tblNm'){
      console.log('iterating qsParms........')
      mySqlCmdPart2 +=  fldKey   + ', '
      mySqlCmdPart4 +=  "'" +fldVal + "'" + ', ' 
    }// end if
  }// end for
  mySqlCmdPart2= mySqlCmdPart2.slice(0, -2) // removes extra comma
  mySqlCmdPart4= mySqlCmdPart4.slice(0, -2) // removes extra comma
  mySqlCmd += mySqlCmdPart2 + mySqlCmdPart3 + mySqlCmdPart4 + mySqlCmdPart5  
  console.log('34 my plussed-up sql command:')
  console.log(mySqlCmd)
  let res =  await turso1.execute(mySqlCmd)
  console.log('33 done awaiting turso execute.')
  console.log('34 res:')
  console.table(res) //res has info about the newly inserted row.

  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(res)
  }
  console.log('we reached the end of aaTurso.js. ready to return.')
  return myResponse   
} // end export.handler 