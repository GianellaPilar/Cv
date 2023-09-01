const details = document.querySelector("details");
details.ToggleAttribute("open");

function escribirEnPantalla(texto){
    let arr=texto.split("");
    i=0;
   let intervalo= setInterval(function(){
      if(i==arr.length-1){ 
        document.getElementById("JB").innerHTML+=arr[i];
        clearInterval(intervalo);} 
      else {
      if(arr[i]==" "){
       document.getElementById("JB").innerHTML+=arr[i];
       document.getElementById("JB").innerHTML+=arr[i+1];
        i+=2;
      }else{
      document.getElementById("JB").innerHTML+=arr[i];
      i++;
        }
      }
    },500); 
  }
  
  escribirEnPantalla("Jenna Bishop");

