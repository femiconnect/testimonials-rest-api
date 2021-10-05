const express = require('express');
const testimonialData = require('./testimonials.json');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('<h1>Femiconnect says Hi!...</h1>');
});

app.get('/testimonials', (req, res) => {
   res.send(testimonialData);
});

app.listen(port, () => {
   console.log(`App is listening on port ${port}`);
});
