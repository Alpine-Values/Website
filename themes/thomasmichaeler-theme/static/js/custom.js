masonry();
$(function () {
    highlightCurrentPage();
    makeImagesResponsive();
});
function highlightCurrentPage() {
  $("a[href='" + location.href + "']").parent().addClass("active");
}
function makeImagesResponsive() {
    $("img").addClass("img-responsive");
}

function masonry() {
    var $grid = $('.portfolio-container').masonry({
        itemSelector: ".masonry-item"
    });
    $grid.imagesLoaded().progress(function () {
        $grid.masonry('layout');
    });
}