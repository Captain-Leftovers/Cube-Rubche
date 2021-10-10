const express = require("express");
const initHandlebars = require("./config/handlebars");
const app = express();
initHandlebars(app);
app.use(express.urlencoded({ extended: true }));
const routes = require("./config/routes");

app.use(express.static("static"));
app.use(routes);

app.listen(3000, () => {
  console.log("Application is running on http://localhost:3000");
});
