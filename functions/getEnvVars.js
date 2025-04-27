
exports.handler = async (event) => {
  goodOriginsArray = [
    'flytechfree.com',
    'bulmabarebones.netlify.app'
  ]
  let originn =  event.headers.origin
  let originnMatch = ''
  // const partialMatches = array.filter(item => item.includes("an")); // returns ["banana"]
  // originnMatch = goodOriginsArray.filter(item => item.includes(originn))  
  // originnMatch = goodOriginsArray.filter(item => item.includes('bulmabarebones'))  
  originnMatch = goodOriginsArray.filter(item => originn.includes(item))  
  if (originnMatch.length > 0){
    console.log('origin matched.'+ originn)
  }
  console.log('originn:')
  console.log(originn)
  let whichDb = process.env.whichDb
  console.log('4 process.env.whichDb:')
  console.log(whichDb)

  let mossy = process.env.MOSS_MASTER
  console.log('mossy:')
  console.log(mossy)
  console.log('reached line 22 of getEnvVars.js lambda')
  let response = {
      statusCode: 200,
      headers: {'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify(whichDb)
  }
  console.log('24 end of getEnvVars.js')
  return response
};