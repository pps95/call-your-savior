const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/* Middleware to parse Post Body */
app.use('/', express.static('public'));
app.use(express.json());
app.use(require('./routes'));

app.listen(port, () => {
    console.log('Server is running...');
});

