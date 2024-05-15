const express = require('express');
const app = express();

// Enable CORS for all origins
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Your other routes and middleware here...

// Start the server
const PORT = 8002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
