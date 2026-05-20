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
const SkillsList = skillsSection.querySelector("ul");

//create a for loop to iterate over skills Array; inside the loop, create a variable names skill to create a new list (li) element using createElement;

//still inside the loop, use the skill variable to set the inner text to the current Array element - access the Array element using the bracket notation;
for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);

//skill is my <li> element; skills[i] is the current skill name like HTML etc.;
const skill = document.createElement("li");
skill.innerText = skills[i];

//append the skill element to the skillsList element using the appendChild method;
SkillsList.appendChild(skill);

}

//save and refresh your browser to see list of skills beneath the "Skills" heading;
