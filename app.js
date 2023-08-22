const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const User = require("./models/user");
const cors = require("cors");
const { error } = require("console");

const app = express();

const userRoutes = require("./routes/user");

app.use(cors());
app.use(bodyParser.json());
app.use(userRoutes);

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
