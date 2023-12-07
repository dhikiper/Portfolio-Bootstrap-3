// event pada saat link diclick
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");

  // tangkap element ybs
  var elementTujuan = $(tujuan);

  // pindahkan scroll
  $("body").animate(
    {
      scroll: elementTujuan.offset().top - 50,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});
