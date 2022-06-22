    var Onlyalphaerr;
    var onlyalphavalue=$("#onlyalpha");
    $('#onlyalpha').keyup(function () {
       var patternonlyalpha=/^[a-zA-Z\s]+$/;
       if (onlyalphavalue.val().length == 0) {
           alert("enter alpha its empty")
           Onlyalphaerr = 1;
           return false;
       }
       else if(!(patternonlyalpha.test(onlyalphavalue.val()))) {
           alert("type only alpha")
           Onlyalphaerr = 1;
           return false;
       }
       else {
           Onlyalphaerr=0;
       }
    }); 

    var alphaCommaerr;
    var onlyalphacommavalue=$("#alphaComma");
    $('#alphaComma').keyup(function () {
        console.log(onlyalphacommavalue.val().length)
       var patternalphaComma=/^[a-zA-Z ,\s]+$/;
       if (onlyalphacommavalue.val().length == 0) {
           alert("enter alphacomma its empty")
           alphaCommaerr = 1;
           return false;
       }
       else if(!(patternalphaComma.test(onlyalphacommavalue.val()))) {
           alert("type only alpha and comma")
           alphaCommaerr = 1;
           return false;
       }
       else {
           alphaCommaerr=0;
       }
    }); 

var onlynumbererr;
var onlynumbervalue = $("#onlynumber");
$('#onlynumber').keyup(function () {
    var patternonlynumber=/^[0-9\s]+$/;
    if (onlynumbervalue.val().length == 0) {
        alert("type numbers its empty")
        onlynumbererr = 1;
        return false;
    }   else if(!patternonlynumber.test(onlynumbervalue.val())) {
        alert("type number only")
        onlynumbererr = 1;
        return false;
    } else {
        onlynumbererr=0;
    }
});   


    $('#submitformbtn').click(function (e) {
        e.preventDefault();
        if ((Onlyalphaerr == 0) &&
            (alphaCommaerr == 0)&&
            (onlynumbererr == 0) ) {
            alert("success")                                  
        } else {
            alert("fill the details in correct formet ...")
        }
    });
