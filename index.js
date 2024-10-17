const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle POST requests
app.post('/webhook', (req, res) => {
    // Grab the payload from the request body
    const payload = req.body;
    
    // Send the payload back as a JSON response (for testing)
    res.status(200).json({
        message: 'Webhook received!',
        payload: payload
    });

    // Optionally log it to the console to see it in Netlify's logs
    console.log('Received Payload:', JSON.stringify(payload, null, 2));
});

// Root route to display instructions
app.get('/', (req, res) => {
    res.send(`
        <h1>Webhook Receiver</h1>
        <p>Send a POST request to /webhook with a JSON payload.</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
