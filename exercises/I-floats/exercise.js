var numberOfStudents = 15;
var numberOfMentors = 8;
const total = numberOfMentors + numberOfStudents;
let percentageOfStudents = (numberOfStudents / total) * 100;
let percentageOfMentors = (numberOfMentors / total) * 100;
let roundedPercentageOfStudents = Math.round(percentageOfStudents);
let roundedPercentageOfMentors = Math.round(percentageOfMentors);
let message1 = "Percentage students: " + roundedPercentageOfStudents + "%";
let message2 = "Percentage mentors: " + roundedPercentageOfMentors + "%";
console.log(message1);
console.log(message2);
