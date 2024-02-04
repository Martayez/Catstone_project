import express from "express";
import axios from "axios";
import ejs from "ejs";
import bodyParser from "body-parser";
import { type } from "os";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    try{
        const response_fact = await axios.get("https://catfact.ninja/fact");
        console.log(response_fact.data.fact);
        const response_pic = await axios.get("https://api.thecatapi.com/v1/images/search");
        // console.log(Object.keys(response_pic));
        console.log(response_pic.data[0].url);
        res.render("index.ejs", {
            fact: response_fact.data.fact,
            picture: response_pic.data[0].url
        });
    } catch (error){
        console.error("Failed to make request:", error.message);
        res.status(500).send("Failed to etch activity");
    }
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

