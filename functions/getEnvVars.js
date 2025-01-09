exports.handler = async (event) => {
  // let whichDba = process.env.API_KEY
  let whichDb = process.env.whichDb
  console.log('4 process.env.whichDb:')
  console.log(whichDb)
  console.log('reached line 6 of getEnvVars.js lambda')
  const response = {
      statusCode: 200,
      body: JSON.stringify('7 Hello from Lambda!'),
  };
  return response;
};