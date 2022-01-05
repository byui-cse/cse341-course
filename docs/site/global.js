// window.onload = function(){
// favicon
var link = top.document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
var today = new Date();
var url = 'https://byui-cse.github.io/cse341-course/site/';
link.href = url + 'fav.png?';
if (today.getDay() == 6 || today.getDay() == 0)
  link.href = url + 'happy-fav.png?';
top.document.getElementsByTagName('head')[0].appendChild(link);
// }

// global constants
var g = {};

// course info
g.courseCode = 'CSE 341';
g.courseName = 'Backend Development II';
g.courseCodeName = g.courseCode + ' | ' + g.courseName;
g.courseMaterials = g.courseCode + ' - Course Materials';

// frequently used phrases
g.prepare1 = 'Prepare: Reading Material and Assignment';
g.prepare = 'Prepare: Reading Material';
g.teach = 'Teach: Team Activity';
g.ponder = 'Prove: Assignment';
g.reading =
  'For your technical reading and assignment this lesson, you will complete the following sections of the course. Remember, you can always accelerate or decelerate the speed of the videos with a Chrome extension like <a href="https://chrome.google.com/webstore/detail/video-speed-controller/nffaoalbilbmmfgbnbgppjihopabppdk?hl=en" target="_blank">this</a>. Academind also has frequent zip files with code that you can download that may be helpful.  The videos will go through your entire prove assignment for the week, so don\'t worry if they take you a while. Once you finish them, you will also be done with your assignment, just push to GitHub.';
g.reading2 =
  g.reading.split('. Academind also')[0] +
  '.  Now that you are working on your team project for the remainder of the semester, you will notice that not all of the readings will apply to your team project, however, these concepts will help with your professional development.';
g.teachTime =
  'Please spend at least 1 hour on this assignment before reviewing the solution.';
g.teachInstructor = "Instructor's Solution";
g.teachSolution =
  "As a part of this team activity, you are expected to look over a solution from the instructor, to compare your approach to that one. One of the questions on the I-Learn submission will ask you to provide insights from this comparison. <br><br> Please DO NOT open the solution until you have worked through this activity as a team for the one hour period. At the end of the hour, if you are still struggling with some of the core requirements, you are welcome to view the instructor's solution and use it to help you complete your own code. Even if you use the instructor's code to help you, you are welcome to report that you finished the core requirements, if you code them up yourself.";
g.proveSolution =
  "As a part of this prove assignment, you are expected to look over a solution from the instructor, to compare your approach to that one. <br><br> Please DO NOT open the solution until you have spent at least one hour working on this assignment. After you have spent at least an hour working on this assignment, you are welcome to view the instructor's solution and use it to help you complete your own code. Even if you use the instructor's code to help you, you can still recieve full credit for this assignment, if you code it yourself (please don't copy/paste any of the instructor code).";
g.teachSubmit =
  'When you have finished this activity, please fill out the assessment in I-Learn. You are welcome to complete any additional parts of this activity by yourself or with others after your meeting before submitting the assessment.';
g.ponderSubmit =
  '<h2>Submission</h2>' +
  '<ol>' +
  '<li><p>Ensure that your latest code is pushed to GitHub and Heroku.</p></li>' +
  '<li><p>Download this assignment\'s <a href="prove.txt" target="_blank">submission form</a>, fill it out, and submit it to I-Learn.</p></li>' +
  '</ol>';
g.project1req =
  "Your assignment for this lesson will be 100% dedicated to your personal E-commerce project for this portion of the semester. The E-Commerce project spans the first 7 weeks of the course. Similar to last lesson, your assignment for this lesson will follow the Academind videos very closely. By simply completing the code demonstrated in the videos and pushing to Heroku, you'll be eligible for 93% on this assignment. To review project requirements please <a href='../projectStuff/prj1-requirements.html'>read here</a>.";
g.project2req =
  'Your assignment for this lesson will be 100% dedicated to your team project for this portion of the semester. To review project requirements please select Project > Project 2 from the navbar, then select your project (ONLINE or CAMPUS). There will be a link for the requirements there. <br><img src="../projectStuff/projectRequirements.png" class="img-tutorial>';

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
g.u08 = 'Lesson ' + g.n08 + ' - Async Requests, REST APIs';
g.u09 = 'Lesson ' + g.n09 + ' - Working with REST';
g.u10 = 'Lesson ' + g.n10 + ' - Advanced Topics';
g.u11 = 'Lesson ' + g.n11 + ' - Async Await, Websockets, GraphQL';
g.u12 = 'Lesson ' + g.n12 + ' - Deployment and Testing';
g.u13 = 'Lesson ' + g.n13 + ' - Wrap Up';

// other repeated statements
g.otherUnofficial =
  'This is an unofficial listing of the course content. Please consult I-Learn for the official list of materials, including quizzes and due-dates.';
g.secondHalfProveMessage =
  '<div class="tips">Special note:<p> While this prove assignment contains very valuable information, the concepts found in this prove are not required to be implemented into ' +
  'the second project. These concepts are great stretch goals that can be added to the project and can help to reach 100%. This prove assignment can ' +
  "be done in your groups or done individually. <b>Don't spend over an hour working on this on your own. Please use the teacher solution after an hour to finish the assignment.</b></p></div>";
g.optionalReading =
  '<h4>These videos are optional</h4><p>The prepare quiz in I-learn will have questions from this reading. You may use the quiz to direct your study to help you find specific answers. You can find these answers in these videos, or by searching the web on your own. This quiz can be taken as many times as wish.</p>';

// youtube videos for weeks 8 and 9

let videos = [
  {
    order: 1,
    title: 'What is a RESTful API? | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=1',
    duration: '15',
  },
  {
    order: 2,
    title: 'Planning & First Steps | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=2',
    duration: '15',
  },
  {
    order: 3,
    title: 'Adding More Routes to the API | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=blQ60skPzl0&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=3',
    duration: '17',
  },
  {
    order: 4,
    title:
      'Handling Errors & Improving the Project Setup | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=4',
    duration: '10',
  },
  {
    order: 5,
    title:
      'Parsing the Body & Handling CORS | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=5',
    duration: '16',
  },
  {
    order: 6,
    title: 'MongoDB and Mongoose | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=6',
    duration: '36',
  },
  {
    order: 7,
    title: 'Mongoose Validation | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=7',
    duration: '19',
  },
  {
    order: 8,
    title: 'Managing Orders with Mongoose | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=8',
    duration: '22',
  },
  {
    order: 9,
    title:
      'Populating Queries with Mongoose | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=9',
    duration: '3',
  },
  {
    order: 10,
    title: 'Uploading an Image | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=10',
    duration: '22',
  },
  {
    order: 11,
    title: 'Adding User Signup | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=11',
    duration: '29',
  },
  {
    order: 12,
    title: 'Adding User Login & JWT Signing | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=12',
    duration: '15',
  },
  {
    order: 13,
    title: 'JWT Route Protection | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=13',
    duration: '16',
  },
  {
    order: 14,
    title: 'Adding Controllers | Creating a REST API with Node.js',
    url: 'https://www.youtube.com/watch?v=UVAMha41dwo&list=PL65RiY5tL51q4D-B63KBnygU6opNPFk_q&index=14',
    duration: '20',
  },
];
