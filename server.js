const serverless = require('serverless-http')
// server.js

const app = require("./express/server");

app.listen(3000, () => console.log("Local app listening on port 3000!"));

module.exports.handler = serverless(app);