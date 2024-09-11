const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://lorienygalvao:10102472980@cluster0.7kehm.mongodb.net/crud";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("conectado com o banco"))
  .catch((err) => console.log(err));

module.exports = mongoose;