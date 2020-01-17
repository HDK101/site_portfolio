const ejs = require("ejs");
const fs = require("fs");

html = ejs.render("<h1>Hello there</h1>");
console.log(html);

fs.writeFile("index.html", html, function(err) {
  if (err) throw err;
  console.log("Saved!");
});
