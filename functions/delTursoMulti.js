import { createClient } from "@libsql/client"
exports.handler = async (event, context) => { //delTursoMulti.js by qs parms
  console.log('3 running Netlify lambda function: delTursoMulti.js')
  let turso1 = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  })
  console.log('8 delTursoMulti.js lambda create client has run.')
  let qsParms = event.queryStringParameters
  console.log('10aaa querystring parameters:')
  console.log(qsParms)
  console.log('12 delTursoMulti lambda setting mySqlCmd:')
  let mySqlCmd = 'DELETE FROM '  + qsParms.tblNm +  ' WHERE '
  let mySqlCmdPart2 = ' '
  let mySqlCmdPart3 = '  RETURNING rowid, * '
      
  for (const [fldNm, fldVal] of Object.entries(qsParms)) {
    if (fldNm!= 'tblNm'){
      console.log('delTursoMulti.js lambda iterating qsParms........')
      mySqlCmdPart2 +=  fldNm + ' = '
      + "'" + fldVal + "'"
      + ' and '
      console.log(mySqlCmdPart2)
    }// end if
  }// end for
  mySqlCmdPart2 = mySqlCmdPart2.slice(0, -5) // removes extra ' and '
  mySqlCmd += mySqlCmdPart2 + mySqlCmdPart3
  console.log('29 delTursoMulti.js lambda my new sql command:')
  console.log(mySqlCmd)
  let res =  await turso1.execute(mySqlCmd)
  console.log('32 delTursoMulti.js done awaiting turso execute.')
  console.log('33 res:')
  console.table(res) //res has info about the newly deleted row.

  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(res)
  }
  console.log('we reached the end of lambda delTursoMulti.js. ready to return.')
  return myResponse   
} // end export.handler 