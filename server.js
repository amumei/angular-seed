var express = require('express');
var app = express();
var port = process.env.port || 8080;

// LIVE-RELOAD
// ===========
app.use(require('connect-livereload')({
    port: 35729
}));

app.use("/", express.static(__dirname + "/www"));
app.listen(port);
console.log("Listening on port:", port);