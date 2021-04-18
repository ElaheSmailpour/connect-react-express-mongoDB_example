
require('dotenv').config()
var express = require('express');


const app = express();

const dataRouter=require("./routes/data")

const verbindeDB = require("./mongo-db");
verbindeDB();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/send",dataRouter)


app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })

// im terminal npm run alles
