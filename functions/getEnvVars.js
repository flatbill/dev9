exports.handler = async (event) => {
  // const whichDba = process.env.API_KEY
  const whichDb = process.env.whichDb
  console.log('reached line 4 of getEnvVars.js lambda')
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};