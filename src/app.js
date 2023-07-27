const express = require("express");
const database = require("./database");

const userRoutes = require("./routers/user.routers");

const app = express();

app.use(express.json());
app.use(userRoutes);

database
  .authenticate()
  .then(() => {
    console.log("Database connected");
    app.listen(3030);
  })
  .catch((err) => {
    console.error(err);
  });
