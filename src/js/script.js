function reveal() {
    var reveals = document.querySelectorAll(".toAnimate");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


const burguer = document.getElementById('burguer');

function toggleMenu() {
    const header = document.getElementById('header');
    header.classList.toggle('active');
}

burguer.addEventListener('click', toggleMenu);