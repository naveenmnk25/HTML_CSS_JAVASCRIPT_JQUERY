$("#colorchange-btn").click(function () {
    $(".content-one").css({ "background-color": "blue", "color": "white" });
    setTimeout(function () {
        $(".content-two").css({ "background-color": "red", "color": "white" })
    }, 4000);
});

