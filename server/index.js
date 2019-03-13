const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

app.listen(PORT,  () => console.log("App listening on port 3000!"));
