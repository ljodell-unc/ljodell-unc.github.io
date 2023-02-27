function appearOnScroll() {
    let hiddenElements = document.querySelectorAll(".appearOnScroll");
    for (let i = 0; i < hiddenElements.length; i++) {
        let windowHeight = window.innerHeight;
        let topOfHiddenElement = hiddenElements[i].getBoundingClientRect().top;
        let showElement = 100;

        if (topOfHiddenElement < windowHeight - showElement) {
            hiddenElements[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", appearOnScroll);
window.addEventListener("load", appearOnScroll);