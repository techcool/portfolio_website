 $("#open_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '1');
    $('.offcanvas__area').css('visibility', 'visible');
  });
  $("#close_offcanvas").click(function () {
    $('.offcanvas__area').css('opacity', '0');
    $('.offcanvas__area').css('visibility', 'hidden');
  });

    jQuery(document).ready(function () {
    /////////////////////////////////////////////////////
    // 29. Offcanvas Menu
    $('.offcanvas__menu').meanmenu({
      meanScreenWidth: "5000",
      meanMenuContainer: '.offcanvas__menu-wrapper',
      meanMenuCloseSize: '36px',
    });
    /////////////////////////////////////////////////////
  });