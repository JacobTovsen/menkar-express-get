//Require in Express
const express = require('express');

//Create our express app
const app = express();

app.use( express.static('server/public') );

//start the server listening on the port
const port = 5000;
app.listen( port, () => {
    console.log('Listening on port', port);
});