const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

		console.log("Operand: ",mathSymbol);
		console.log("First Number ",num1);
		console.log("Second Number ",num2);
		
	if(mathSymbol === "+")
		{console.log(num1+num2)}

	if(mathSymbol === "-")
	{console.log(num1-num2)};

	if(mathSymbol === "*")
	{console.log(num1*num2)};

	if(mathSymbol === "/")
     {console.log(num1/num2)};

	if(mathSymbol === "root")
	{console.log(Math.sqrt(num1))};
	{console.log(Math.sqrt(num2))};


	// This line closes the connection to the command line interface.
	reader.close()

});
