
exports.handler = async (event) => {
  let whichDb = '==noDatabase==' //default, maybe overWrite below.
  goodOriginsArray = [
    'yyflytechfree.com',
    'yybulmabarebones.netlify.app'
  ]
  let originn =  event.headers.origin
  let originnMatch = ''
  originnMatch = goodOriginsArray.filter(item => originn.includes(item))  
  if (originnMatch.length > 0){
    console.log('origin matched.'+ originn)
    whichDb = process.env.whichDb //important. netlify env var.
  }//end if
  console.log('originn:')
  console.log(originn)
  console.log('21 whichDb:')
  console.log(whichDb)

  let mossy = process.env.MOSS_MASTER
  console.log('mossy:')
  console.log(mossy)
  console.log('reached line 23 of getEnvVars.js lambda')
  let response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(whichDb)
  }
  console.log('29 end of getEnvVars.js')
  return response
};