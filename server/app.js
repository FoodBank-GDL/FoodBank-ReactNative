const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Routes

app.use("/user", require("./routes/user.routes"));
app.use("/campaign", require("./routes/campaign.routes"))
app.use("/donation", require("./routes/donation.routes"))


module.exports = app;