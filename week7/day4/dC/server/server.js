const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(bodyParser.json());
app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello From Express" });
});
app.post("/api/world", (req, res) => {
  console.log("Received POST body:", req.body);

  const userMessage = req.body.message;
  res.send({
    message: `I received your POST request. This is what you sent me: ${userMessage}`,
  });
});
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
