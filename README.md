# Steps in building this application

```bash

mkdir first-app
cd first-app
mkdir app
touch .gitignore
nano .gitignore # `node_modules` in it
npm init # creates package.json file entrypoint: { "main": "server.js" }
touch README.md

git add .
git commit -m "Initial commit"
curl -u 'balarajuyogesh' https://api.github.com/user/repos -d '{"name":"graphQL"}' # Creates a repository in my github account
git remote set-url origin https://github.com/balarajuyogesh/graphQL.git
git push -u origin master

# Express setup
npm install express --save
touch server.js
```

```js
// server.js
let express = require('express');
let app = express();

// creating a Home route
app.get('/', (req, res) => res.send("Welcome to GraphQL with express"));
// Listen on port 8080: test it with `node server.js`
app.listen(8080, () => console.log('graphQL app is listening on port 8080'));
```