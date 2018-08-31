const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

// creating a Home route
app.get('/', (req, res) => res.send("Welcome to GraphQL with express"));
// Listen on port 8080
app.listen(PORT, HOST, () => console.log('graphQL app is listening on port 8080'));