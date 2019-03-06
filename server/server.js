const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const path = require("path");
const parser = require("body-parser");
const createRouter = require("./helpers/create_router.js");

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));
app.use(parser.json());



app.use("/api/bucketlist", createRouter)



app.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});
