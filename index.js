const express = require("express");
const initHandlebars = require('./config/handlebars');
const app = express();
initHandlebars(app);


app.use(express.static('static'))




app.get("/", (req, res) => {
  res.render('home', /* {layout: "test"} */)
});

app.get("/create", (req, res) => {
  res.render('create', /* {layout: "test"} */)
});

app.get("/about", (req, res) => {
  res.render('about', /* {layout: "test"} */)
});

app.all('*', (req, res)=>{
  res.render("404");
})



app.listen(3000, () => {
  console.log("Application is running on http://localhost:3000");
});
