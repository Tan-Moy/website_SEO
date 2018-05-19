const express = require("express");
const config = require("./config");

const app = express();

//set views and templates
app.use(express.static("public"));
app.set("view engine", "ejs");

//defining routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/freshers", (req, res) => {
  res.render("freshers");
});

app.get("/profs", (req, res) => {
  res.render("profs");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
//set up the server
app.listen(config.port, () => {
  console.log(`running on ${config.port}`);
});
