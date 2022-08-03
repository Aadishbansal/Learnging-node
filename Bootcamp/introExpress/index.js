// import express from "express";
// import bodyParser from "body-parser";
const express = require("express");
const app = express();
// app.listen('3000',()=>{
//     console.log("this is listen data")
// })
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (requeset, response) => {
  // console.log(requeset);
  // response.send("<h1>Helo world</h1>");
  response.sendFile(__dirname + "/index.html");
  //   response.path(__dirname, "index.html").join("");
});
app.post("/", (req, res) => {
  let n1 = Number(req.body.n1);
  let n2 = Number(req.body.n2);
  res.send("this is the result of the calculation " + (n1 + n2));
  // res.send("this is post information ")
  // console.log(n1+n2)
});
app.get("/about", (request, response) => {
  response.send("<h1>Hello</h1>" + "<h1>Aadish Bansal</h1>");
});
app.listen(3001, function () {
  console.log("this is listen data");
});
