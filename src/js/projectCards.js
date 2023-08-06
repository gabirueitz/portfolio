const projects = document.getElementsByClassName("project");
for (const project of projects) {
	project.classList.add("hidden");
}

let projectMsg = document.getElementById("project-msg");

let flask1 = document.getElementById("flask1");
let project1 = document.getElementById("project1");

flask1.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project1.classList.toggle("hidden");
});

let flask2 = document.getElementById("flask2");
let project2 = document.getElementById("project2");

flask2.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project2.classList.toggle("hidden");
});

let flask3 = document.getElementById("flask3");
let project3 = document.getElementById("project3");

flask3.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project3.classList.toggle("hidden");
});

let flask4 = document.getElementById("flask4");
let project4 = document.getElementById("project4");

flask4.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project4.classList.toggle("hidden");
});

let flask5 = document.getElementById("flask5");
let project5 = document.getElementById("project5");

flask5.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project5.classList.toggle("hidden");
});

let flask6 = document.getElementById("flask6");
let project6 = document.getElementById("project6");

flask6.addEventListener("click", () => {
	for (const project of projects) {
		if (project.classList.contains("hidden")) {
		} else {
			project.classList.add("hidden");
		}
	}
	projectMsg.classList.add("hidden");
	project6.classList.toggle("hidden");
});
