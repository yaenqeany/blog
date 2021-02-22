$(function () {
    $(".cst-mobile-menu-item").click(function () {
        $(".cst-mobile-menu").toggleClass("cst-mobile-hide");
    });

    $("div.ui.basic.button.orange.circular").popup({
        popup:("div.ui.segment.center.aligned.basic"),
        on: "click",
        position: "bottom center"
    });
});