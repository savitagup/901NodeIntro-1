const express = require('express')  
const app = express();
const config = require("./config.json");


//log request handlers
app.use((request, response, next) => {  
  console.log(request.headers);
  next();
})

//generate random number
app.use((request, response, next) => {  
  request.chance = Math.random();
  next();
})

//put chance into response
app.get('/', (request, response) => {  
  response.json({
    chance: request.chance
  })
})

app.listen(config.port, () => {
	console.log(`Listening on port http://localhost:${config.port}`);
});

