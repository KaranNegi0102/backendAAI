const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://karannegi0102:<k1a2r3a4n5>@cluster0.hqxsoo1.mongodb.net/TaskManagement"
);

mongoose.connection.on("connected", () => {
  console.log("DB COnnected");
});

mongoose.connection.on("error", (err) => {
  console.log("Error in connecting DB", err);
});

module.exports = mongoose;
