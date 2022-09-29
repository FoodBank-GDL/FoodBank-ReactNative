const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routes

// app.use("/user", require("./routes/user.routes"));

app.get('/', (req, res) => {
    res.json({ 'ping': 'pong' });
});

module.exports = app;