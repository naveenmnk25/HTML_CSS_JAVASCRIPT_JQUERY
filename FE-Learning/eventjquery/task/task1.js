var tamilnadu=["Ariyalur","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kanchipuram","Kanyakumari","Karur","Krishnagiri","Madurai","Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai","Ramanathapuram","Salem","Sivaganga","Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvallur","Tiruvannamalai","Tiruvarur","Vellore","Viluppuram","Virudhunagar"]
var delhi=["Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","Shahdara","South Delhi","South East Delhi","South West Delhi","West Delhi"]
var maharashtra=["Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara","Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli","Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban","Nagpur"]
var uttarpradesh=["Agra","Aligarh","Allahabad","Ambedkar Nagar","Amethi","Amroha","Auraiya","Azamgarh","Baghpat","Bahraich","Ballia","Balrampur","Banda","Barabanki","Bareilly","Basti","Bhadohi","Bijnor","Budaun","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Faizabad","Farrukhabad","Fatehpur","Firozabad"]
 $(".hs").hide();
 $(".state-err").hide();
$("#statename1").change(function(){
    var stateselected=$(this).val();
    var optionlist;
    var htmlstring="";
    $(".hs").show(); 
    $(".state-err").hide();
    switch(stateselected){
        case "Tamil Nadu":
            optionlist =tamilnadu;
            break;
        case "Delhi":
            optionlist =delhi;
            break;
        case "Maharashtra":
            optionlist =maharashtra;
            break;
        case "Uttar Pradesh":
            optionlist =uttarpradesh;
            break;
        default:
            $(".hs").hide();
            $(".state-err").show();           
    }
    for(var i=0;i<optionlist.length;i++){
        htmlstring=htmlstring+"<option value='"+ optionlist[i] +"'>"+ optionlist[i] +"</option>"
    }
    $("#districtname1").html(htmlstring);
})