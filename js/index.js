/*---------------------- SELECT ELEMENTS -----------------*/
let buttons = document.querySelectorAll("#books .box .info button"),
popup = document.querySelector(".popup"),
carousels = document.querySelectorAll(".popup .carousel");


/*---------------------- OPEN POPUP -----------------*/
buttons.forEach(function(button, index) {
    button.addEventListener("click", function(e) {
        e.stopPropagation();
        popup.classList.add("active");
        carousels.forEach(function(carousel) {
            //any carousel have display none
            carousel.style.display = "none";
        });

        //carousel display block when the index it
        carousels[index].style.display = "block";
        setTimeout(function() {
            popup.classList.add("show");
        }, 100);
    });
});


/*---------------------- CLOSE POPUP -----------------*/
popup.addEventListener("click", function() {
    popup.classList.remove("show");
    setTimeout(function() {
        popup.classList.remove("active");
    }, 1000);
});


/*---------------------- STOP PROPAGATION -----------------*/
carousels.forEach(function(carousel) {
    carousel.addEventListener("click", function(e) {
        e.stopPropagation();
    });
});