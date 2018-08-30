const express = require('express') ; 
const app = express() ; 
const port = 3000;

app.use(require("./routes/index.js"));

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

	console.log(`Listening on port http://localhost:${port} ...`);
});

