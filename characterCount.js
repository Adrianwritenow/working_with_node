const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you want?: ", userString =>{
  let userStringCount  = userString.replace(/\s+/g, '').length;
  console.log(`${userString}`);
  console.log(`cant give you that, but I know ${userString} has ${userStringCount} letters.`)
  rl.close();

});
