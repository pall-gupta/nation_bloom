// $(document).ready(function() {
//     var itemsMainDiv = ('.MultiCarousel');
//     var itemsDiv = ('.MultiCarousel-inner');
//     var itemWidth = "";

//     $('.leftLst, .rightLst').click(function() {
//         var condition = $(this).hasClass("leftLst");
//         if (condition)
//             click(0, this);
//         else
//             click(1, this)
//     });

//     ResCarouselSize();

//     $(window).resize(function() {
//         ResCarouselSize();
//     });

//     //this function define the size of the items
//     function ResCarouselSize() {
//         var incno = 0;
//         var dataItems = ("data-items");
//         var itemClass = ('.item');
//         var id = 0;
//         var btnParentSb = '';
//         var itemsSplit = '';
//         var sampwidth = $(itemsMainDiv).width();
//         var bodyWidth = $('body').width();
//         $(itemsDiv).each(function() {
//             id = id + 1;
//             var itemNumbers = $(this).find(itemClass).length;
//             btnParentSb = $(this).parent().attr(dataItems);
//             itemsSplit = btnParentSb.split(',');
//             $(this).parent().attr("id", "MultiCarousel" + id);


//             if (bodyWidth >= 1200) {
//                 incno = itemsSplit[3];
//                 itemWidth = sampwidth / incno;
//             } else if (bodyWidth >= 992) {
//                 incno = itemsSplit[2];
//                 itemWidth = sampwidth / incno;
//             } else if (bodyWidth >= 768) {
//                 incno = itemsSplit[2];
//                 itemWidth = sampwidth / incno;
//             } else {
//                 incno = itemsSplit[1];
//                 itemWidth = sampwidth / incno;
//             }
//             $(this).css({
//                 'transform': 'translateX(0px)',
//                 'width': itemWidth * itemNumbers
//             });
//             $(this).find(itemClass).each(function() {
//                 $(this).outerWidth(itemWidth);
//             });

//             $(".leftLst").addClass("over");
//             $(".rightLst").removeClass("over");

//         });
//     }


//     //this function used to move the items
//     function ResCarousel(e, el, s) {
//         var leftBtn = ('.leftLst');
//         var rightBtn = ('.rightLst');
//         var translateXval = '';
//         var divStyle = $(el + ' ' + itemsDiv).css('transform');
//         var values = divStyle.match(/-?[\d\.]+/g);
//         var xds = Math.abs(values[4]);
//         if (e == 0) {
//             translateXval = parseInt(xds) - parseInt(itemWidth * s);
//             $(el + ' ' + rightBtn).removeClass("over");

//             if (translateXval <= itemWidth / 2) {
//                 translateXval = 0;
//                 $(el + ' ' + leftBtn).addClass("over");
//             }
//         } else if (e == 1) {
//             var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
//             translateXval = parseInt(xds) + parseInt(itemWidth * s);
//             $(el + ' ' + leftBtn).removeClass("over");

//             if (translateXval >= itemsCondition - itemWidth / 2) {
//                 translateXval = itemsCondition;
//                 $(el + ' ' + rightBtn).addClass("over");
//             }
//         }
//         $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
//     }

//     //It is used to get some elements from btn
//     function click(ell, ee) {
//         var Parent = "#" + $(ee).parent().attr("id");
//         var slide = $(Parent).attr("data-slide");
//         ResCarousel(ell, Parent, slide);
//     }

// });
$(document).ready(function() {

    var owl = $("#owl-demo");

    owl.owlCarousel({

        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1000, 6], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // 3 items betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0;
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

    });

    // Custom Navigation Events
    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })
    $(".play").click(function() {
        owl.trigger('owl.play', 1000);
    })
    $(".stop").click(function() {
        owl.trigger('owl.stop');
    })


});