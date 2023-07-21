const cards = document.getElementsByClassName("card");
for (const card of cards) {
    card.classList.add("hidden");
}

let msg = document.getElementById("msg");

let html = document.getElementById("html");
let htmlCard = document.getElementById("htmlCard");

html.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    htmlCard.classList.toggle('hidden');
})

let css = document.getElementById("css");
let cssCard = document.getElementById("cssCard");

css.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    cssCard.classList.toggle('hidden');
})

let js = document.getElementById("js");
let jsCard = document.getElementById("jsCard");

js.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    jsCard.classList.toggle('hidden');
})

let vscode = document.getElementById("vscode");
let vscodeCard = document.getElementById("vscodeCard");

vscode.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    vscodeCard.classList.toggle('hidden');
})

let git = document.getElementById("git");
let gitCard = document.getElementById("gitCard");

git.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    gitCard.classList.toggle('hidden');
})

let python = document.getElementById("python");
let pythonCard = document.getElementById("pythonCard");

python.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    pythonCard.classList.toggle('hidden');
})

let nodejs = document.getElementById("nodejs");
let nodejsCard = document.getElementById("nodejsCard");

nodejs.addEventListener('click', () => {
    for (const card of cards) {
        if (card.classList.contains("hidden")) {
        }

        else {
            card.classList.add("hidden");
        }
    }
    msg.classList.add('hidden');
    nodejsCard.classList.toggle('hidden');
})