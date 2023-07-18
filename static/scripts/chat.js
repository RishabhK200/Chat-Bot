// Variable to store the user's selected option
let selectedOption = "";

// Function to handle the user's option selection
function handleOptionSelection(option) {
  selectedOption = option;

  let userHtml = '<p class="userText"><span>' + option + '</span></p>';
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(selectedOption);
  }, 1000);
}

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = "";
  let botResponse1 = "";

  if (userText === "1") {
    botResponse = "1) How do I register for courses?";
    botResponseans = "Course registration is typically done through the college's online student portal. You will need to log in with your student credentials and follow the instructions provided for course selection and registration." ;
    botResponse1 = "2) How many courses can someone register per semester?";
    botResponseans2 = "The number of courses you can register for per semester may vary depending on factors such as your academic program, credit load requirements, and any specific guidelines or policies set by the college. It is advisable to consult with your academic advisor or refer to the college's course catalog for the recommended course load." ;
  }
  
  else if (userText === "2") {
    botResponse = "1) How do I access campus library?";
    botResponseans = "The campus library is typically open to all students. You will need your student id card to access library services and resources. Library hours college hours only." ;
    botResponse1 = "2) What athletic and recreational facilities are available on campus?";
    botResponseans1 = "Colleges often have athletic and recreational facilities, such as fitness centers,  sports fields, tennis courts, and indoor/outdoor tracks. These facilities are typically available to students and may require a valid student id for access." ;
  }
  
  else if (userText === "3") {
    botResponse = "1) How do I access my class schedule?";
    botResponseans = "Your class schedule can typically be accessed through the college's online student portal . Once logged in, you should be able to view your enrolled courses, their meeting times, locations, and any other relevant details. " ;
    botResponse1 = "2) What should I do if I have to miss a class due to illness or an emergency?";
    botResponseans1 = "If you have to miss a class due to illness or an emergency, it is generally advisable to communicate with your professor as soon as possible. This may involve sending an email, submitting an absence notification through the college's online system, or following any specific procedures outlined by the professor. Additionally, you may need to provide any necessary documentation, such as a doctor's note, depending on the circumstances. " ;
  } 
  
  else if (userText === "4") {
    botResponse = "1) When do classes begin and end each semester or term?";
    botResponseans =  "The start and end dates of classes are usually outlined in the college's academic calendar. The academic calendar provides the official dates for the beginning and end of each semester or term, including any breaks or holidays. It is recommended to refer to the academic calendar to obtain the specific start and end dates for each semester or term." ;
    botResponse1 = "2) What are the deadlines for submitting assignments, papers, and projects?";
    botResponseans1 = "Deadlines for submitting assignments, papers, and projects are typically set by individual professors and can vary between courses. Professors usually include these deadlines in the course syllabus or announce them in class. It is important to carefully review the syllabus and note the specific deadlines for each course. ";
  } 
  
  else if (userText === "5") {
    botResponse = "1) What is the student code of conduct?";
    botResponseans =  "The student code of conduct is a set of rules, policies, and expectations that outline acceptable behavior and conduct for students at the college. It serves as a guide for maintaining a safe and respectful campus environment and defines the consequences for violating the code." ;
    botResponse1 = "2) Where can I find the student code of conduct?";
    botResponseans1 =  "The student code of conduct is typically available on the college's website or through the student affairs office. It is important to review and familiarize yourself with the code to understand the expectations and consequences associated with student behavior.";
  }

  let botHtml = '<p class="botText"><span>' + botResponse + '</br>' + botResponseans +  '</br>' + botResponse1 + '</br>' + botResponseans1 + '</span></p>';
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Clear the selected option for the next iteration
  selectedOption = "";
}

// Function to handle the user's text input
function getResponse() {
  let userText = $("#textInput").val();

  if (userText === "") {
    userText = "Invalid, enter value";
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // If the user has selected an option, handle the option selection
  if (selectedOption) {
    setTimeout(() => {
      handleOptionSelection(selectedOption);
    }, 1000);
  } else {
    setTimeout(() => {
      getHardResponse(userText);
    }, 1000);
  }
}

// Function for expanding
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

let N_message = "";

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hi, how may I help you?";
  let secondMessage = "Select the number from below";
  let thirdMessage_1 = "1) Course registration and Enrollment";
  let thirdMessage_2 = "2) Campus facilities and Services";
  let thirdMessage_3 = "3) Class Schedules and Attendance Policies";
  let thirdMessage_4 = "4) Academic deadlines and Important Dates";
  let thirdMessage_5 = "5) Student Code of Conduct and Disciplinary Policies";

  let firstBotMessageHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
  let secondBotMessageHTML = '<p class="botText"><span>' + secondMessage + '</span></p>';
  let thirdBotMessageHTML =
    '<p class="botText"><span>' +
    thirdMessage_1 +
    '</br>' +
    thirdMessage_2 +
    '</br>' +
    thirdMessage_3 +
    '</br>' +
    thirdMessage_4 +
    '</br>' +
    thirdMessage_5 +
    "</span></p>";

  document.getElementById("botStarterMessage").innerHTML = firstBotMessageHTML + secondBotMessageHTML + thirdBotMessageHTML;

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Handle the button response based on the sampleText
  handleOptionSelection(sampleText);
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

// Button click event handlers
function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("Heart clicked!");
}
