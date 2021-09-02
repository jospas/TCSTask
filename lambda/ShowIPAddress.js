
/**
 * Shows the user's IP address
 */
exports.handler = async(event, context, callback) =>
{
  try
  {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: event.requestContext.identity.sourceIp
    };

    callback(null, response);
  }
  catch (error)
  {
    console.log('Failure detected', error);
    const response = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: error
    };

    callback(null, response);
  }
};
