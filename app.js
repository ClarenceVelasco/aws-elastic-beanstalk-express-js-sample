const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yes, sir. I am attempting to fill a silent moment with non-relevant conversation.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
