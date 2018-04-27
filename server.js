const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const router = require("./server/routers/main.js");

app.set("view engine", "hjs");
app.set("views", __dirname + "/server/views");
app.use(express.static(__dirname + '/server/public'));

app.use(bodyParser.json());     // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: false
}));

app.use(router);

var server = app.listen(process.env.PORT || 8000, function(){
  console.log("Server is listening on port " + server.address().port);
});
