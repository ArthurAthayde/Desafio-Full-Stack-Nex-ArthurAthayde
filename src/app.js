const express = require("express");
const cors = require("cors");
const database = require("./database");

const userRoutes = require("./routers/user.routers");

const app = express();

app.use(cors());

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(userRoutes);

database
  .authenticate()
  .then(() => {
    console.log("Database connected");
    const port = 3000;
    app.listen(port, () => {
      console.log(`Listening to: http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
