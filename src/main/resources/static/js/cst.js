$(function () {
    $(".cst-mobile-menu-item").click(function () {
        $(".cst-mobile-menu").toggleClass("cst-mobile-hide");
    });

    $("div.ui.basic.button.orange.circular").popup({
        // popup:("div.ui.segment.center.aligned.basic"),
        popup: ("div.ui.flowing.popup.transition.hidden"),
        on: "click",
        position: "bottom center"
    });

    $("a.wechat").popup({
        popup: ("div.ui.flowing.popup.transition.hidden"),
        on: "hover",
        position: "top center"
    });

    $(".ui.dropdown").dropdown();
});