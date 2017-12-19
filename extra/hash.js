var bcrypt = require('bcrypt-nodejs');

var hash = bcrypt.hashSync('test');
console.log(hash);

var hash2 = bcrypt.hashSync('test');
console.log(hash2);

console.log(bcrypt.compareSync("test", hash));
