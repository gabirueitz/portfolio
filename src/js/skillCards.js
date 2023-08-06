const cards = document.getElementsByClassName("card");
for (const card of cards) {
	card.classList.add("hidden");
}

const msg = document.getElementById("msg");

const html = document.getElementById("html");
const htmlCard = document.getElementById("htmlCard");

html.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	htmlCard.classList.toggle("hidden");
});

const css = document.getElementById("css");
const cssCard = document.getElementById("cssCard");

css.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	cssCard.classList.toggle("hidden");
});

const js = document.getElementById("js");
const jsCard = document.getElementById("jsCard");

js.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	jsCard.classList.toggle("hidden");
});

const git = document.getElementById("git");
const gitCard = document.getElementById("gitCard");

git.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	gitCard.classList.toggle("hidden");
});

const typescript = document.getElementById("typescript");
const typescriptCard = document.getElementById("typescriptCard");

typescript.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	typescriptCard.classList.toggle("hidden");
});

const react = document.getElementById("react");
const reactCard = document.getElementById("reactCard");

react.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	reactCard.classList.toggle("hidden");
});

const python = document.getElementById("python");
const pythonCard = document.getElementById("pythonCard");

python.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	pythonCard.classList.toggle("hidden");
});

const nodejs = document.getElementById("nodejs");
const nodejsCard = document.getElementById("nodejsCard");

nodejs.addEventListener("click", () => {
	for (const card of cards) {
		if (card.classList.contains("hidden")) {
		} else {
			card.classList.add("hidden");
		}
	}
	msg.classList.add("hidden");
	nodejsCard.classList.toggle("hidden");
});
