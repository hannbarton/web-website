const express = require("express")

let  app = express()
app.get('/', (req, res) => res.send("HELLO FROM EXPRESS AND THE STARTING BOILERPLATE"));

app.use(express.static('public'))

app.listen(3000,  () => console.log("App listening on port 3000!"));
