const express = require("express");

const app = express();

app.all("/", (req, res) => {
  res.write("it's working");
  res.end();
});

app.listen(5000, ()=>{
    console.log('Application is running on http://localhost:5000');
})