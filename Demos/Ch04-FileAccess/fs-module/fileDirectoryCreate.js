var mkdirp = require('mkdirp');
console.log("Going to create directory tmp/test");

mkdirp('tmp/test',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});

