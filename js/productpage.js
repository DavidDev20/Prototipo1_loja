const minus = document.querySelector(".minus")
const number = document.querySelector(".number")
const plus = document.querySelector(".plus")

let cont = 1;

plus.addEventListener("click", () => {

    cont++;

    cont = (cont < 10) ? "0" + cont : cont;

    number.innerText = cont
});

minus.addEventListener("click", () => {

    if (cont > 1) {
        cont--;

        cont = (cont < 10) ? "0" + cont : cont;

        number.innerText = cont
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let i;

    let slides = document.getElementsByClassName("p-img");

    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";

    dots[slideIndex - 1].className += " active";
}