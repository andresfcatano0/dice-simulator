
let valid = false;
let rollNum;
let store = [0,0,0,0,0,0,0,0,0,0,0];
let output = 2;
let tbody = document.querySelector("tbody");
let timesRolled = document.querySelector("#timesRolled")

// Prompt the user to input a valid number of times to roll the dice
const runGame = () => {
	while (valid === false) {
		rollNum = Number(prompt("How many times do you want to roll the dice?"))
		if (rollNum !== NaN && rollNum > 0){
			valid = true;
			timesRolled.innerHTML = rollNum;
		}
	}
}

// Generate random dice number and store it in array
const arraypush = () => {
	for (let i = rollNum; i > 0; i--){
		dice = 0;
		dice = Math.floor(Math.random() * 11) + 2;
		store[dice - 2]++;
	}
}

// Genarate mesagge about number of times a value (from 2 to 12) was rolled
const message = () => {
	for (let i = 0; i < store.length; i++){
		// Calculate the percentage a specific number is rolled
		pct = Math.round((store[i] / rollNum) * 100);
		// Create message with additional details (The number 2 was rolled 11 times (11%))
		let details = "The number " + output + " was rolled " + store[output-2] + " times (" + pct + "%)";
		// Create row element and add it to the table
		let tr = document.createElement("tr");
		tr.innerHTML = (`<td>${output}</td><td>${store[output-2]}</td><td>${pct}%</td><td>${details}</td>`);
		tbody.appendChild(tr);

		output++;
	}
}

runGame();
arraypush();
message();


