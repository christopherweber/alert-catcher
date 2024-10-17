exports.handler = async function(event, context) {
  // Log the raw event body (Fastly's payload)
  console.log('Received Payload:', event.body);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Webhook received!',
      received_payload: event.body  // This sends the exact payload back in the response
    })
  };
};
