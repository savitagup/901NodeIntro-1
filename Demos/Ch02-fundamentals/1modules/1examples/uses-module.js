//Best practice, use const - you wont be changing
//the module!
const importedModule = require('./example-module-exports');

console.log(importedModule);

importedModule.log( importedModule.api);

