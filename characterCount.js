const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("I am Genie! What wish would you like me to grant?: ", userString =>{
  let userStringCount  = userString.replace(/\s+/g, '').length;
  console.log(`${userString}`);
  console.log(`I cant give you that, but I know your sentence '${userString}'' has ${userStringCount} letters.`)
  rl.close();

});
