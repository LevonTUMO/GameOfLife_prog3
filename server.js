var express = require("express");

var app = express();

app.get("/", function(req, res){

res.send("<!DOCTYPE html><html><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>");

});
const port = 3000;
app.listen(port, function(){

console.log("Example is running on port "+port);

});