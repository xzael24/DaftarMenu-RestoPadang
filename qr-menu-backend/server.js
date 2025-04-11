// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const menuRoutes = require("./routes/menu");
app.use("/api/menu", menuRoutes);

app.listen(port, () => {
  console.log(`Server jalan di http://localhost:${port}`);
});
