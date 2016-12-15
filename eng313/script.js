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
  "<h4>Oxford, Ohio -- 2014-2018</h4>"+
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
  var workText= "<h1>Work Experience</h1>"+
  "<h2>Enterprise Content Management Intern, <i>Westfield Insurance</i></h2>"+
  "<h4>May - August 2016</h4>"+
  " I worked for Westfield Insurance in the summer of 2016 assisting the Enterprise Content Management team."+
  " A majority of my time was used to aid in the company's transition to new software"+
  " for storing and retrieving data. My work at Westfield could be compared to that of a Business Systems Analyst. "+
  " Additionally I: "+
  "<ul><li>Led technical training sessions teaching business personel use new software</li>"+
  "<li>Created and maintained documentation for company software</li>"+
  "<li>Performed complex analyses on large software performance data sets</li>"+
  "<li>Created and presented analyses and projections for new technical initiatives</li></ul>"+
  "<h2>Intern, <i>Gemmis Technologies</i>"+
  "<h4>May - July 2015</h4>"+
  " I worked at Gemmis Technologies in the first half of the summer of 2015. While at"+
  " Gemmis, I worked hands on repairing and refurbishing desktop computers and"+
  " servers. I also shadowed technicians as we set up an maintained our customers' technical solutions."+
  " Additionally I:"+
  "<ul><li>Provided technical support for customers over the phone</li>"+
  "<li>Assisted in network installation and maintainence for small businesses</li></ul>";
  document.getElementById("content").innerHTML = workText;
}

function displayExperience(){
  var expText=""+
  "<h1>Additional Experience</h1>"+
  "<h2>HackMIT</h2>"+
  "<h4>Massachussets Institute of Technology, Fall 2016</h4>"+
  "<p>I attended HackMIT, the Massachussets Institute of Technology's largest hackathon in September of 2016."+
  " I entered the competition with friends from school, and MIT flew us out to Cambridge to compete."+
  " While at the hackathon we created a webservice that used IBM Watson's natural language processing"+
  " capabilities to analyze the tone of a conversation in real time.</p>"+
  "<p>I also took the opportunity while at the hackathon to meet with industry leaders and discussed"+
  " the state of software engineerin as a field, as well as sitting in on tech demontrations from companies like Microsoft and Disney.</p>"+
  "<h2>Hack OHI/O</h2>"+
  "<h4>The Ohio State University, Fall 2015</h4>"+
  "<p>Hack OHI/O was the first hackathon I attended, in November of 2015, and while I did not enter anything into the competition,"+
  " I took the opportunity to meet with many industry leaders and their representatives. I also taugh myself very basic Android development"+
  " while at the hackathon.</p>";
  document.getElementById("content").innerHTML = expText;
}
