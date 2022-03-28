var hamburger = document.querySelector(".hamburger");
var overlay = document.querySelector(".overlay-menu");

hamburger.addEventListener("click", function(e) {
    e.preventDefault();

    overlay.style.display = "block";
});

overlay.addEventListener("click", function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
    }
});