const ejs = require("ejs");
const fs = require("fs");

let html = "";
// html = ejs.render("<h1>Hello there</h1>");
ejs.renderFile("./views/index.ejs", function(err, str) {
  if(err) throw err;
  html = str;
});

fs.writeFile("index.html", html, function(err) {
  if (err) throw err;
  console.log("Saved!");
});
