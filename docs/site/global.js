// window.onload = function(){
    // favicon
    var link = top.document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    var today = new Date();
    var url = "https://byui-cse.github.io/cse341-course/site/";
    link.href = url + "fav.png?";
    if(today.getDay() == 6 || today.getDay() == 0) link.href = url + "happy-fav.png?";   
    top.document.getElementsByTagName("head")[0].appendChild(link);
// }

// global constants
var g = {};

// course info
g.courseCode = 'CSE 341';
g.courseName = 'Backend Development II';
g.courseCodeName = g.courseCode + ' | ' + g.courseName;
g.courseMaterials = g.courseCode + ' - Course Materials';

// frequently used phrases
g.prepare         = "Prepare: Reading Material";
g.teach           = "Teach: Team Activity";
g.ponder          = "Prove: Assignment";
g.reading         = "For your technical reading this week, you will complete the following sections of the course: ";
g.reading2        = g.reading.slice(0,-2) + ". Now that you are working on your team project for the remainder of the semester, you will notice that not all of the readings will apply to your team project. However, to continue your professional development and to be prepared for your prove assignments, you should be familiar with these concepts.";
g.teachTime       = "Please spend at least 1 hour on this assignment before reviewing the solution.";
g.teachInstructor = "Instructor's Solution";
g.teachSolution =
    "As a part of this team activity, you are expected to look over a solution from the instructor, to compare your approach to that one. One of the questions on the I-Learn submission will ask you to provide insights from this comparison. <br><br> Please DO NOT open the solution until you have worked through this activity as a team for the one hour period. At the end of the hour, if you are still struggling with some of the core requirements, you are welcome to view the instructor's solution and use it to help you complete your own code. Even if you use the instructor's code to help you, you are welcome to report that you finished the core requirements, if you code them up yourself.";
g.proveSolution =
    "As a part of this prove assignment, you are expected to look over a solution from the instructor, to compare your approach to that one. <br><br> Please DO NOT open the solution until you have spent at least one hour working on this assignment. After you have spent at least an hour working on this assignment, you are welcome to view the instructor's solution and use it to help you complete your own code. Even if you use the instructor's code to help you, you can still recieve full credit for this assignment, if you code it yourself (please don't copy/paste any of the instructor code)."
g.teachSubmit =
    'When you have finished this activity, please fill out the assessment in I-Learn. You are welcome to complete any additional parts of this activity by yourself or with others after your meeting before submitting the assessment.';
g.ponderSubmit =
    '<h2>Submission</h2>' +
    '<ol>' +
    '<li><p>Ensure that your latest code is pushed to GitHub and Heroku.</p></li>' +
    '<li><p>Download this assignment\'s <a href="prove.txt" target="_blank">submission form</a>, fill it out, and submit it to I-Learn.</p></li>' +
    '</ol>';
g.project1req =
    "Your assignment for this week will be 100% dedicated to your personal E-commerce project for this portion of the semester. To review project requirements please <a href='../projectStuff/prj1-requirements.html'>read here</a>.";
g.project2req =
    "Your assignment for this week will be 100% dedicated to your team project for this portion of the semester. To review project requirements please <a href='../projectStuff/prj2/prj2-requirements.html'>read here</a>.";

// module numbers
g.n01 = '01';
g.n02 = '02';
g.n03 = '03';
g.n04 = '04';
g.n05 = '05';
g.n06 = '06';
g.n07 = '07';
g.n08 = '08';
g.n09 = '09';
g.n10 = '10';
g.n11 = '11';
g.n12 = '12';
g.n13 = '13';

// module names
g.w01 = 'Lesson ' + g.n01 + ' - Introduction';
g.w02 = 'Lesson ' + g.n02 + ' - Client Pages in Node';
g.w03 = 'Lesson ' + g.n03 + ' - MongoDB';
g.w04 = 'Lesson ' + g.n04 + ' - Advanced Queries using GET';
g.w05 = 'Lesson ' + g.n05 + ' - Create, Read, Update, Delete (CRUD)';
g.w06 = 'Lesson ' + g.n06 + ' - Database Design';
g.w07 = 'Lesson ' + g.n07 + ' - Mongo and Mongoose';
g.w08 = 'Lesson ' + g.n08 + ' - In-depth REST Services';
g.w09 = 'Lesson ' + g.n09 + ' - Architecture';
g.w10 = 'Lesson ' + g.n10 + ' - Authentication Part 1';
g.w11 = 'Lesson ' + g.n11 + ' - Authentication Part 2';
g.w12 = 'Lesson ' + g.n12 + ' - Deployment';
g.w13 = 'Lesson ' + g.n13 + ' - Review and Final';

// Online Videos Course module names
g.u01 = 'Lesson ' + g.n01 + ' - Introduction';
g.u02 = 'Lesson ' + g.n02 + ' - Client Pages in Node';
g.u03 = 'Lesson ' + g.n03 + ' - MVC and CRUD';
g.u04 = 'Lesson ' + g.n04 + ' - Databases and NoSQL';
g.u05 = 'Lesson ' + g.n05 + ' - Sessions and Authentication';
g.u06 = 'Lesson ' + g.n06 + ' - Advanced Authentication';
g.u07 = 'Lesson ' + g.n07 + ' - Project Risk and Planning';
g.u08 = 'Lesson ' + g.n08 + ' - Advanced Topics';
g.u09 = 'Lesson ' + g.n09 + ' - Async Requests, REST APIs';
g.u10 = 'Lesson ' + g.n10 + ' - Working with REST';
g.u11 = 'Lesson ' + g.n11 + ' - Async Await, Websockets, GraphQL';
g.u12 = 'Lesson ' + g.n12 + ' - Deployment and Testing';
g.u13 = 'Lesson ' + g.n13 + ' - Wrap Up';

// other repeated statements
g.otherUnofficial =
    'This is an unofficial listing of the course content. Please consult I-Learn for the official list of materials, including quizzes and due-dates.';