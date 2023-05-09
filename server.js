require("dotenv").config();
const express = require("express");
const app = express();
require("./server/db/conn");
const cors = require("cors");
const router = require("./server/routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
