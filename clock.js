

const text=document.getElementById('clock');
const day=document.getElementById('day');


 setInterval(() => {
        a= new Date();
    // a.getHours();
    
    text.innerHTML=a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();


 },1000);

 setInterval(() => {
    a= new Date();
 
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    b=weekday[a.getDay()];
  

    day.innerHTML=b;


},1000);
