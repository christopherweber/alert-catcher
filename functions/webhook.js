exports.handler = async function(event, context) {
    const payload = JSON.parse(event.body);
  
    // Log the payload to view it in Netlify's logs
    console.log('Received Payload:', JSON.stringify(payload, null, 2));
  
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received!',
        payload: payload
      })
    };
  };
  