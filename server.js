const express = require('express');
const testimonialData = require('./testimonials.json');

const app = express();

const port = process.env.PORT || 5000;

// to serve the css as static
app.use(express.static(__dirname));

app.get('/', (req, res) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.sendFile(__dirname + '/index.html');
});

app.get('/testimonials', (req, res) => {
   res.set('Access-Control-Allow-Origin', '*');
   res.send(testimonialData);
});

app.listen(port, () => {
   console.log(`App is listening on port ${port}`);
});
