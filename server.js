const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname)); // or process.cwd()

app.listen(port, () => console.log(`Server listening on port ${port}!`));
