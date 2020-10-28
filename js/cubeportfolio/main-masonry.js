(function($, window, document, undefined) {
  "use strict";

  // init cubeportfolio
  $("#grid-container").cubeportfolio({
    filters: "#filters-container",
    layoutMode: "grid",
    defaultFilter: "*",
    animationType: "slideDelay",
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: "responsive",
    mediaQueries: [
      {
        width: 1100,
        cols: 4
      },
      {
        width: 800,
        cols: 4
      },
      {
        width: 500,
        cols: 3
      },
      {
        width: 320,
        cols: 2
      }
    ],
    caption: "overlayBottomAlong",
    displayType: "bottomToTop",
    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: ".cbp-lightbox",
    lightboxGallery: true,
    lightboxTitleSrc: "data-title",
    lightboxCounter:
      '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>'
  });
})(jQuery, window, document);
