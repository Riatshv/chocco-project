$(document).ready(() => {

    var itemWidth;
    var item;

    function init() {
        itemWidth = $(".container").width();

        item = $(".bars__item");

        item.width(itemWidth);

        right = itemWidth*itemIndex;

        $(".bars__list").stop(true, false).animate({
            "right" : `${right}`
        });
    }


    let right = 0;
    let itemIndex = 0;
    
    $(window).resize(() => {
        init();   
    });



    $(".leftarrow").on("click", function(e) {
        e.preventDefault();
        console.log("!");

        if (right > 0) {
            right -= itemWidth;

            $(".bars__list").stop(true, false).animate({
                "right" : `${right}`
            });

            itemIndex -= 1;
  
        } else {
            right = itemWidth*(item.length-1);

            $(".bars__list").stop(true, false).animate({
                "right" : `${right}`
            });

            itemIndex = item.length-1;
        }
    })

    $(".rightarrow").on("click", function(e) {
        e.preventDefault();
        console.log("!");

        if (right < itemWidth*(item.length-1)) {
            right += itemWidth;

            $(".bars__list").stop(true, false).animate({
                "right" : `${right}`
            });

            itemIndex += 1;
  
        } else {
            right = 0;

            $(".bars__list").stop(true, false).animate({
                "right" : `${right}`
            });

            itemIndex = 0;
        }

    });

    init();

    console.log("Mask drey");
 
});