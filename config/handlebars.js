const handlebars = require("express-handlebars");

const initHandlebars = (app)=>{
    app.engine("hbs", handlebars({ 
        extname: "hbs",
        defaultLayout: "main"
       }));
      app.set("view engine", "hbs");
}

module.exports = initHandlebars;