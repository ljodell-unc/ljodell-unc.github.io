function appearOnScroll() {
    let hiddenElements = document.querySelectorAll(".appearOnScroll");
    for (let i = 0; i < hiddenElements.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfHiddenElement = hiddenElements[i].getBoundingClientRect().top;
        let showElement = 100;

        if (topOfHiddenElement < windowHeight - showElement) {
            hiddenElements[i].classList.add("active");

            //delaying animations until elements are visible by adding a new class on the animation once visible
            if (hiddenElements[i].classList.contains("photo")) {
                hiddenElements[i].classList.add("animatedPhoto");
            } else if(hiddenElements[i].classList.contains("secondScrollArrow2")) {
                hiddenElements[i-1].classList.add("secondScroll1Active");
                hiddenElements[i].classList.add("secondScroll2Active");
            }
        }
    }
}

window.addEventListener("scroll", appearOnScroll);
window.addEventListener("load", appearOnScroll);