const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const db = require("./db/mongoose");
const PORT = process.env.PORT || 5000;
const ApiRouter = require("./routes/Api");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use("/", ApiRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
