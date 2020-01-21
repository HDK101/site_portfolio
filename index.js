const ejs = require("ejs");
const fs = require("fs");
const fsextra = require("fs-extra");

let html = "";
// html = ejs.render("<h1>Hello there</h1>");
ejs.renderFile("./views/index.ejs", function(err, str) {
  if(err) throw err;
  html = str;
});

fsextra.copy("./static", "./build/static", function(err) {
  if(err) throw err;
  console.log("Done!");
});

fs.writeFile("./build/index.html", html, function(err) {
  if (err) throw err;
  console.log("Saved!");
});

