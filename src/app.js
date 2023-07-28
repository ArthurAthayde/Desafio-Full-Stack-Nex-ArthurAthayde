require("dotenv");
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
    const port = process.env.PORT || 3030;
    app.listen(port, () => {
      console.log(`Listening to: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
