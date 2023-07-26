/* --------------- Toggle Themes --------------- */
const root = document.documentElement;
let themeBtn = document.getElementById("themeBtn");
let themeSwitcher = document.getElementById("switcher");

themeSwitcher.addEventListener('click', () => {
    themeBtn.classList.toggle('dark')
    themeBtn.classList.toggle('light')

    if (initialTheme) {
        root.style.setProperty('--color1', '#384466');
        root.style.setProperty('--color2', '#797999');
        root.style.setProperty('--color3', '#1F1F32');
        root.style.setProperty('--color4', '#fff950');
        root.style.setProperty('--color5', '#1F1F32');
        initialTheme = false;
    } else {
        root.style.setProperty('--color1', '#03091A');
        root.style.setProperty('--color2', '#1F1F32');
        root.style.setProperty('--color3', '#CACFD6');
        root.style.setProperty('--color4', '#fff950');
        root.style.setProperty('--color5', '#35acac');
        initialTheme = true;
    }
})

let initialTheme = true;

function toggleThemes() {

}

/* ------------- Paralax Effects ------------- */
function reveal() {
    var reveals = document.querySelectorAll(".toAnimate");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 10;
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