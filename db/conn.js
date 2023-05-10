mongoose = require("mongoose");
const DB = `mongodb+srv://bhaikigaming4:Fakeidemily12@cluster0.dktcedx.mongodb.net/mernstack?retryWrites=true&w=majority`;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection started"))
  .catch((error) => console.log(error.message));
