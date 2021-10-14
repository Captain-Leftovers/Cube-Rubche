const express = require("express");
const initHandlebars = require("./config/handlebars");
const config = require("./config/config.json")[
  process.env.NODE_ENV || "development"
];
const initDb = require("./config/database");
const app = express();
initHandlebars(app);
app.use(express.urlencoded({ extended: true }));
const routes = require("./config/routes");

app.use(express.static("static"));
app.use(routes);

initDb(config.DB_CONNECTION_STRING).
then(() => {
  app.listen(config.PORT, () => {
    console.log(`Application is running on http://localhost:${config.PORT}`);
  });
})
.catch(err =>{
  console.log('Application init failed: ',err);
})
