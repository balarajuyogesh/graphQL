let express = require('express');
let app = express();

// creating a Home route
app.get('/', (req, res) => res.send("Welcome to GraphQL with express"));
// Listen on port 8080
app.listen(8080, () => console.log('graphQL app is listening on port 8080'));