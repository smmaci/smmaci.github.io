function displayAbout(){
  var aboutText = "<h1>Hello World, my name is Samuel Mallamaci</h1>"+
  "<p>I am seeking a software development internship position in which my"+
  " technical skills and team-building skills will have the opportunity grow and be challenged.</p>"+
  "<h1>About Me</h1>"+
  "<p>I am currently a student at Miami University in Oxford Ohio.</br>My major"+
  " is Computer Science, and currently I am interested in web development and all things linux. I enjoy attending hackathons;"+
  " I attended HackMIT in September 2016"+
  " (unfortunatley my team and I did not place), and recently I helped"+
  " plan and organize my school's ACM Chapter's first hackathon for Local"+
  " Hack Day.</p>";
  document.getElementById("content").innerHTML = aboutText;
}
function displayEducation(){
  var eduText = "<h1>Education</h1>"+
  "<h2>Miami University</h2>"+
  "<h4>Oxford, Ohio</h4>"+
  "<table>"+
    "<tr>"+
      "<td>Degree</td>"+
      "<td>Bachelor of Science, <i>Computer Science</i></td>"+
    "</tr>"+
    "<tr>"+
      "<td>GPA</td>"+
      "<td>3.15 cummulative, 3.6 departmental</td>"+
    "</tr>"+
    "<tr>"+
      "<td>Relevant Coursework</td>"+
      "<td>Computer Networking</br>Computer Architecture</br>Intro to Databases"+
      "</br>Data Structures</br>Functional Programming</br>Intro to Software Engineering"+
      "</br>Discrete Mathmatics</br>Calculus 1,2</br></td>"+
    "</tr>"+
    "<tr>"+
      "<td>Leadership</td>"+
      "<td>Treasurer -- Association for Computing Machinery, 2016-17"+
      "</br>Photograpy Chair -- Theta Tau, Tau Delta chapter, 2016-17"+
      "</br>Teaching Assistant -- Fundamentals of Programming, Fall 2016</td>"
    "</tr>"+
  "</table>";
  document.getElementById("content").innerHTML = eduText;
}

function displayWork(){
  var workText;
  document.getElementById("content").innerHTML = workText;
}

function displayExperience(){
  var expText;
  document.getElementById("content").innerHTML = expText;
}
