

 var color1 = document.getElementById('color1');
 var color2 =  document.getElementById('color2');
var body  = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var color3 =  document.getElementById('color3');
 let button = document.getElementById('btn');
 
 
 function BackGenerater(){
 
  body.style.background = "linear-gradient(to right , " + color1.value + " , " + color2.value + "," + color3.value + ")"; 

  h3.innerHTML =  body.style.background + ";"; 
 }
 
 color1.addEventListener('change',BackGenerater);
 color2.addEventListener('change',BackGenerater);
 color3.addEventListener('change',BackGenerater);

   

