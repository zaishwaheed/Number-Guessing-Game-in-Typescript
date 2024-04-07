import inquirer from "inquirer"; //npm pckage for taking input from user
do {
    const random_number = Math.floor(Math.random() * 6 + 1);
    let tries = 0;
    let win;
    while (tries != 3) {
        const myAnswer = await inquirer.prompt([{
                message: "Guess the number",
                type: "number",
                name: "answer"
            },
        ]);
        if (myAnswer.answer > 6) {
            console.log("Please enter numbers between 1-6!");
            break;
        }
        if (typeof myAnswer.answer !== "number") {
            console.log("INVALID INPUT!");
            break;
        }
        if (myAnswer.answer === random_number) {
            win = true;
            console.log("You win!");
            break;
        }
        else {
            console.log("Try again!");
            tries++;
        }
        if (tries == 3 && myAnswer.answer !== random_number) {
            win = false;
            console.log("You lose!");
            break;
        }
    }
    if (win === false) {
        let Replay = await inquirer.prompt([{
                message: "Do you want to replay?",
                type: "list",
                name: "replay",
                choices: ['Yes', 'No']
            },
        ]);
        if (Replay.replay != 'Yes') {
            console.log("Thankyou for playing.");
            break;
        }
        else {
            console.log("Starting new game...");
        }
    }
    if (win === true) {
        let Continue = await inquirer.prompt([{
                message: "Do you want to continue?",
                type: "list",
                name: "continue",
                choices: ['Yes', 'No']
            },
        ]);
        if (Continue.continue != 'Yes') {
            console.log("Thankyou for playing.");
            break;
        }
        else {
            console.log("Starting game...");
        }
    }
} while (true);
