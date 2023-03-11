let menuItems = document.querySelectorAll(".collapseMenu");

for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            menuItems[i].classList.remove("collapseActive");
        } else {
            let collapseContent = document.querySelectorAll(".collapseContent");
            for (let i = 0; i < collapseContent.length; i++) {
                collapseContent[i].style.display = "none";
                menuItems[i].classList.remove("collapseActive");
            }
            content.style.display = "block";
            menuItems[i].classList.add("collapseActive");
        }
    });
}