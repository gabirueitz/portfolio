/* --------------- Toggle Themes --------------- */
let initialTheme = true;

function toggleThemes() {
    const root = document.documentElement;

    if (initialTheme) {
        root.style.setProperty('--color1', '#');
        root.style.setProperty('--color2', '#');
        root.style.setProperty('--color3', '#');
        root.style.setProperty('--color4', '#');
        root.style.setProperty('--color5', '#');
        initialTheme = false;
    } else {
        root.style.setProperty('--color1', '#03091A');
        root.style.setProperty('--color2', '#1F1F32');
        root.style.setProperty('--color3', '#CACFD6');
        root.style.setProperty('--color4', '#fff950');
        root.style.setProperty('--color5', '#35acac');
        initialTheme = true;
    }
}

/* ------------- Paralax Effects ------------- */
function reveal() {
    var reveals = document.querySelectorAll(".toAnimate");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/* ------------------ Menu ------------------ */
const burguer = document.getElementById('burguer');
const header = document.getElementById('header');

function toggleMenu() {
    header.classList.toggle('active');
}

burguer.addEventListener('click', toggleMenu);

function unactivate() {
    header.classList.toggle('active');
};