$(document).ready(function () {
    $("#designation-form").hide();
    $("#exp-year-form").hide();
    $("#genderErr").hide();
})
var currentyear = new Date().getFullYear();
var currentmonth = new Date().getMonth();
var currentday = new Date().getDate();
var currentDate = new Date();
let gender = $('input[name="gender"]');
$(function () {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    var maxDate = year + '-' + month + '-' + day;
    $('#doj ,#dob').attr('max', maxDate);
});
// user name
let usernamevalue = $("#username");
let usernameerr;
$("#username").keyup(function () {
    if (usernamevalue.val().length == 0) {
        usernameerr = 1;
        return false;
    }
    else {
        usernameerr = 0;
    }
})
// DOB
let dobGendererr;
$("#dob").change(function () {
    var dobyear = new Date($("#dob").val()).getFullYear();
    var dobmonth = new Date($("#dob").val()).getMonth();
    var ageyear = currentyear - dobyear
    if (currentmonth >= dobmonth)
        var agemonth = currentmonth - dobmonth;
    else {
        ageyear--;
        var agemonth = 12 + currentmonth - dobmonth;
    }
    console.log(ageyear)
    console.log(agemonth)
    $("#genderErr").hide();
    if ($("#dob").val() == '') {
        $("#genderErr").hide();
        dobGendererr = 1;
    } else if (ageyear < 18) {
        dobGendererr = 0;
        $("#genderErr").hide();
    } else {
        dobGendererr = 1;
        $("#genderErr").show();
        $('input[name="gender"]').change(function () {
            if (gender[0].checked) {
                $("#genderErr").hide();
                dobGendererr = 0;
            } else if (gender[1].checked) {
                $("#genderErr").hide();
                dobGendererr = 0;
            } else {
                $("#genderErr").show();
                dobGendererr = 1;
                return false;
            }
        })
    }
})
// DOJ
let dojerr;
$("#doj").change(function () {
    var dojyear = new Date($("#doj").val()).getFullYear();
    var dojmonth = new Date($("#doj").val()).getMonth();
    var expyear = currentyear - dojyear
    if (currentmonth >= dojmonth)
        var expmonth = currentmonth - dojmonth;
    else {
        expyear--;
        var expmonth = 12 + currentmonth - dojmonth;
    }
    if (expmonth > 0) {
        $("#designation").html('<span class="badge rounded-pill bg-success py-2 px-4 fs-6">Experience</span>')
        $("#designation-form").show();
        $("#exp-year-form").show();
        $("#yearsofExperience").html(`<span class="badge bg-light text-dark py-2 px-4 fs-6">${expyear} Years and ${expmonth} month</span>`)

    } else {
        $("#designation").html('<span class="badge rounded-pill bg-primary  py-2 px-4 fs-6">Fresher</span>')
        $("#designation-form").show();
        $("#exp-year-form").hide();

    }
    if ($("#doj").val() == '') {
        $("#designation-form").hide();
        $("#exp-year-form").hide();
        dojerr = 1;
        return false;
    } else {
        dojerr = 0;
    }
    console.log("expyear", expyear)
    console.log("expmonth", expmonth)
})
console.log($("#doj").val())
$("#submit-btn").click(function (e) {
    e.preventDefault();
    if ((usernameerr == 0) && (dobGendererr == 0) && (dojerr == 0)
    ) {
        alert("succcess")
    } else {
        alert("fill the details fully")
    }
})
