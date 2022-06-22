var n = 1, m = 0;// to load next and previous of json 
// load method
// debugger;
$(document).ready(function () {
    $("#addimage img").hide();
})
$("#div1").load(`https://jsonplaceholder.typicode.com/posts/1`);
$("#Next").click(function () {
    if (n > 0) {
        n++;
    } else {
        n = 1;
    }
    $("#div1").load(`https://jsonplaceholder.typicode.com/posts/${n}`);
})
$("#Previous").click(function () {
    if (n > 1) {
        n--;
    } else {
        n = 1;
    }
    $("#div1").load(`https://jsonplaceholder.typicode.com/posts/${n}`);
})
// get method
$("#title").click(function () {
    m++;
    $.get(`https://jsonplaceholder.typicode.com/posts/${m}`, function (responseText) {
        $("#displaytitle").append(`<p>${m}. ${responseText.title}</p>`)
        $("#displayjson").load(`https://jsonplaceholder.typicode.com/posts/${m}`);
    });
})
//AJAX POST method
// $("#postMethod-btn").click(function () {
//     var postinputValue = { postinputValue: $("#post-input").val() }
//     $.ajax({
//         url: "https://jsonplaceholder.typicode.com/posts",
//         type: "POST",
//         dataType: "json",
//         data: JSON.stringify(postinputValue),
//         success: function (data) {
//             alert("hi " + data.postinputValue + " welcome")
//         },
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         }
//     })
// })
// AJAX GET Method
$("#colorname").change(function () {
    var Colorselected = $(this).val();
    var imgColor;
    // 
    switch (Colorselected) {
        case "GREEN":
            imgColor = 1;
            break;
        case "PINK":
            imgColor = 5;
            break;
        case "BLUE":
            imgColor = 6;
            break;
        case "BROWN":
            imgColor = 10;
            break;
        default:
            $("#addimage img").hide();
    }
    // 
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/photos/${imgColor}`, type: "GET", success: function (responseText) {
            $("#addimage img").show();
            $("#addimage img").attr("src", `${responseText.url}`)
        }, error: function (xhr) {
            alert("An error occured: " + xhr.status + " " + xhr.statusText);
        }
    })
})


// 
$("#postMethod-btn").click(function () {
    var postInputValue = $("#post-input").val();
    var postinputValue = {
        id: 101,
        name: `${postInputValue}`,
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        }
    }
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(postinputValue),
        success: function (data) {
            alert("hi " + data.name + " welcome")
        },
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
})
