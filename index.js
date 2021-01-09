const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);
app.get("/", (req, res, next) => {
  res.send("Welcome To Node Simple App");
});
server.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
