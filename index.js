const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

var app = express();
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/getAllRooms', function (req, res) {
  console.log('rooms');
  res.send('Ok');
});

