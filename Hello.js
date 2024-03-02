const express = require("express");
const app = express();
const db=require("./db");

const bodyParser=require('body-parser');
app.use(bodyParser.json());
const Person= require("./models/Person");

const personRoutes=require("./routes/personRoutes");
app.use("/person",personRoutes);
app.listen(3005, () => {
  console.log("Server is listening");
});
