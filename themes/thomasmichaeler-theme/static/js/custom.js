masonry();
$(function () {
    highlightCurrentPage();
    makeImagesResponsive();
    alignImageGrid();
});
function highlightCurrentPage() {
  $("a[href='" + location.href + "']").addClass("active");
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


function alignImageGrid() {
  if( $('#article, #about').length ) {

    $(window).on('load', function() {

      $('.content-column-content p').each( function(i){
        var cont = $(this);

        if( cont.has('img').length ) {
          cont.addClass('post-masonry');
          var num = cont.find('img').length;
          var ratios = new Array('1');
          var sum = 0;

          cont.find('img').each( function(j){
            var img = $(this);
            var src = img.attr('src');

            ratios[j] = (img[0].naturalWidth+10) / (img[0].naturalHeight+10);   // width plus padding
            sum += ratios[j];

            img.wrap('<a href="'+src+'" />').parent().fluidbox({
                stackIndex: 100,
                viewportFill: 0.9
            });

            if(j >= num-1) {
              $.each(ratios, function(k, val) {
                cont.find('a:eq('+k+')').width( (ratios[k] / sum * 100)+'%' );
              });
            }
          });

        } else {


        }

      });

    });

  }  
}