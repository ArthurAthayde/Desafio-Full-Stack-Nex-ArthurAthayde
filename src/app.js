const express = require("express");
const userRoutes = require("./routers/user.routers");

const app = express();
app.use(express.json());
app.use(userRoutes);

app.listen(3030);
