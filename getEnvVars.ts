async function getWhichDb() {
  // return 'turso' // billy kill this when Url works
  console.log('running getWhichDb in getEnvVars.ts')
  // let myUrl = 'https://qna.flytechfree.com/.netlify/functions/getFaunaOrSupabase'
  // let myUrl = 'https://functions.flytechfree.com/.netlify/functions/whichDb'
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/getEnvVars
  let response =   await fetch(myUrl) // magic double-await, promise / result
  let resObj   =   await response.json()
  // resObj is like: {getWhichDb: 'turso'}
  // let resTxt  =  await response.text() // .text() or .json() cant do both! 
  // looking at the response can only be done once !!!! ????
  console.log('resObj from getWhichDb:')
  console.log(resObj)
  // resObj is like: {getWhichDb: 'turso'}
  let myResponseString = resObj.getWhichDb
  if (myResponseString != 'fauna' && myResponseString != 'supabase') {
    myResponseString = 'turso' // default if something wrong with env Var.
  }
   return myResponseString // string 'fauna' or 'supabase' or 'turso'

} // end getWhichDb

// later, put  gets of other env vars  here.  
// like maybe 
// getTursoAuthToken() {
//  let myUrl = 'https://functions.flytechfree.com/.netlify/functions/getTursoAuthToken'
//  fetch myUrl, etc
// 
// }

export default  {
  getWhichDb: getWhichDb
} // end export
