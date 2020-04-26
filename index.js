const express = require('express');
const path = require('path');
var vcxroom = require('./vcxroom');
var bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

var app = express();
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.get('/getAllRooms', function (req, res) {
  vcxroom.getAllRooms(function (data) {
      res.status(200);
      res.send(data);
  });
});

// Route: To get information of a given room.
app.get('/getRoom/:roomName', function (req, res) {
  var room = req.params.roomName;
  vcxroom.getRoom(room, function (status,data) {
      res.status(200);
      res.send(data);
  });
});

// Route: To get Token for a Room
app.post('/createToken/', function (req, res) {
  vcxroom.getToken(req.body, function (status,data) {
      res.status(200);
      res.send(data);
  });
});

app.post('/createRoom/', function (req, res) {
  vcxroom.createRoom(function (status, data) {
      res.send(data);
      res.status(200);
  });
});

