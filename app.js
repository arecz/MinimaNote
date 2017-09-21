var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.set ("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing")
}); 



/*app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening to: " + process.env.IP + process.env.PORT );
})*/

app.listen(3001, function(){
  console.log("Express: Server Started!");
});