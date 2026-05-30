// create a generated timestamp;
const d = new Date();
let year = d.getFullYear();

//create a new footer element;
const footer = document.createElement("footer");
footer.textContent = '©   ' + 'Vivien Khong      ' + year;
document.body.appendChild(footer);

//create skills array;
const skills = ["Personalized Instruction", "E-Commerce Operations", "HTML", "CSS", "JavaScript", "Git", "GitHub", "Adobe Illustrator"];

//create variable named skillsSection and use DOM selection;
const skillsSection = document.getElementById("skills");

//create a variable named SkillsList and use DOM selection to select the <ul> element;
const skillsList = skillsSection.querySelector("ul");

//create a for loop to iterate over skills Array; inside the loop, create a variable names skill to create a new list (li) element using createElement;

//still inside the loop, use the skill variable to set the inner text to the current Array element - access the Array element using the bracket notation;
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);

//skill is my <li> element; skills[i] is the current skill name like HTML etc.;
const skill = document.createElement("li");
skill.innerText = skills[i];

//append the skill element to the skillsList element using the appendChild method;
skillsList.appendChild(skill);

}

//save and refresh your browser to see list of skills beneath the "Skills" heading;

//create a variable names messageForm that uses "DOM Selection" to select the "leave_message" form by name attribute;
const messageForm = document.querySelector('form[name="leave_message"]');

//add an event listener "submit" to the messageForm element that handles the "submit" event;
messageForm.addEventListener("submit", function(event){

//stop page refresh - grab form values, keep messages on the screen and update live page;
event.preventDefault();

//create three new variables, one for each of the three form fields and retrieve the value from the event;
const usersName = event.target.usersName.value;
const usersEmail = event.target.usersEmail.value;
const usersMessage = event.target.usersMessage.value;

//log values to console;
console.log(usersName);
console.log(usersEmail);
console.log(usersMessage);

const messageSection = document.getElementById("messages");

const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");

newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span> wrote: ${usersMessage}</span>
  `;

// add removeButton "click" event listener;
const removeButton = document.createElement("button");

removeButton.innerText = "remove";

// for css styling;
removeButton.className = "remove-button";

removeButton.type = "button";

removeButton.addEventListener("click", function(){
  //inside callback function, create a var named entry that finds the button's parent element using DOM Traversal;
  const entry = removeButton.parentNode;
  
  //remove the entry element from the DOM using remove method;
  entry.remove();

  });

  //append the newMessage to the messageList element;
  //put the remove button inside the message;
  newMessage.appendChild(removeButton);

  //put the whole message onto the webpage;
  messageList.appendChild(newMessage);

//clear form after user clicks submit;
messageForm.reset();

});


 