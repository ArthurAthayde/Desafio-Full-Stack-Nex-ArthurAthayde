const express = require("express");
const userRoutes = require("./routers/user.routers");

const app = express();

require("./database");

app.use(express.json());
app.use(userRoutes);

app.listen(3030);
