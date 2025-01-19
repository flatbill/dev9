import { createClient } from "@libsql/client"
exports.handler = async (event, context) => {
  console.log('3 running Netlify lambda function: chgTurso.js')
  let turso1 = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  })
  console.log('8 chgTurso.js lambda create client has run.')
  let qsParms = event.queryStringParameters
  console.log('10aaa querystring parameters:')
  console.log(qsParms)
  console.log('12 chgTurso lambda setting mySqlCmd:')
  let mySqlCmd = ' UPDATE '  + qsParms.tblNm 
  let mySqlCmdPart2 = ' SET  '
  let mySqlCmdPart3 = ' WHERE '
  let mySqlCmdPart4 =  " " //build the where clause.
  let mySqlCmdPart5 = ' ' //'  RETURNING rowid, * '
      
  for (const [fldNm, fldVal] of Object.entries(qsParms)) {
    if (fldNm!= 'tblNm'  && fldNm!='rowid'){
      console.log('chgTurso.js lambda iterating qsParms........')
      mySqlCmdPart2 +=  fldNm + ' = '
      + "'" + fldVal + "'"
      + ' , '
    }
    if ( fldNm=='rowid'){
        mySqlCmdPart4 +=  fldNm + ' = '
        + "'" + fldVal + "'"
        + ' , '
    }
  }// end for 
  mySqlCmdPart2 = mySqlCmdPart2.slice(0, -3) // removes extra ' , '
  mySqlCmdPart4 = mySqlCmdPart4.slice(0, -3) // removes extra ' , '
  mySqlCmd += mySqlCmdPart2 +mySqlCmdPart3 +mySqlCmdPart4 +mySqlCmdPart5

  console.log('29 chgTurso.js lambda my new sql command:')
  console.log(mySqlCmd)
   let res =  await turso1.execute(mySqlCmd)
  console.log('32 chgTurso.js done awaiting turso execute.')
  console.log('33 res:')
  console.table(res) //res has info about the newly chgeted row.

  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(res)
  }
  console.log('we reached the end of labmda chgTurso.js. ready to return.')
  return myResponse   
} // end export.handler 