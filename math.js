const readline = require('readline');
///BEFORE YOU INSTALL A PACKAGE
//npm init: TO INITIALIZE THE ENVIORMENT
//npm install -S (packagename)


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many Meeseeks would you like to help Jerry work on his golf swing: ', num1 =>{
  console.log(`${num1}`);


  rl.question('Not enough, how many more would you like to make: ',(num2)=>{
    console.log(`${num2}`);
    console.log('wow, you got:');
    answer = parseInt(num1) + parseInt(num2);

    console.log(answer+ ' Meeseeks are now very angry.');
    rl.close();
  });
});
