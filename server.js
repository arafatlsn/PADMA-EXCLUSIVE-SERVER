const app = require("./index");
const mongoose = require("mongoose")
const port = 5000;

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  try{
    await mongoose.connect("mongodb://127.0.0.1:27017/padma-exclusive");
  app.listen(port, () => {
    console.log("Server is running!");
  });
  } catch(err){
    console.log(err?.message)
  }
}
