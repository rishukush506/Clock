
function setDate()
{
  var now=new Date();
  // For setting seconds according to current time
  var seconds=now.getSeconds();
  var secondDegree=((seconds*6)+90)+"deg";
  document.querySelector(".second").style.transform="rotate("+secondDegree+")";
  // For changing minutes
   var minutes=now.getMinutes();
   var minuteDegree=((minutes*6)+90)+"deg";
   document.querySelector(".minute").style.transform="rotate("+minuteDegree+")";
  //  For changing hours
   var hours=now.getHours();
   // changing hours from 24 to 12 system
   if(hours>12){hours=hours-12;}
   var hourDegree=((hours*30)+(minutes*0.5)+90)+"deg";
    document.querySelector(".hour").style.transform="rotate("+hourDegree+")";
// Don't working
   if(seconds==59){
       document.querySelector(".hand").style.transition="";
   }
}
// Calling above function each second
setInterval(setDate,1000);
