$("#textsearchbtn").click(function(){
   let textsearchinputvalue = $("#textsearchinput").val();
   let stringmatch =["naveen","kumar","nazriya","dhanush","virat"]
   console.log(textsearchinputvalue)

       if(stringmatch.includes(textsearchinputvalue)){
           alert("success")
       }else{
           alert("does not match...")
       }
   
})