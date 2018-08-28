const url = 'http://bands.com/api';

function log(message) {
    console.log(message);
}

//above is PRIVATE

//you must export to make it available
module.exports.log = log;

//you can name export anything
module.exports.api = url;


