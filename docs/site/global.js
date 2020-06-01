// global constants
var g = {};

// course info
g.courseCode      = "CSE 341";
g.courseName      = "Backend Development II";
g.courseCodeName  = g.courseCode + " | " + g.courseName;
g.courseMaterials = g.courseCode + " - Course Materials";

// frequently used phrases
g.prepare         = "Prepare: Reading Material";
g.teach           = "Teach: Team Activity";
g.ponder          = "Prove: Assignment";
g.reading         = "For your technical reading this week, you will complete the following sections of the course: ";
g.reading2        = g.reading.slice(0,-2) + ". Now that you are working on your personal project for the remainder of the semester, you will notice that not all of the readings will apply to your personal project. However, to continue your professional development and to be prepared for your quizzes and final exam, you should be familiar with these concepts.";
g.teachTime       = "Please spend at least 1 hour on this assignment before reviewing the solution.";
g.teachInstructor = "Instructor's Solution";
g.teachSolution   = "As a part of this team activity, you are expected to look over a solution from the instructor, to compare your approach to that one. One of the questions on the I-Learn submission will ask you to provide insights from this comparison. <br><br> Please DO NOT open the solution until you have worked through this activity as a team for the one hour period. At the end of the hour, if you are still struggling with some of the core requirements, you are welcome to view the instructor's solution and use it to help you complete your own code. Even if you use the instructor's code to help you, you are welcome to report that you finished the core requirements, if you code them up yourself.";
g.teachSubmit     = "When you have finished this activity, please fill out the assessment in I-Learn. You are welcome to complete any additional parts of this activity by yourself or with others after your meeting before submitting the assessment.";
g.ponderSubmit    = "<h2>Submission</h2>" + 
                     "<ol>" + 
                        "<li><p>Ensure that your latest code is pushed to GitHub and Heroku.</p></li>" + 
                        "<li><p>Download this assignment's <a href=\"prove.txt\" target=\"_blank\">submission form</a>, fill it out, and submit it to I-Learn.</p></li>" + 
                     "</ol>";
g.project1req     = "Your assignment for this week will 100% dedicated to your personal E-commerce project for this portion of the semester. To review project requirements please <a href='../projectStuff/prj1-requirements.html'>read here</a>."                     
g.project2req     = "Your assignment for this week will 100% dedicated to your personal project for this portion of the semester. To review project requirements please <a href='../projectStuff/prj2-requirements.html'>read here</a>."                     

// module numbers
g.n01 = "01";
g.n02 = "02";
g.n03 = "03";
g.n04 = "04";
g.n05 = "05";
g.n06 = "06";
g.n07 = "07";
g.n08 = "08";
g.n09 = "09";
g.n10 = "10";
g.n11 = "11";
g.n12 = "12";
g.n13 = "13";

// module names
g.w01 = "Lesson " + g.n01 + " - Introduction";
g.w02 = "Lesson " + g.n02 + " - Client Pages in Node";
g.w03 = "Lesson " + g.n03 + " - MongoDB";
g.w04 = "Lesson " + g.n04 + " - Advanced Queries using GET";
g.w05 = "Lesson " + g.n05 + " - Create, Read, Update, Delete (CRUD)";
g.w06 = "Lesson " + g.n06 + " - Database Design";
g.w07 = "Lesson " + g.n07 + " - Mongo and Mongoose";
g.w08 = "Lesson " + g.n08 + " - In-depth REST Services";
g.w09 = "Lesson " + g.n09 + " - Architecture";
g.w10 = "Lesson " + g.n10 + " - Authentication Part 1";
g.w11 = "Lesson " + g.n11 + " - Authentication Part 2";
g.w12 = "Lesson " + g.n12 + " - Deployment";
g.w13 = "Lesson " + g.n13 + " - Review and Final";

// Online Videos Course module names
g.u01 = "Lesson " + g.n01 + " - Introduction";
g.u02 = "Lesson " + g.n02 + " - Client Pages in Node";
g.u03 = "Lesson " + g.n03 + " - MVC and CRUD";
g.u04 = "Lesson " + g.n04 + " - Databases and NoSQL";
g.u05 = "Lesson " + g.n05 + " - Sessions and Authentication";
g.u06 = "Lesson " + g.n06 + " - Advanced Authentication";
g.u07 = "Lesson " + g.n07 + " - Project Risk and Planning. Midterm Exam";
g.u08 = "Lesson " + g.n08 + " - Advanced Topics";
g.u09 = "Lesson " + g.n09 + " - Async Requests, REST APIs";
g.u10 = "Lesson " + g.n10 + " - Working with REST";
g.u11 = "Lesson " + g.n11 + " - Async Await, Websockets, GraphQL";
g.u12 = "Lesson " + g.n12 + " - Deployment and Testing";
g.u13 = "Lesson " + g.n13 + " - Review and Final";

// other repeated statements
g.otherUnofficial = "This is an unofficial listing of the course content. Please consult I-Learn for the official list of materials, including quizzes and due-dates.";

g.survey = {
   01: "https://docs.google.com/forms/d/e/1FAIpQLSfJIMOdDVDDLQMk3VgG1GKRTwHtb1GRnGESw__bY1mW4T6u-w/viewform?usp=sf_link",
   02: "https://docs.google.com/forms/d/e/1FAIpQLSdTSZVNu5lYKriCKUuYEN01hak2e6bBwLxqmuYrMcrDIatwBg/viewform?usp=sf_link",
   03: "https://docs.google.com/forms/d/e/1FAIpQLSfjSKA1uuV_hZq90t_cXCOtpcqzqUXaQ8_ZO2CVfDLFY-xR9A/viewform?usp=sf_link",
   04: "https://docs.google.com/forms/d/e/1FAIpQLSfFp9YsH9UQgjcTxGD3wwaIhLV-a_dMhppaCpA6ao1jxYIQig/viewform?usp=sf_link",
   05: "https://docs.google.com/forms/d/e/1FAIpQLSeQat8yFfHoA7ReBshWe0pmL3NoxloUhhUCpv2f2dQJfE5gMw/viewform?usp=sf_link",
   06: "https://docs.google.com/forms/d/e/1FAIpQLScgioCbd9xKL20o6X9WLLK-CM8LROTrv89UkYjQi0oO2ng8BA/viewform?usp=sf_link",
   07: "https://docs.google.com/forms/d/e/1FAIpQLScJZfxySyppb38oPleHaA0HoY8ghnjrP810dBL4HfUTuZW2mw/viewform?usp=sf_link",
   08: "https://docs.google.com/forms/d/e/1FAIpQLSfIe-syqkCkclAZTZNqK2vrRT0-leXMY_eQMkw4YfwdCJvKOg/viewform?usp=sf_link",
   09: "https://docs.google.com/forms/d/e/1FAIpQLSdb_Wu8MxJ1JjCquE6BJeQyfy_iodD_-CYvRJWFM6Fzpbr7kw/viewform?usp=sf_link",
   10: "https://docs.google.com/forms/d/e/1FAIpQLSeP3ozF--pF5JU_-_5TsLPHgTQvA1DluRCiR_vLLlMrK2Le8g/viewform?usp=sf_link",
   11: "https://docs.google.com/forms/d/e/1FAIpQLScQuI2YH1gBF5UPYcMr7pFp6wkkcwn7EP3Iu9Uvgt9PE4BcDg/viewform?usp=sf_link",
   12: "https://docs.google.com/forms/d/e/1FAIpQLSey0AOk9hdewD2v22oP45wORMTXv7irL41DOpzvSLhG6TyuXw/viewform?usp=sf_link",
   13: "https://docs.google.com/forms/d/e/1FAIpQLSd_V_EFOgOos1H5q_WlPXwBPjK2mfuCzwEButs5fZ_mCC2Kzw/viewform?usp=sf_link"
}
g.surveyText = "<p>Once you have completed your work for the week, please fill out this survey:</p>";