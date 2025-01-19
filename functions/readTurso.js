import { createClient } from "@libsql/client"
exports.handler = async (event, context) => {
  console.log('11 running Netlify lambda function: readTurso')
  let turso1 = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN
  })
  console.log('8 turso create client ran.')
  let qsParms = event.queryStringParameters
  console.log('18aaa querystring parameters:')
  console.log(qsParms)
  // console.log(qsParms.tblNm)
  // console.log(qsParms.make)
  console.log('27 setting mySqlCmd:')
  let mySqlCmd = 'SELECT rowid, * FROM '  + qsParms.tblNm + ' WHERE '
  let mySqlCmdPart2 = ' '
  for (const [fldKey, fldVal] of Object.entries(qsParms)) {
      if (fldKey!= 'tblNm'){
        console.log('iterating qsParms........')
        mySqlCmdPart2 +=  fldKey + ' = '
        + "'" + fldVal + "'"
        + ' and '
        console.log(mySqlCmdPart2)
      }// end if
  }//end for
  mySqlCmdPart2 = mySqlCmdPart2.slice(0, -5) // removes extra ' and '
  mySqlCmd += mySqlCmdPart2
  console.log('40 my new sql command:')
  console.log(mySqlCmd)
  console.log('24 mySqlCmd:')
  console.log(mySqlCmd)
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

  let myResponse = {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body:  JSON.stringify(res.rows)
  }

  console.log('22 readTurso.js   myResponse.body:')
  console.log(myResponse.body)
  console.log('we reached the end of readTurso.js. ready to return.')
  return myResponse   
} // end export.handler 