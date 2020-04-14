const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', function (req, res) {
	res.send('hello world');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
