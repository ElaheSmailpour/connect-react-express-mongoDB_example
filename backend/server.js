
require('dotenv').config()
var express = require('express');


const app = express();

const dataRouter=require("./routes/data")
const QuestionRouter=require("./routes/questions")
const verbindeDB = require("./mongo-db");
verbindeDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/send",dataRouter)
app.use("/questions",QuestionRouter)

app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })

// im terminal cd  backend und node server.js und noch eine terminal  cd alles und dann npm start 
