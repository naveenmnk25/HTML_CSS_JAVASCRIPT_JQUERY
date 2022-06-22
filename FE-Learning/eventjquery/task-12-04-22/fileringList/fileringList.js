$("#first-name-btn").click(function () {
    alert($("li").first().text())
})
$("#middle-name-btn").click(function () {
    var elementsLength = $("ul li").length;
    var middleValue = Math.round(elementsLength / 2) - 1
    alert($("li").eq(middleValue).text())
});
$("#last-name-btn").click(function () {
    alert($("li").last().text())
})
var countOfList = 0
var BgColorToList = 0
var BgcolorofLi = ["primary", "secondary", "success", "danger", "warning"]
$("#add-new-element").click(function () {
    countOfList++
    $("ul").append(`<li class="list-group-item list-group-item-${BgcolorofLi[BgColorToList]}">NAME-${countOfList}</li>`);
    BgColorToList++;
    if (BgColorToList >= BgcolorofLi.length) {
        BgColorToList = 0;
    }
})
$("#remove-last-element").click(function () {
    if (countOfList > 0) {
        countOfList--
    } else {
        countOfList = 0
    }
    if (BgColorToList > 0) {
        BgColorToList--;
    } else {
        BgColorToList = 0;
    }
    $("ul li").last().remove()
})


