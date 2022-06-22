$("#popup-btn").click(function () {
    $(".modal").fadeIn(1000);
    $("body").addClass('bodybgformodelcontent').fadeIn(1000);
})
$("#close-btn").click(function () {
    $(".modal").fadeOut("fast");
    $("body").removeClass('bodybgformodelcontent');
})

