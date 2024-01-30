import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.render("index.ejs",);
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

