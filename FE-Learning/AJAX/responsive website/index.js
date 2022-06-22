
    let number=  $("#number")
    let count=0;
      setInterval(() => {
          if(count==65){
              clearInterval();
          }else{
              count+=1;
              number.html(count + "%")
          }
         
      }, 29);
    let number1=  $("#number1")
    let count1=0;
      setInterval(() => {
          if(count1==70){
              clearInterval();
          }else{
              count1+=1;
              number1.html(count1 + "%")
          }
         
      }, 29);
    let number2=  $("#number2")
    let count2=0;
      setInterval(() => {
          if(count2==80){
              clearInterval();
          }else{
              count2+=1;
              number2.html(count2 + "%")
          }
         
      }, 29);
    let number3=  $("#number3")
    let count3=0;
      setInterval(() => {
          if(count3==75){
              clearInterval();
          }else{
              count3+=1;
              number3.html(count3 + "%")
          }
         
      }, 29);