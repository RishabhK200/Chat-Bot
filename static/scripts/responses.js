function getBotResponse(input) {
    //user inputs 

    if (input === "rock") {
        return " "; 
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}


// if (userText == "1") { 
//     userText = "1) How do I register for courses? ";
//     userText1 = "2) How many courses can someone register per semester? " ;
// }
// else if (userText == "2") { 
//     userText = "1) How many courses can someone register per semester? ";
// }
// else if (userText == "1") { 
//     userText = "1) How many courses can someone register per semester? "
// }
// else if (userText == "1") { 
//     userText = "1) How many courses can someone register per semester? "
// }
// if (userText == "1") { 
//     userText = "1) How many courses can someone register per semester? "
// }