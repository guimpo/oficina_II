var express = require("express")
var consign = require("consign")
var PORT = 3000
var app = express()

consign()
  .include("libs/config.js")
  .then("db.js")
  .then("auth.js")
  .then("libs/middlewares.js")
  .then("routes")
  .then("libs/boot.js")
  .into(app)