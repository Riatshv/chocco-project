$(document).ready(() => {
    $(".members__name").on("click", (e) => {
        console.log($(".members__drop-menu").height())
        e.preventDefault();


        let currentMember = $(e.target),
            currentItem = currentMember.closest(".members__item"),
            currentDrop = currentMember.next();

        currentItem.toggleClass("members__item--active");

        $(".members__item").not(currentItem).removeClass("members__item--active");
        

        if (currentItem.hasClass("members__item--active")) {
                currentDrop.slideDown();

        } else {
            currentDrop.slideUp();
            
        }

        if ( !($(".members__item").not(currentItem).hasClass("members__item--active")) ) {
            $(".members__drop-menu").not(currentDrop).slideUp();

        } 
    });


});

