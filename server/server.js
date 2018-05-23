//Require in Express
const express = require('express');

//Create our express app
const app = express();

app.use( express.static('server/public') );

//start the server listening on the port
// dont forget to update package.json "start":"node server/server.js",
const port = 5000;
app.listen( port, () => {
    console.log('Listening on port', port);
});

app.get('/quote', (req, res) => {
    console.log('Handling the GET request for /quote');
    
    
    //might also send back a status code
    //res.sendStatus(404);
    
    //sending back data!  That you might put on the dom with jQuery!
    res.send('Just be yourself!');
});