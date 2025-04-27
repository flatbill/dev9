
exports.handler = async (event) => {
  let whichDb = 'noDatabase'

  goodOriginsArray = [
    'flytechfree.com',
    'yybulmabarebones.netlify.app'
  ]
  let originn =  event.headers.origin
  let originnMatch = ''
  // const partialMatches = array.filter(item => item.includes("an")); // returns ["banana"]
  // originnMatch = goodOriginsArray.filter(item => item.includes(originn))  
  // originnMatch = goodOriginsArray.filter(item => item.includes('bulmabarebones'))  
  originnMatch = goodOriginsArray.filter(item => originn.includes(item))  
  if (originnMatch.length > 0){
    console.log('origin matched.'+ originn)
    whichDb = process.env.whichDb
  }
  console.log('originn:')
  console.log(originn)
  console.log('21 whichDb:')
  console.log(whichDb)

  let mossy = process.env.MOSS_MASTER
  console.log('mossy:')
  console.log(mossy)
  console.log('reached line 27 of getEnvVars.js lambda')
  let response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'}, //billy fix?
      body: JSON.stringify(whichDb)
  }
  console.log('24 end of getEnvVars.js')
  return response
};