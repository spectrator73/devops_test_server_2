const express = require("express");
const app = express();
const port = 3065;

app.use(express.json());

app.post("/log", (req, res) => {
  const { message } = req.body;
  if (message) {
    console.log(message);
    res.status(200).send("Message logged");
  } else {
    res.status(400).send("No message provided");
  }
});

app.get("/message", (req, res) => {
  res.send("Hello, this is your message!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
