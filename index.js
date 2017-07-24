const leftPad = require('left-pad');

let names = ['Rick','Morty','Meeseks', 'Mr.Poopy-Butthole'];

names.forEach(function(name){
  console.log(leftPad(name,17,'>'));
});
