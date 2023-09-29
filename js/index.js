let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){

    let i;
    let slide = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if(n > slideIndex.length) { slideIndex = 1}

    if(n < 1) { slideIndex = slide.length}

    for( i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }

    for( i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slide[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



let slideIndexauto = 0;
showSlidesauto();

function showSlidesauto(){
    let ia;
    let slides = document.getElementsByClassName("slide");
    let dotsa = document.getElementsByClassName("dot");

    for(ia = 0; ia < slides.length; ia++){

        slides[ia].style.display = "none";

    }

    slideIndexauto++;

    if( slideIndexauto > slides.length) {slideIndexauto = 1}

    for( ia = 0; ia < dotsa.length; ia++){
        dotsa[ia].className = dotsa[ia].className.replace(" active", "");
    }

    slides[slideIndexauto-1].style.display = "block";
    dotsa[slideIndexauto-1].className += " active";
    setTimeout(showSlidesauto, 50000); 
} 