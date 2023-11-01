const express = require("express");
const CORS = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const dbURL = "mongodb://localhost:27017/userData";

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) =>
    app.listen(PORT, () => {
      console.log("Started at ==>", PORT);
    })
  )
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CORS());

app.post('/asd', (req,res) =>{
  // const username = req.body.username;
  console.log(req);
 return res.send("hiuo")

})