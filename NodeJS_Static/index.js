
var express = require("express");
var app = express();

app.use(express.static("public"));

var server = app.listen(5000, () => {
  console.log("Application running on port 5000")
});
\
