const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
// const index = require('../client/index.html');

app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../client/dist/')))

// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`CSV App Listening on port ${port}!`))


