imageBasePath = "assets/images/";

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
	var expandDesc = document.createElement("ul");

	col.className = "col-sm-4";
	card.className = "card mt-2 mb-2";
	img.className = "card-img-top img-fluid rounded mx-auto d-block";
	img.src = imageBasePath + work.image;
	body.className = "card-body";
	title.className = "card-title";
	subtitle.className = "card-subtitle";
	text.className = "card-text";
	
	expand.setAttribute("data-toggle", "collapse");
	expand.setAttribute("style", "text-decoration:none");
	expand.href = "expandWork" + work.id;
	expandDiv.className = "collapse";
	expandDiv.id = "expandWork" + work.id;

	// add description as unordered list
	for (index in work.description) {
		var item = document.createElement("li");
		item.innerHTML = work.description[index];
		expandDesc.appendChild(item);
	}

	expandDiv.appendChild(expandDesc);
	expand.onclick = function () {
		$('#expandWork' + work.id).collapse('toggle');
	}
	
	title.innerHTML = work.company;
	subtitle.innerHTML = work.role;
	text.innerHTML = work.period;
	body.appendChild(title);
	body.appendChild(subtitle);
	body.appendChild(text);
	body.appendChild(expandDiv);
	expand.appendChild(img);
	card.appendChild(expand);
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
	var expand = document.createElement("a");
	var expandDiv = document.createElement("div");
	var expandDesc = document.createElement("ul");
	
	col.className = "col-sm-4";
	card.className = "card mt-2 mb-2";
	img.className = "card-img-top img-fluid rounded mx-auto d-block";
	img.src = imageBasePath + school.image;
	body.className = "card-body";
	title.className = "card-title";
	subtitle.className = "card-subtitle";
	text.className = "card-text";
	title.innerHTML = school.school;
	subtitle.innerHTML = school.subject;
	text.innerHTML = school.period;
	
	expand.setAttribute("data-toggle", "collapse");
	expand.setAttribute("style", "text-decoration:none");
	expand.href = "expandSchool" + school.id;
	expandDiv.className = "collapse";
	expandDiv.id = "expandSchool" + school.id;
	
	// add description as unordered list
	for (index in school.description) {
		var item = document.createElement("li");
		item.innerHTML = school.description[index];
		expandDesc.appendChild(item);
	}
	
	expandDiv.appendChild(expandDesc);
	expand.onclick = function () {
		$('#expandSchool' + school.id).collapse('toggle');
	}
	
	body.appendChild(title);
	body.appendChild(subtitle);
	body.appendChild(text);
	body.appendChild(expandDiv);
	expand.appendChild(img);
	card.appendChild(expand);
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
	var expand = document.createElement("a");
	var expandDiv = document.createElement("div");
	var expandDesc = document.createElement("ul");
	
	col.className = "col-sm-4";
	card.className = "card mt-2 mb-2";
	img.className = "card-img-top img-fluid rounded mx-auto d-block";
	img.src = imageBasePath + project.image;
	body.className = "card-body";
	title.className = "card-title";
	text.className = "card-text";
	title.innerHTML = project.title;
	text.innerHTML = project.description;
	expand.setAttribute("data-toggle", "collapse");
	expand.setAttribute("style", "text-decoration:none");
	expand.href = "expandProject" + project.id;
	expandDiv.className = "collapse";
	expandDiv.id = "expandProject" + project.id;
	
	// add description as unordered list
	if(project.hasOwnProperty("additionalInfo")) {
		for (index in project.additionalInfo) {
			var item = document.createElement("li");
			item.innerHTML = project.additionalInfo[index];
			expandDesc.appendChild(item);
		}
	}
	
	expandDiv.appendChild(expandDesc);
	expand.onclick = function () {
		$('#expandProject' + project.id).collapse('toggle');
	}
	
	body.appendChild(title);
	body.appendChild(text);
	body.appendChild(expandDiv);
	expand.appendChild(img);
	card.appendChild(expand);
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
