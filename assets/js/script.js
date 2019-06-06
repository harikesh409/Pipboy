$(function () {
    $(".item-list a").on("click", e => {
        $(".item-list a").removeClass("active");
        $(e.currentTarget).addClass("active");
    });
});