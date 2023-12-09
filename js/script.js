// event pada saat link diclick
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap element ybs
  var elementTujuan = $(tujuan);

  // pindahkan scroll
  $("html, body").animate(
    {
      scrollTop: elementTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

// Parallax
// About
$(window).on("load", function () {
  $(".pKiri").addClass("PMuncul");
  $(".pKanan").addClass("PMuncul");
});
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });
  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });

  // Portfolio
  if (wScroll > $(".portfolio").offset().top - 250) {
    $(".portfolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portfolio .thumbnail").eq(i).addClass("muncul");
      }, 500 * (i + 1));
    });
  }
});
