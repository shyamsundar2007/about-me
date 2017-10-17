var workExp = [{id: "1", company: "Continental Automotive", role: "Software engineer", period: "Aug 2015 - present", description: ""}, 
               {id: "2", company: "National University of Singapore", role: "Research engineer", period: "Sep 2012 - Jun 2015", description: ""}, 
               {id: "3", company: "National University of Singapore", role: "Lab Teaching Assistant", period: "Jun 2010 - Jun 2012", description: ""}, 
               {id: "4", company: "Sensor Networks and Applications Research Centre", role: "Research Intern", period: "May 2011 - Jul 2011", description: ""}, 
               {id: "5", company: "Data Storage Institute", role: "Research Intern", period: "May 2010 - Aug 2010", description: ""}];

var education = [{school:"National University of Singapore", subject:"Master of engineering [electrical and computer engineering]", score: "cumulative average point (CAP): 4.75 on 5.00", period: "Jan 2014 - Jul 2015", description: ""}, 
                 {school:"National University of Singapore", subject:"Bachelor of engineering [computer engineering]", score: "cumulative average point (CAP): 4.24 on 5.00 [2nd upper class honors]", period: "Aug 2008 - Jul 2012", description: ""}];

var projects = [{title: "Whatsapp statistics", description: "View converstation statistics from whatsapp conversations"},
               {title: "TOI Movie Scraper", description: "Scrape good movie reviews from Times of India and get notified on your phone"},
               {title: "Carousell notifier", description: "Get notified immediately on items you're looking for on Carousell"},
{title: "Intel 8088 processor interrupt service", description: "Music memory game playable over two different computers"},
{title: "Intel 8051 microprocessor", description: "Custom implementation of the data path, ALU, and sequencer of the Intel 8051 microprocessor"},
{title: "Real-time soccer controller using FPGAs", description: "Real-time AI soccer game using Xilinx Spartan-3A FPGA boards"},
{title: "Hardware PRESENT block cipher on FPGA", description: "Custom hardware accelerated PRESENT block cipher implementation"},
{title: "Java encrypted file transfer client", description: "DES encryption based secure file transfer client in Java"},
{title: "IVLE iOS app", description: "Mobile version of IVLE [student’s education portal] for the iPad"},
{title: "2D physics engine iPad game", description: "Clone of angry birds game using custom physics engine"}];

function createCardFor(work) {
  var col = document.createElement("div");
  var card = document.createElement("div");
  var img = document.createElement("img");
  var body = document.createElement("div"); 
  var title = document.createElement("h4");
  var subtitle = document.createElement("h6");
  var text = document.createElement("p");
  var expand = document.createElement("a");
  var expandDiv = document.createElement("div");
  
  col.className = "col-sm-4";
  card.className = "card mt-2 mb-2";
  img.className = "card-img-top";
  img.src = "//placehold.it/350x350";
  body.className = "card-body";
  title.className = "card-title";
  subtitle.className = "card-subtitle";
  text.className = "card-text";
  expand.className = "btn btn-primary";
  expand.setAttribute("data-toggle", "collapse");
  expand.href = "expand" + work.id;
  expandDiv.className = "collapse";
  expandDiv.id = "expand" + work.id;
  expand.innerHTML = "more";
  expandDiv.innerHTML = "some test para";
  expand.onclick = function() {
    $('#expand' + work.id).collapse('toggle');
  }
  
  title.innerHTML = work.company;
  subtitle.innerHTML = work.role;
  text.innerHTML = work.period;
  
  body.appendChild(title);
  body.appendChild(subtitle);
  body.appendChild(text);
  body.appendChild(expand);
  body.appendChild(expandDiv);
  
  card.appendChild(img);
  card.appendChild(body);
  
  col.appendChild(card);
  
  return col;
}

function createCardForSchool(school) {
  var col = document.createElement("div");
  var card = document.createElement("div");
  var img = document.createElement("img");
  var body = document.createElement("div");
  var title = document.createElement("h4");
  var subtitle = document.createElement("h6");
  var text = document.createElement("p");
  
  col.className = "col-sm-4";
  card.className = "card mt-2 mb-2";
  img.className = "card-img-top";
  img.src = "//placehold.it/720x350";
  body.className = "card-body";
  title.className = "card-title";
  subtitle.className = "card-subtitle";
  text.className = "card-text";
  
  title.innerHTML = school.school;
  subtitle.innerHTML = school.subject;
  text.innerHTML = school.period;
  
  body.appendChild(title);
  body.appendChild(subtitle);
  body.appendChild(text);
  
  card.appendChild(img);
  card.appendChild(body);
  
  col.appendChild(card);
  
  return col;
}

function createCardForProject(project) {
  var col = document.createElement("div");
  var card = document.createElement("div");
  var img = document.createElement("img");
  var body = document.createElement("div");
  var title = document.createElement("h4");
  var text = document.createElement("p");
  
  col.className = "col-sm-4";
  card.className = "card mt-2 mb-2";
  img.className = "card-img-top";
  img.src = "//placehold.it/720x350";
  body.className = "card-body";
  title.className = "card-title";
  text.className = "card-text";
  
  title.innerHTML = project.title;
  text.innerHTML = project.description;
  
  body.appendChild(title);
  body.appendChild(text);
  
  card.appendChild(img);
  card.appendChild(body);
  
  col.appendChild(card);
  
  return col;
}

$(document).ready(function() {
  var workExpDeck = document.getElementById("work-exp-deck");
  var eduDeck = document.getElementById("education-deck");
  var projectsDeck = document.getElementById("projects-deck");
  
  workExp.forEach(function(work) {
    workExpDeck.appendChild(createCardFor(work));
  });
  
  education.forEach(function(school) {
    eduDeck.appendChild(createCardForSchool(school));
  });
  
  projects.forEach(function(project) {
    projectsDeck.appendChild(createCardForProject(project));
  })
});
