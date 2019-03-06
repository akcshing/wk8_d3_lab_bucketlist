const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const parser = require("body-parser");
const path = require("path");

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));
app.use(parser.json());
