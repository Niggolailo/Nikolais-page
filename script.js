function Reveal() {
     document.getElementById("Message").style.display = 'block';
}

function CountDown() {
   var cVal = document.getElementById("CountDownButton").innerHTML;
   var nVal = 0;
   if(cVal > 0){
        nVal = cVal - 1;
   }
   document.getElementById("CountDownButton").innerHTML = nVal;
}

function color(value){
    document.body.style.backgroundColor=value;
}
function Hide() {
     document.getElementById("Message").style.display = 'none';
}