'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send("Build $$_BUILD_$$ Release $$_RELEASE_$$");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);